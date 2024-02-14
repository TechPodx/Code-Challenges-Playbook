// Initial State
const initialWagonState = {
  supplies: 100,
  distance: 0,
  days: 0,
};

// Reducer function
const gameReducer = (state = initialWagonState, action) => {
  switch (action.type) {
    case "gather": {
      return {
        ...state,
        supplies: state.supplies + 15,
        distance: state.distance,
        days: state.days + 1,
      };
    }
    case "travel": {
      const numDays = action.payload;
      const numSupply = state.supplies - numDays * 20;
      if (numSupply < 0) {
        return state;
      }
      return {
        ...state,
        supplies: numSupply,
        distance: state.distance + numDays * 10,
        days: state.days + numDays,
      };
    }
    case "tippedWagon": {
      return {
        ...state,
        supplies: state.supplies - 30,
        days: state.days + 1,
      };
    }
    default: {
      return state;
    }
  }
};

console.log("👇🏽**Let's Play**👇🏽");
console.log("");

// Start gaming by calling with an undefined state and empty action object
let wagon = gameReducer(undefined, {});
//  Calling wagon
console.log(wagon);

// first day
wagon = gameReducer(wagon, { type: "travel", payload: 1 });
//  Calling wagon
console.log(wagon);

wagon = gameReducer(wagon, { type: "gather" });
//  Calling wagon
console.log(wagon);

wagon = gameReducer(wagon, { type: "tippedWagon" });
//  Calling wagon
console.log(wagon);

wagon = gameReducer(wagon, { type: "travel", payload: 3 });
//  Calling wagon
console.log(wagon);

wagon = gameReducer(wagon, { type: "travel", payload: 3 });
//  Calling wagon
console.log(wagon);
