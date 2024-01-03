const salaryData = [
  { role: 'CTO', company: 'Big Data Inc.', salary: 290000},
  { role: 'Technical Lead', company: 'Big Data Inc.', salary: 210000},
  { role: 'Software Engineer II', company: 'Big Data Inc.', salary: 120000},
  { role: 'Software Engineer I', company: 'Big Data Inc.', salary: 115000},
  { role: 'CTO', company: 'Medium Data Inc.', salary: 260000},
  { role: 'Technical Lead', company: 'Medium Data Inc.', salary: 155000},
  { role: 'Software Engineer II', company: 'Medium Data Inc.', salary: 105000},
  { role: 'Software Engineer I', company: 'Medium Data Inc.', salary: 100000},
  { role: 'CTO', company: 'Small Data Inc.', salary: 160000},
  { role: 'Technical Lead', company: 'Small Data Inc.', salary: 110000},
  { role: 'Software Engineer II', company: 'Small Data Inc.', salary: 90000},
  { role: 'Software Engineer I', company: 'Small Data Inc.', salary: 70000},
];

const getRoles = () => {
  return ['CTO', 'Technical Lead', 'Software Engineer II', 'Software Engineer I'];
}

const getCompanies = () => {
  return ['Big Data Inc.', 'Medium Data Inc.', 'Small Data Inc.'];
}

const getDataByRole = role => {
  return salaryData.filter(obj => obj.role === role);
}

const getDataByCompany = company => {
  return salaryData.filter(obj => obj.company === company);
}

// Exporting above four functions
export {getRoles, getCompanies, getDataByRole, getDataByCompany};

// Exporting array as default export
const array = {
  salaryData
}
export default array;

