// function tentukanDeretAritmatika(arr) {
//     var selisih = arr[1] - arr[0];
//     for(i = 0; i < arr.length; i++){
//         if(arr[i+1] - arr[i] === selisih){
//             return true;
//         } else{
//             return false;
//         }
//     }

// }
function tentukanDeretAritmatika(arr) {
    var substraction = 0;
    var substract = [];
    for(var i = arr.length - 1; i >= 0; i--){
       if(arr[i]<=substraction){
           substraction = substraction - arr[i];
       } else{
           substraction = arr[i] - substraction;
       }
       substract.push(substraction);
       substraction = arr[i];
    }
    if(substract[1]===substract[2]){
        return true;
    } else{
        return false;
    }
}
// Ini caranya aga rumit, tapi overall ok kok :)

// Aku malah ambil index 1 dan index 0 sebagai selisih

// Aku looping, jika index i+1 - index i tidak sama dengan selisih, false

// Mungkin bisa dicoba :D
// // TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
   
    
  