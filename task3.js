const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    if(nilaiAwal < nilaiAkhir) {
        if(dataArray.length > 5) {
            const filterAwal = dataArray.filter(data => data >= nilaiAwal)
            const filterAkhir = filterAwal.filter(data => data <= nilaiAkhir)
            filterAkhir.sort((a, b) => a-b);
            console.log(filterAkhir)
        } else {
            console.log("Jumlah angka dalam dataArray harus lebih dari 5")
        }

    } else {
        console.log("Nilai akhir harus lebih besar dari nilai awal")
    }
}

seleksiNilai(5,20,[2,25,4,14,17,30,8])