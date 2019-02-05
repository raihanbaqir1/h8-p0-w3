//kata = "antonio"

function balikKata(kata){
    var result = ''
    for(var i = kata.length-1; i >=0; i--){
        result = result + kata[i];
    }
    if(kata===result){
      return true;
    } else{
      return false;
    }

}
console.log(balikKata('mister'));