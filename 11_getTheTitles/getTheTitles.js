const getTheTitles = function(array) {
    let books =[];
    array.forEach((item)=>{
        books.push(item.title)
    })
    return  books
};

// Do not edit below this line
module.exports = getTheTitles;
