const fs = require('fs');

const maleNamesList = ['Jan', 'Adam', 'Piotr', 'Maciej', 'Mariusz', 'Wojtek', 'Olaf', 'Wiktor', 'Andrzej', 'Tomek'];
const femaleNamesList = ['Anna', 'Beata', 'Celina', 'Dorota', 'Ela', 'Fiona', 'Gabriella', 'Monika', 'Katarzyna', 'Wiktoria'];
const lastNameList = ['Adamczyk', 'Borowczyk', 'Tokczyk', 'Lewczyk', 'Kot', 'Mucha', 'Nowak', 'Tokarczuk', 'Polak', 'Norek', 'Rudzik', 'Nowik', 'Gróra', 'Rosa'];

const randomGender = () => (Math.floor(Math.random() * 2) === 0 ? 'M' : 'F');
const randomAge = () => Math.floor(Math.random() * 61 + 18);
const randomName = gender => {
  if (gender === 'M') {
    return maleNamesList[Math.floor(Math.random() * maleNamesList.length)];
  } else {
    return femaleNamesList[Math.floor(Math.random() * femaleNamesList.length)];
  }
};
const randomLastName = () => lastNameList[Math.floor(Math.random() * lastNameList.length)];

const people = [];
for (i = 0; i < 20; i++) {
  let gender = randomGender();
  let name = randomName(gender);
  let lastName = randomLastName();
  let randomPerson = {
    gender,
    age: randomAge(),
    name,
    lastName,
    email: `${name.toLocaleLowerCase()}.${lastName.toLocaleLowerCase()}@gmail.com`,
  };
  people.push(randomPerson);
}

fs.writeFile('people.json', JSON.stringify(people), err => {
  if (err) throw err;
  console.log('The file has been saved!');
});
