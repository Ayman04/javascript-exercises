const add = function(a,b) {
	return a + b
};

const subtract = function(a,b) {
  return a - b
};

const sum = function(nums) {
	let sum = 0
  for(let num of nums){
    sum += num
  }
  return sum
};

const multiply = function(nums) {
  let sum = 1;
  for(let num of nums){
    sum = sum * num
  }
  return sum
};

const power = function(num,power) {
	let sum = num;
  for(let i = 1; i < power; i++){
    sum = sum * num
  }
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
