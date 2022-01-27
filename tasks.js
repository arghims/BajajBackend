// 1. write the os specs to a file using sync
const fs=require("fs")
const os=require("os")
const path = require('path');
const d1=os.uptime()
// console.log(d1)
// console.log(d1.toString())
const d2=os.type()
const d3=os.release()
const d4=os.totalmem()
const d5=os.freemem()
// fs.writeFileSync("./data/sample2.txt",d1.toString())
// fs.appendFileSync("./data/sample2.txt",d2)
// fs.appendFileSync("./data/sample2.txt",d3)
// fs.appendFileSync("./data/sample2.txt",d4.toString())
// fs.appendFileSync("./data/sample2.txt",d5.toString())

let specs = { 
    Uptime:d1.toString(),
    Type: d2,
    release: d3, 
    TotalMemory:d4.toString(),
    FreeMemory:d5.toString()
};
 
fs.writeFileSync(path.resolve(__dirname, 'osspecs.json'), JSON.stringify(specs));






