//const profileDataArgs = process.argv.slice(2, process.argv.length);
// const name = profileDataArgs[0];
// const github = profileDataArgs[1];
// const [name, github] = profileDataArgs;
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');
// console.log(profileDataArgs);
// const printProfileData = profileDataArr => {
//     // This...
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//       console.log(profileDataArr[i]);
//     }
  
//     console.log('================');
//     // Is the same as this...
//   profileDataArr.forEach((profileItem) => {
//     console.log(profileItem)
//   });
// };
//const generatePage = () => 'Name: Jane, Github: janehub';
//const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;

// console.log(name, github);
// console.log(generatePage(name, github));
// fs.writeFile('index.html', generatePage(name, github), err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });
const inquirer = require('inquirer');
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));

// const fs = require('fs');
// const generatePage = require('./src/page-template');
//console.log(inquirer);
// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });