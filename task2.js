const searchName = (key, batas, cb) => { // inisialisasi fungsi dengan parameter key, batas, dan cb
    const name = [
        "Abigail", "Alexandra", "Alison",
        "Amanda", "Angela", "Bella",
        "Carol", "Caroline", "Carolyn",
        "Deirdre", "Diana", "Elizabeth",
        "Ella", "Faith", "Olivia", "Penelope"
    ] // inisialisasi array name

    const pola = new RegExp(key, 'i') // menentukan pola dengan regular expression dimana nilai regex diisi dengan key dan parameter kedua 'i' yang berarti incasesensitive
    const cari = name.filter(data => { //inisialisasi cari yang akan memfilter array name dengan callback function berisi parameter data
        return pola.test(data) // mengembalikan nilai dengan method regex .test yang akan mengembalikan boolean dengan mencocokan niali dari pola dengan data(niali dari tiap array name)
    })
    const hasil = cari.filter((_item, index) => index < batas) // memfilter array dari variable cari, filter diisi degan dua parameter _item (menggunakan _ karenan parameter tidak digunakan) dan index yang akan mereturn index yang kurang dari batas
    cb(hasil) // memanggil callback function cb dengan parameter diisi hasil
}

const callback = (res) => { // inisialisasi fungsi callback dengan parameter res
    console.log(res) // mencetak nilai dari parameter res
}

searchName("an", 3, callback) // memanggil fungsi searchName
// output => [ 'Alexandra', 'Amanda', 'Angela' ]