function groupAnimals(animals) {
    var alfabet = "abcdefghijklmnopqrstuvwxyz";
    var result = [];
    var array1 = [];

    for(var i = 0; i <= alfabet.length; i++){
        array1 = [];
        for(j = 0; j < animals.length; j++){
            if(alfabet[i]===animals[j][0]){
                // array1 = [];
                array1.push(animals[j]);
            //   console.log(array1)  
            }
        }
        if(array1.length!==0){
            result.push(array1);
        }
    }
    return result;
}
// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]

        
        
            
        

  