/*Diberikan sebuah function hitungJumlahKata(kalimat) yang menerima parameter sebuah string
yang merupakan sebuah kalimat. Function akan mengembalikan jumlah kata dari kalimat tersebut.
Contoh, "I have a dream" akan menghasilkan nilai 4 karena memiliki 4 kata.
*/

function hitungJumlahKata(kalimat){
    var counter = 0;
    for(var i=0;i<kalimat.length-1;i++){
        if(kalimat[i]===" "){
            counter++
        } else{

        }
    } 
    counter = counter + 1;
    return counter;
}
// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5
