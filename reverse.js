const nums = [1, 2, 3, 4, 5, 6]
console.log(nums);

// in-built function
nums.reverse();
console.log(nums);

nums.reverse();
console.log(nums,'\n');

// -------- menually --------
// unshift
let rev = [];
for (const num of nums) {
    rev.unshift(num);
}

console.log(rev);


// reverse indexing
rev = []
for(let i = nums.length - 1; i >= 0; i--) {
    rev.push(nums[i]);
}
console.log(rev);