//import { retry } from "./C:/Users/szkolenie/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/async";

//console.log('Hello');
function arrayMultiplier(arr, n) {
    var result = [];
    for(var i =0; i <arr.length; i++)
    {
        result.push(arr[i] * n );
    }  
return result;
}

function arrayMultiplier(arr, n) {
   return arr.map(function (item){
       return item * n;
   });
}

function validateCode(code){
    return code.split('').reduce(function(total, char) {
        //for(var i = 0; i < total.length; i++){
            if(total < 0){
                return total;
            }
            if (char =='(') {
                return total + 1;
            }
            else if (char ==')') {
                return total - 1;
            }
            return total;
        //}

    }, 0 ) == 0 
}