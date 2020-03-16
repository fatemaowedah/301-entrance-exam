'use strict';
function greaterThan(array1 , no){
    var count = 0;
    for(var i = 0 ; i < array1.length; i++){
        if(array1[i]>no){
            count = count +1 ;

        }
    }return count ;
}
console.log(greaterThan([4,2,3,1],3));
console.log(greaterThan([2,8,-1],8));