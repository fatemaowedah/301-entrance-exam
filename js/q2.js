'use strict'
function print(){
    for(var i = 0; i < 6; i++ ){
        var txt = "";
        for(var j=0; j < i ; j++){
            txt = txt + "*";
        }
    console.log(txt);
    }
}
print();