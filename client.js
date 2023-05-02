// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// - Those who have a rating of a 2 or below should not receive a bonus.
// - Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
// - Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
// - Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.
// - If their employee number is 4 digits long, this means they have been with the company for longer than 15 years,
// and should receive an additional 5%.
// - However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.
// - No bonus can be above 13% or below 0% total.







  





//This loops over the employee array and console logs the information. 

function calculateIndividualEmployeeBonus (employee) {
  let name = employee.name
  console.log(name)
  let bonusPercentage = 0;
  
    if (employee.reviewRating <= 2) {
    bonusPercentage = 0;
  }
    if (employee.reviewRating === 3) {
    bonusPercentage = (employee.annualSalary * 4)/100;
    
  }
   if (employee.reviewRating === 4) {
    bonusPercentage = (employee.annualSalary * 6)/100;
    
  }
   if (employee.reviewRating === 5) {
    bonusPercentage = (employee.annualSalary * 10)/100;
    
  }
   if (employee.employeeNumber.length === 4) {
    bonusPercentage = (bonusPercentage *5)/100;
  }
   if (employee.annualSalary > 65000) {
    bonusPercentage = (bonusPercentage - 1)/100
  }
  
  return {name: employee.name,
    bonusPercentage: 117,
    totalCompensation: 70000,
    totalBonus: 1
}
}
  
   
   
for (let employee of employees) {
  console.log("This is the info loop:", employee); 
 console.log(calculateIndividualEmployeeBonus(employee));

}



 



// Write a declared function that takes in one **Employee** object (as an argument to the function), and `return` a new **object** with the following properties. _Note these properties are different than the ones you start with!_

// * The `name` property should contain the employee's name.
// * The `bonusPercentage` property should contain the bonus percentage the employee is to receive. See section below for calculation instructions.
// * The `totalCompensation` property should be the adjusted annual compensation (base annual + bonus)
// * The `totalBonus` should be the employee's total bonus rounded to the nearest dollar.

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
//

  // your logic here
  
  
  // return new object with bonus results

