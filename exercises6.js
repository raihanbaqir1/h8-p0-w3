function angkaPalindrome(num) {
    
    while(num !== stringNumAngka){
        num++
        var numString = num.toString();
    var stringNum = ""
    for(var i = numString.length-1; i >=0; i--){
        stringNum = stringNum + numString[i];
    }
    var stringNumAngka = Number(stringNum);
    
    if(stringNumAngka == num){
    } 
    } 
    return num;
}
       
       
    
//   angkaPalindrome(117);
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001