import * as _ from "lodash";

const obj: any = {};

const employees = [
  { name: "Laveesh Gupta", age: 20 },
  { name: "Yash Jangid", age: 40 },
  { name: "Firoz Khan", age: 51 },
  { name: "Amrit Srivastava", age: 17 },
  { name: "Chandraprakash Sharma" }
];

_.isUndefined(employees);

const firstName = _.map(employees, emp => _.head(_.split(emp.name, " ", 2)));

const lastNameUpperCase = _.map(employees, function(emp) {
  return _.upperCase(_.last(_.split(emp.name, " ")));
});

const ageGroup = _.filter(employees, function(emp) {
  if (_.gt(emp.age, 41) && _.lt(emp.age, 60)) return emp;
});

const avgAge = _.mean(_.filter(_.map(employees, function(emp) {
        return emp.age;
    })
  )
);

const mostElder = _.maxBy(employees, "age");


const newEmployeeList: any = {};
newEmployeeList.young = _.pickBy(
  _.map(employees, function(emp) {
    if (_.gt(emp.age, 35)) return emp;
  })
);

newEmployeeList.old = _.toArray(
  _.filter(employees, function(emp) {
    if (_.gt(35, emp.age)) return emp;
  })
);

newEmployeeList.noage = _.pickBy(
  _.filter(employees, function(emp) {
    if (_.isUndefined(emp.age)) return emp;
  })
);

obj.emp = firstName;
obj.lastNameUpperCase = lastNameUpperCase;
obj.ageGroup = ageGroup;
obj.avgAge = avgAge;
obj.oldest = mostElder;
obj.newEmployeeList = newEmployeeList;

export default obj;
