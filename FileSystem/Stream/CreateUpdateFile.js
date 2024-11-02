const fs = require('fs');
const { Readable } = require('stream');


fs.writeFile('date.txt', '', (err) => {
    if (err) throw err;
    console.log('Le fichier date.txt a été créé');
  });

const inputStream = new Readable({
  read(size) {}
});

process.stdin.on('data', (chunk) => {
  inputStream.push(chunk);
});

const outputStream = fs.createWriteStream('date.txt', { flags: 'a' });

outputStream.write('Date système : ' + new Date().toString() + '\n');

inputStream.pipe(outputStream);

console.log('Saisissez du texte pour copier dans le fichier date.txt (Ctrl+C pour arrêter) :');
