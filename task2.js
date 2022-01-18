const name = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"
]

const searchName = (key, batas, cb) => {
    const pola = new RegExp(key)
    let hasil = []
    const arr = name.map((data) => {
        if(pola.test(data.toLowerCase())) {
            hasil.push(data)
        }
    })
    cb(hasil, batas)
}

const callback = (arr, batas) => {
    const filt = arr.filter((_item, index) => index < batas) 
    console.log(filt)
}

searchName("an", 3, callback)
