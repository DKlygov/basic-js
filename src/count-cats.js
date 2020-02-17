module.exports = function countCats(backyard) {
  // remove line with error and write your code here
  var cats = 0;
  var cat = '^^';
  for (var i = 0; i < backyard.length; i++){
    for (var k = 0; k < backyard[i].length; k++){
      if (backyard[i][k] == cat){
        cats++;
      }
    }
  }
  return(cats);
};
