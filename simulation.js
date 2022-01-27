const yargs=require("yargs")
const fs=require("fs")
const text= require("./func.js")
const argv=yargs.argv
const command=argv._[0]
const title=argv._[1]
const date=argv._[2]
//console.log(command,title,date)
let details={
    Title:title,
    Date:date
}
const data=JSON.stringify(details)


if(command==="add")
{
        if(title && date){    
            text.addNote(data)
        }
        else{
            console.log("title or deadline missing")
        }
}
if(command==="view")
{
  console.log(text.loadNotest())
}