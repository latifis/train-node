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

// //append files
// fs.appendFile('./ckmobile/note.txt', 'A new message \r\n', (err, data) => {
//     if(err){
//         console.log(err)
//     }else {
//         console.log('A new message create')
//     }
// })

//create folder
// if(!fs.existsSync('newfolder')){
//     fs.mkdir('newfolder', (err, data) => {
//         if(err){
//             console.log(err)
//         }else {
//             console.log('A new folder create')
//         }
//     })
// }else{
//     console.log('The folder already exist')
// }

// //delete folder
// if(fs.existsSync('newfolder')){
//     fs.rmdir('newfolder', (err, data) => {
//         if(err){
//             console.log(err)
//         }else {
//             console.log('A new folder deleted')
//         }
//     })
// }else{
//     console.log('The folder already deleted')
// }

// //delete file
// if(fs.existsSync('./ckmobile/note.txt')){
//     fs.unlink('./ckmobile/note.txt', (err, data) => {
//         if(err){
//             console.log(err)
//         }else {
//             console.log('the file is deleted')
//         }
//     })
// }else{
//     console.log('The file already deleted')
// }

const readStream = fs.createReadStream('largetext.txt', {encoding: 'utf-8'});

const writeStream = fs.createWriteStream('writeStream.txt');

// readStream.on('data', chunk => {
//     console.log('##### new chunk #####\n');
//     console.log(chunk.toString())

//     writeStream.write('\n ##### chunk #####\n')
//     writeStream.write(chunk)
    
// })

//stream.pipe()
readStream.pipe(writeStream)
