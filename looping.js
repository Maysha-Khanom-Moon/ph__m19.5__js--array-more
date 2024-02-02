/**
 * LOOPING Technique
 * 1. for loop
 * 2. while loop
 * 3. do while 
 * 4. for of --> array loop korar jonno
 * 5. for in --> object loop korar jonno
 * 
 */

const friends = ['Elon', 'Bill', 'Mark', 'Waren']

for (const friend of friends) {
    console.log(friend);
}
console.log('\n');


// for loop
for (let i = 0; i < friends.length; i++) {
    console.log(`index: ${i}: ${friends[i]}`);    
}