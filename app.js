//const os = require('os');
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const t = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};
const b = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
}
const argv = yargs
  .command('add', 'add a new note', {
    title: t,
    body: b
  })
  .command('list', 'list all notes')
  .command('read', 'read a note', {
    title: t
  })
  .command('remove','remove a note', {
    title: t
  })
  .help()
  .argv;
var command = argv._[0];

if (command === 'add') {
  var note = notes.addnote(argv.title, argv.body);
  if (note) {
    console.log('note is saved');
    notes.logNote(note);
  } else {
    console.log('process ',process.argv);
    console.log('yargs ', yargs.argv);
    console.log('note with this title already exist');
  }
} else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`listing ${allNotes.length} notes`);
  _.forEach(allNotes, (note) => notes.logNote(note))
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if (note) {
    notes.logNote(note);
  } else {
    console.log('note wasnt found');
  }
} else if (command === 'remove') {
  var removed = notes.removeNote(argv.title);
  if (removed) {
    console.log('note was removed');
  } else {
    console.log('note wasnt found');
  }
} else {
  console.log('command not recognised');
}




// var res = notes.addNum(2,3);
// console.log(res);

// var user = os.userInfo();
// // console.log(user);
// fs.appendFile('greetings.txt',`hello, ${user.username}! your age is ${notes.age}. `, function(err) {
//   if (err) {
//     console.log('unable to write file');
//   }
// });
