

var quicksort = function(arr){
  var result = [];
  if(arr.length === 2){
    result.push(Math.min.apply(null, arr));
    result.push(Math.max.apply(null, arr));
  } else if(arr.length === 1) {
    result.push(arr[0]);
  } else if(arr.length > 2){
    var pivotIndex = Math.floor(arr.length/2);
    var pivot = arr[pivotIndex];
    arr.splice(pivotIndex,1);
    var halfOfArr1 = [];
    var halfOfArr2 = [];

    for(var i = 0; i < arr.length; i++){
      if(arr[i] <= pivot){
        halfOfArr1.push(arr[i]);
      } else {
        halfOfArr2.push(arr[i]);
      }
    }
    result = quicksort(halfOfArr1).concat(pivot).concat(quicksort(halfOfArr2));
  }

  return result;
};