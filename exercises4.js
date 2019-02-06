function dataHandling2(input){
    input.splice(1,2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung")
    input.splice(4,1, "Pria", "SMA Internasional Metro")
    console.log(input)
    var nama = input[1];
    var ttl = input[3]
    var ttl2 = ttl.split("/")
    var ttl3 = input[3].split("/");
    //bikin bulan
    bulan = ttl2[1]
    switch(bulan){
        case '01': console.log('Januari');
        break;
        case '02': console.log('Februari');
        break;
        case '03': console.log('Maret');
        break;
        case '04': console.log('April');
        break;
        case '05':console.log('Mei');
        break;
        case '06': console.log('Juni');
        break;
        case '07': console.log('Juli');
        break;
        case '08': console.log('Agustus');
        break;
        case '09': console.log('September');
        break;
        case '10':console.log('Oktober');
        break;
        case '11': console.log('November');
        break;
        case '12': console.log('Desember');
        break;
    }
    //bikin tanggal
    var tanggal = ttl2.sort(function(index1,index2){
        return index2-index1
    });
    console.log(tanggal);
    //bikin tanggal 2
    var tanggal2 = ttl3.join("-");
    console.log(tanggal2);
    //bikin nama
    var nama2 = nama.slice(0,15);
    console.log(nama2);
    
    
    
    
}
dataHandling2(["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"])

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */

