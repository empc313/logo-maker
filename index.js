const inquirer = require("inquirer");
const fs = require("fs");
const svg = require("./lib/svg");
const shape = require('./lib/shapes');


inquirer
.prompt([
 //Question for text on logo
    {
        type: "input",
        name: "text",
        message: "Choose up to 3 characters for your logo.",
    },
    //Question for text color
    {
        type: "input",
        name:"text-color",
        message: "Enter text color"
    },
    //Question for logo shape
    {
        type: "list",
        name: "shape",
        message: "Choose a shape for your logo.",
        choices: ["triangle", "circle", "square"],
    },
    //Question for logo color
    {
        type: "input",
        name: "Color",
        message: "Choose a color for your logo.",
    },
]);

// function init() {
//     inquirer.prompt(questions).then((data) => {
//         const template = generateLogo(data);
//         console.log("Generating Logo");
//         fs.writeFileSync("SVG", template);
//     });
// }

// // Function call to initialize app
// init();

// //a function to write an SVG
// const logoSvg = './lib/logo.svg';
// function writeToFile(fileName, data) {
//   fs.writeFile(logoSvg, Shape(data));
// }