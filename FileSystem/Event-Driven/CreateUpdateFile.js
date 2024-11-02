const fs = require('fs');
const readline = require('readline');


fs.writeFile('date.txt', '', (err) => {
  if (err) throw err;
  console.log('terminé!!');
});


function appendDateToFile() {
  const currentDate = new Date().toString();
  const stream = fs.createWriteStream('date.txt', { flags: 'a' }); 
  stream.write(currentDate + '\n');
  console.log('Date ajoutée au fichier');
  stream.end();
}


appendDateToFile();


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Entrez du texte :');

rl.on('line', (input) => {
  fs.appendFile('date.txt', input + '\n', (err) => {
    if (err) throw err;
    console.log('bien ajouter');
  });
});

rl.on('close', () => {
  console.log('Fin de la saisie.');
});