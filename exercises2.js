
function balikString(kata){
    var result='';
    for(var i = kata.length-1; i >=0;i--){
        result = result + kata[i];
    }
    return result;
}
console.log(balikString('hello world!'))