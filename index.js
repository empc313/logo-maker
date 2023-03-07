const inquirer = require("inquirer");
const fs = require("fs");
const logoShape = require("./lib/shapes")

//a function to write an SVG
function writeToFile(fileName, data) {
  fs.writeFile(fileName);
}

const questions = [
  //Question for text on logo
  {
    type: "input",
    name: "Text",
    message: "Choose up to 3 characters for your logo.",
  },
  //Question for logo shape
  {
    type: "list",
    name: "Shape",
    message: "Choose a shape for your logo.",
    choices: ["triangle", "circle", "square"],
  },
  //Question for logo color
  {
    type: "input",
    name: "Color",
    message: "Choose a color for your logo.",
  },
];

function init() {
    inquirer.prompt(questions).then((data) => {
      const template = generateLogo(data);
      console.log("Generating Logo");
      fs.writeFileSync("SVG", template);
    });
  }

  // Function call to initialize app
  init();
