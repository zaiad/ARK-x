// const event = new Promise((resolve, reject) => {
//     var name = 'yaya'
//     if (name == 'yayay') {
//         resolve(name)   
//     }else {
//         reject('his name isn\'t pepo but is ' + name)
//     }
// })

// event.then((name) => {
//     console.log(name )
// }) .catch(err => 
//     console.log(err)
// ) 

const axios = require("axios")

const data = axios.get("https://cat-fact.herokuapp.com/facts")
data.then(res => {
    console.log(res.data)
}) .catch(err => {
    console.log(err);
})
