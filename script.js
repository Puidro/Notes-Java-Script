const notes = [12, 8, 15, 10, 18, 5];
console.log("Nombre de notes :", notes.length);

let somme = 0;
for (const note of notes) {
  somme += note;
}
const moyenne = somme / notes.length;
console.log("Moyenne :", moyenne.toFixed(2));

function mention(moyenne) {
  if (moyenne >= 16) return "Très bien";
  if (moyenne >= 14) return "Bien";
  if (moyenne >= 10) return "Passable";
  return "Insuffisant";
}
console.log("Mention :", mention(moyenne));


const reussies = notes.filter(note => note >= 10);
console.log("Notes >= 10 :", reussies);

const etudiants = [
  { nom: "Amine", note: 12 },
  { nom: "Sara", note: 20 },
  { nom: "Youssef", note: 8 },
  { nom: "Lina", note: 15 },
  { nom: "Omar", note: 10 },
  { nom: "Nada", note: 18 }
];
etudiants.forEach(e => {
  console.log(`${e.nom} a obtenu ${e.note}/20`);
});

const major = etudiants.find(e => e.note === 20);
console.log("Premier étudiant avec 20 :", major);

const json = JSON.stringify(etudiants);
console.log("JSON :", json);

console.log(JSON.stringify(etudiants, null, 2));