// input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]
// ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
function dataHandling2(input){
    input.splice(1,2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung")
    input.splice(4,1, "Pria", "SMA Internasional Metro")
    console.log(input)
    input.split()
     
}
dataHandling2(["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"])
