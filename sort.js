const persons = ['rakib','nokib', 'sakib', 'akib', 'Dakib']

/**
 * ----- sort followed ascii code -----
 * 
 * 1. numaric
 * 2. capital letter
 * 3. small letter
 * .
 * .
 * . 
 * at last empty items
 */
const sorted = persons.sort();
console.log(sorted);



const nums = [1, 2, , 4, 1, 2, 0];
nums.sort();
console.log(nums);