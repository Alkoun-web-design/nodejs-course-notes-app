
const yargs = require('yargs')
const notes = require('./notes.js')
const cmd = process.argv[2]


yargs.command({
    'command': 'add',
    'description': 'adds a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    'command': 'remove',
    'description': 'removes note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    'command': 'list',
    'description': 'lists notes',
    handler() {
        notes.listNotes()
    }
})

yargs.command({
    'command': 'read',
    'description': 'read notes',
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()