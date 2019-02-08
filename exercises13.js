function targetTerdekat(arr) {
    var counter = 0;
    for(var i = 0; i < arr.length; i++){
        counter = counter + 1;
        if(arr[i]==='o'){
            counter = 0;
        } 
        if(counter > 0 && arr[i]==='x'){
            return counter;
        } else if(i===arr.length-1){
            return counter = 0;
        }    
    }
    // return counter;
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2