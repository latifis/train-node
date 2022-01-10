// console.log('ckmobel')

// const message = (name) =>{
//     console.log(`${name} is good`)
// }

// message('me or')

// const{users, nums} = require('./users');
// console.log(nums);

const fs = require('fs')
//read file
// fs.readFile('./ckmobile/note.txt',(err, data) => {
//     if(err){
//         console.log(err)
//     }else {
//         console.log(data.toString())
//     }
// })

//write files
// fs.writeFile('./ckmobile/note.txt', 'A new message', (err, data) => {
//     if(err){
//         console.log(err)
//     }else {
//         console.log('A new message create')
//     }
// })

//append files
fs.appendFile('./ckmobile/note.txt', 'A new message \r\n', (err, data) => {
    if(err){
        console.log(err)
    }else {
        console.log('A new message create')
    }
})