const name = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"
] // inisialisasi array name

const searchName = (key, batas, cb) => { // inisialisasi fungsi dengan parameter key, batas, dan cb
    const pola = new RegExp(key) // menentukan pola dengan regular expression dimana nilai regex diisi dengan parameter key
    const cari = name.filter(data => { //inisialisasi cari yang akan memfilter array name dengan callback function berisi parameter data
        return pola.test(data.toLowerCase()) // mengembalikan nilai dengan method regex .test yang akan mengembalikan boolean dengan mencocokan niali dari pola dengan data(niali dari tiap array name) yang diubah menjadi huruf kecil semua
    })
    cb(cari, batas) // memanggil callback function cb dengan parameter diisi cari dan batas
}

const callback = (arr, batas) => { // inisialisasi fungsi callback dengan parameter arr dan batas
    const filt = arr.filter((_item, index) => index < batas) // memfilter array dari parameter arr 
    // filter diisi degan dua parameter _item (menggunakan _ karenan parameter tidak digunakan) dan index yang akan mereturn index yang kurang dari batas
    console.log(filt) // mencetak hasil filter
}

searchName("an", 3, callback) // memanggil fungsi searchName
// output => [ 'Alexandra', 'Amanda', 'Angela' ]