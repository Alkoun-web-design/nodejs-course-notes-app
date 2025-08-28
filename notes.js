const fs = require('fs')

const removeNote = (title) => {
    const notes = loadNotes()
    const leftNotes = notes.filter((note) => note.title !== title)
    saveNotes(leftNotes)
    leftNotes.length < notes ? console.log(`removed note with title: ${title}`) : console.log('No mathcing title found')
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New Note Added')
    } else {
        console.log('Note Title taken')
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('./notes.json', dataJSON)
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(notes)
}

const loadNotes = () => {
    try {
        const bufferData = fs.readFileSync('./notes.json');
        const jsonData = bufferData.toString();
        return JSON.parse(jsonData);
    } catch (e) {
        return []
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    const noteFound = notes.filter((note) => note.title === title)
    !noteFound ? console.log('Note not found') : console.log(noteFound)
}

module.exports = {
    readNote: readNote,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
};