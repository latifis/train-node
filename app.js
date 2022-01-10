// console.log('ckmobel')

// const message = (name) =>{
//     console.log(`${name} is good`)
// }

// message('me or')

// const{users, nums} = require('./users');
// console.log(nums);

const fs = require('fs')
//read file
fs.readFile('./note.txt',(err, data) => {
    if(err){
        console.log(err)
    }else {
        console.log(data.toString())
    }
})
//write