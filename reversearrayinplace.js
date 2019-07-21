function reverseArr (arr){
  
  for(var i=0;i<arr.length/2;i++){
    var originalval = arr[i];
    arr[i] = arr[arr.length-1-i];
    arr[arr.length-1-i] = originalval;
  }
  console.log(arr);
}

reverseArr ([1,2,3,4,5]);