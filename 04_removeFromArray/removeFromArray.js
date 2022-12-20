const removeFromArray = function(array, item) {
    array = array.filter((value)=>{
        return value !== item
    });
    return array
};
removeFromArray([1,2,3,4,5],3)
// Do not edit below this line
module.exports = removeFromArray;
