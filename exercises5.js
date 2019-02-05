//kata = "antonio"

function palindrome(kata){
    var result = ""
    for(var i = kata.length-1; i >=0; i--){
        result = result + kata[i];
    }
    if(kata===result){
      return true;
    } else{
      return false;
    }

}
console.log(palindrome("mister"));