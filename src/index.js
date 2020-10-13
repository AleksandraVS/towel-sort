
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  let flag =  true;
  if (arguments.length === 0)
  return arr;

  for(let i = 0; i < matrix.length; i++){
    if (flag) 
    {
    for(let j = 0; j < matrix[i].length; j++){
        arr.push(matrix[i][j]);
    }
    flag = false;
  } 
  else
  {
    for(let j = matrix[i].length - 1; j >= 0; j--){
        arr.push(matrix[i][j]);
    }
    flag = true;
  }
}
return arr;
}

