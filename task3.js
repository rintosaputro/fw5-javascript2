const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => { // inisialisasi fungsi seleksiNilai dengan parameter nilaiAwal (number), nilaiAkhir(number), dataArray(array)
    if(nilaiAwal < nilaiAkhir) { // validasi apakah nialaiAwal kurang dari nilaiAkhir
        if(dataArray.length > 5) { // validasi apakah panjang dari dataArray lebih dari 5
            const filterAwal = dataArray.filter(data => data >= nilaiAwal) // memfilter dataArray yang mengembalikan nilainya lebih dari sama dengan nilaiAwal
            const filterAkhir = filterAwal.filter(data => data <= nilaiAkhir) // memfilter filterAwal yang mengembalikan nilainya kurang dari sama dengan nilaiAkhir
            filterAkhir.sort((a, b) => a-b); // mengurutkan nilai filterAkhir dengan sort dengan callback function parameter a dan b di mana jika a -b < 0 maka urutan a b atau jika a-b >0 maka b a atau jika a-b == 0 maka urutan tetap
            console.log(filterAkhir) // mencetak filterAkhir yang sudah diurutkan nilainya tadi
        } else { // inisialisasi pengkondisian false dataArray>5
            console.log("Jumlah angka dalam dataArray harus lebih dari 5") // mencetak pesan yang false
        }

    } else { // inisialisasi pengkondisian false nilaiAwal<nilaiAkhir
        console.log("Nilai akhir harus lebih besar dari nilai awal") // mencetak pesan untuk pengkondisian false
    }
}

seleksiNilai(5,20,[2,25,4,14,17,30,8]) // memanggil fungsi seleksiNilai dengan parameter pertama dan kedua adalah number dan parameter ketiga array
// Output => [ 8, 14, 17 ]