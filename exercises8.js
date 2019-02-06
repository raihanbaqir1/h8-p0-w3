function pasanganTerbesar(num) {
    var numString = num.toString();
    var terbesar = 0;
    for(var i = 0; i < numString.length; i++){
        var tampung = numString.substr(i,2);
        if(tampung > terbesar){
            terbesar = tampung;
        }
    }
    terbesar = Number(terbesar);
    return terbesar;
}
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99