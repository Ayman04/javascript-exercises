const convertToCelsius = function(temp) {
  let conversion = (temp - 32) / 1.8;
  let solution = (Math.round(conversion * 10) / 10);
  return solution


};

const convertToFahrenheit = function(temp) {
  let conversion = temp * 1.8 + 32;
  let solution = (Math.round(conversion * 10) / 10)
  return solution
};


console.log(convertToCelsius(68), convertToFahrenheit(20));
// Do not edit below this line
// module.exports = {
//   convertToCelsius,
//   convertToFahrenheit
// };
