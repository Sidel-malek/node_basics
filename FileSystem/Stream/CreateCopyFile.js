const fs = require('fs');
const { Readable } = require('stream');

// Créer un fichier date.txt
fs.writeFileSync('date.txt', '');

// Créer un stream de lecture depuis process.stdin
const inputStream = new Readable({
  read(size) {
    // Ne rien faire ici, on va gérer l'écriture à la volée
  }
});

// Rediriger les saisies de l'utilisateur vers le stream de lecture
process.stdin.on('data', (chunk) => {
  inputStream.push(chunk);
});

// Créer un stream d'écriture vers le fichier date.txt
const outputStream = fs.createWriteStream('date.txt', { flags: 'a' });

// Écrire la date système dans le fichier
outputStream.write('Date système : ' + new Date().toString() + '\n');

// Rediriger les données lues depuis process.stdin vers le fichier
inputStream.pipe(outputStream);

console.log('Saisissez du texte pour copier dans le fichier date.txt (Ctrl+C pour arrêter) :');
