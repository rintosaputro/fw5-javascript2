// forEach
// method forEach digunakan untuk melakukan perulangan dalam mengakses nilai pada suatu array
const numbers = [20, 30, 59] // inisialisasi array
const func = (number, index) => console.log(`Nilai ke ${index + 1} = ${number}`) // inisialisasi callback function dan mencetak perintah
numbers.forEach(func) //melakukan pemanggilan nilai array dengan forEach

// indexOf
// indexOf digunakan untuk mendapatkan nilai index dari elemen yang dicari dengan menghitung index dari kiri ke kanan
const buah = ['apel', 'pir'] // inisialisasi array
const indexPir = buah.indexOf('pir') //inisialisasi indexOf untuk mencari index dari 'pir'
console.log(indexPir) // 1

// lastIndexOf
// lastIndexOf digunakan untuk mendapatkan nilai index dari elemen yang dicari dengan menghitung index dari kanan ke kiri / kebalikan indexOf
const buah2 = ['apel', 'pir'] // inisialisasi array
const indexApel = buah2.lastIndexOf('apel') // inisialisasi lastIndexOf untuk mencari index 'apel' dengan menghitung dari belakang
console.log(indexApel) // 0

// find
// find digunakan untuk melakukan pencarian pada dengan mengembalikan nilai tunggal
const numbers2 = [1,2,3] // inisialisasi array
const cari = numbers2.find(data => data > 1) // inisialisasi callback function dan mengembalikan nilai data tunggal
console.log(cari) // 2

// findIndex
// findIndex digunakan untuk mencari nilai index berdasarkan suatu kondisi yang diinginkan
const users = ['rinto', 'john', 'dul'] // inisialisasi array users
const cariIndex = users.findIndex(value => value[0] === 'r') // inisialisasi findIndex dan mengemabalikan index yang huruf awal value 'r'
console.log(cariIndex) // 0

// includes
// includes digunakan untuk mencari element di array dengan mengembalikan boolean
const makanan = ['bakso', 'mie ayam', 'soto'] // inisialisasi array makanan
const adaSoto = makanan.includes('soto') // mencari apakah pada array makanan ada 'soto'
console.log(adaSoto) // true

// pop
// pop digunakan untuk menghapus element terakhir dari array
const arr = [1, 'halo', 'kucing'] // inisialisasi array arr
arr.pop() // menghapus nilai array terakhir dengan pop()
console.log(arr) // [1, 'halo']

// unshift
// unshift digunakan untuk menambah element array dan ditempatkan di awal array
const arrUnshift = [79, 4] // inisialisasi arrUnshift
arrUnshift.unshift(1) // menambahkan nilai 1 ke awal array arrUnshift
console.log(arrUnshift) // [1, 79, 4]

// shift
// shift digunakan untuk menghapus nilai terdepan dari array
const arrShift = [1, 79, 4] // inisialisasi array arrShift
arrShift.shift() // menghapus nilia terdepan dari arrShift yaitu 1
console.log(arrShift) // [79, 4]

// toUpperCase
// toUpperCase digunakan untuk mengubah string menjadi huruf besar semua
const namaSaya = 'rinto saputro' // inisialisasi namaSaya
const ubahBesar = namaSaya.toUpperCase() // mengubah nilai namaSaya hurufnya menjadi besar semua dengan toUpperCase()
console.log(ubahBesar) // RINTO SAPUTRO
