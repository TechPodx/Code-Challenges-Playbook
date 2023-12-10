// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

/**********Create Functions***********/

//factory function 
const pAequorFactory = (number, array) => {
  return {
    object: {
      _specimenNum: number,
      _dna: array
    },

    //simulate P. aequor‘s high rate of mutation (change in its DNA).
    mutate() {
      //generate random number
      let randomNum = Math.floor(Math.random() * 15);
      let randomBase = this._dna[randomNum];
      let callRandomBase = returnRandBase();
    
      for (let i = 0; i < this._dna.length; i++) {
        if (i === randomNum) {
          while (callRandomBase === randomBase) {
            callRandomBase = returnRandBase();
          }
          randomBase = callRandomBase;
        } 
      };
      return this._dna;
    },

    //compare the DNA sequences of different P. aequor.
    compareDNA(pAequor) {
      let identicalBases = 0;
      
      if (pAequor.object && pAequor.object._dna) {
        for (let i = 0; i < pAequor.object._dna.length; i++) {
          if (this.object._dna[i] === pAequor.object._dna[i]) {
            identicalBases ++;
          };
        };
        //print the statement with % DNA in common
        console.log(`specimen ${this.object._specimenNum} and specimen ${pAequor.object._specimenNum} have ${((identicalBases/15) * 100).toFixed(2)}% DNA in common`)

      } else {
        console.error("Invalid pAequor object or missing dna property.");
      }
    },

    //posibility of survival
    willLikelySurvive() {
      let numberOf_C = 0;
      let numberof_G = 0;

      for (i = 0; i < this.object._dna.length; i++) {
        if (this.object._dna[i] === 'C') {
          numberOf_C++;
        } else if (this.object._dna[i] === 'G') {
          numberof_G++
        }
      }

      const percentageOf_C = ((numberOf_C / 15) * 100).toFixed(2);
      const percentageOf_G = ((numberof_G / 15) * 100).toFixed(2);

      if ( percentageOf_C >= 60 || percentageOf_G >= 60) {
        return true;
      } else return false;
    }
  };
};

//30 instances (This will generate 30 instances automatically)
const get30_ServivalInstances = () => {
  let servivalInstances_30 = [];
  let servingCount = 0;
  let notServivingCount = 0;

  while (servingCount < 30) {
    let array_15Bases = mockUpStrand();

    // Create a pAequorFactory object using the array
    let pAequorInstance = pAequorFactory(servingCount + 1, array_15Bases)

    //access to the willLikelySurvive method
    let checkArray = pAequorInstance.willLikelySurvive();

    if (checkArray === true) {
      servivalInstances_30.push(array_15Bases);
      servingCount++
    } else {
      notServivingCount++;
    }
  }
  console.log(`Total servival instances is ${servingCount} from amoung ${servingCount + notServivingCount} strands`)
  console.log(servivalInstances_30);
}


// ********Testing********* 
const testing1 = pAequorFactory(1, mockUpStrand());
const testing2 = pAequorFactory(2, mockUpStrand());

console.log(testing1.object._dna);
console.log(testing2.object._dna);
console.log();

testing1.compareDNA(testing2);
console.log();

console.log('Result is ' + testing1.willLikelySurvive());
console.log('Result is ' + testing2.willLikelySurvive());
console.log();
//Call the function to get 30 servival instances
get30_ServivalInstances();
