const fs=require("fs")
const addNote = (newNote)=>{
    notes = loadNotes()
    const duplicateNote = notes.find((note)=>{
        return note.title==newNote.title
    })
    if(!duplicateNote){
        notes.push(newNote)
        saveNotes(notes)
        console.log("Note added successfully")
    }
    else{
        console.log("Cannot save duplicate note title")
    }
}
const saveNotes = (notes)=>{
    fs.writeFileSync("notes.json",JSON.stringify(notes))
}

const loadNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    }
    catch(e){
        return []
    }   
}

module.exports={addNote,loadNotes,saveNotes}