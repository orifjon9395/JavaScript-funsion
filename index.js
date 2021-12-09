// let arr = [11,2,31,4,53,6,72,8,9,20,10,47];
// let obj = [
//     {name: "bekzod", age: 22, from: "toshkent"},
//     {name: "farxod", age: 32, from: "jizzax"},
//     {name: "ozodbek", age: 45, from: "smarkand"},
//     {name: "sardor", age: 17, from: "buhoro"},
//     {name: "abdulloh", age: 14, from: "namangan"}
// ];
////////////////////////forEach()/////////////////////////////////////////////
// obj.forEach(function (odamlar, index, array){
//     console.log(odamlar);
//     console.log(index);
//     console.log(array);
// })

// obj.forEach(function (odamlar){
//     console.log(odamlar);
// })
// obj.forEach(odamlar => console.log(odamlar))

// arr.forEach(i  => console.log(i))


////////////////////////MAP()/////////////////////////////////////////////
// let newobj = obj.map(odamlar => {
//     // return odamlar
//     // return odamlar.name
//     return `${odamlar.name} (${odamlar.age})`
// })
// console.log(newobj);

// let newobj = obj.map(odamlar => `${odamlar.name} (${odamlar.age})`)
// console.log(newobj);

// let newobj = obj.map(odamlar => odamlar.age * 2)
// console.log(newobj);

// let newArr = arr.map(key => key *2)
// console.log(newArr);


////////////////////////FILTER()/////////////////////////////////////////////
// let kattaObjArr = obj.filter(odamlar => {
//     if(odamlar.age >= 18){
//         return true
//     }
// })
// console.log(kattaObjArr);

// let kattaObjArr = obj.filter(odamlar => odamlar.age >= 18)
// console.log(kattaObjArr);

// let kattaArr = arr.filter(key => key >= 18)
// console.log(kattaArr);

// let kattaArr = arr.filter(key => key <= 18)
// console.log(kattaArr);


////////////////////////REDUCE()/////////////////////////////////////////////
// let kattaObjArr = obj.reduce((total, odamlar) => total + odamlar.age, 0)
// console.log(kattaObjArr);

// let kattaArr = arr.reduce((total, key) => total + key, 0)
// console.log(kattaArr);


// ////////////////////////FIND()/////////////////////////////////////////////
// let bekzod = obj.find(key => key.name === "bekzod")
// console.log(bekzod);


// ////////////////////////FINDINDEX()/////////////////////////////////////////////
// let bekzodIndex = obj.findIndex(key => key.name === "bekzod")
// console.log(bekzodIndex);