const fetch = require("node-fetch");
const {URL, URL2, URL3} = require('./API')

// fetch(URL3)
// .then(function(res) {
//     return res.json()
// })
// .then(data => console.log(data.users))
// .catch(err => console.log(err))

// const fetchUserData = async() => {
//     try {
//         const response = await fetch(URL2)
//         const data = await response.json()
//         const array = await data.map(names)
//         // console.log(array);
//         // console.log(data[0].name);
        
//     } catch (error) {
//         console.error(error)
//     }
//     function names(item) {
//         console.log(item.name);
//         return item.name
//     }

// }
// fetchUserData()

const fetchUserData = async() => {
    try {
        const response = await fetch(URL3)
        const data = await response.json()
        const gender = data.users.filter(user => user.gender === 'male')
        console.log('Male Users:', gender.length);
        const array = gender.map(user => `Name: ${user.firstName} ${user.lastName}, Age: ${user.age}`)
        // console.log(array.length);
        // console.log(data.users);
        const sumAge = await gender.reduce((accumulation, user) => accumulation + user.age, 0)
        console.log(`Total Age of Active`, sumAge);
        
    } catch (error) {
        console.error(error)
    }
}
fetchUserData()
// const array = [1,2,3,4,5,,6]

const summarizeAge = async() => {
    const response = await fetch(URL3)
        const data = await response.json()
        // const sumAge = await data.users.reduce((accumulation, user) => accumulation + user.age, 0)
        // console.log(`Total Age of Active`, sumAge);
        
}
// summarizeAge()
