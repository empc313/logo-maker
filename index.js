const inquirer = require("inquirer");
const fs = require("fs");
const svg = require("./lib/svg");
const shape = require('./lib/shapes');

//Questions for user data
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
        choices: ["Triangle", "Circle", "Square"],
    },
    //Question for logo color
    {
        type: "input",
        name: "Color",
        message: "Choose a color for your logo.",
    },
])

// fs.writeFile(svgLogo, renderSVG(generateLogo))
// })
// const logoSvg = './lib/logo.svg';
// function writeToFile(fileName, data) {
//   fs.writeFile(logoSvg, Shape(data));
// }

//a function to write an SVG
//  .then((data) => {
// const svgLogo = './lib/logo.svg';
// const generateLogo = Shape(data);

//generate SVG file pulling from user data
.then((data) => {
 const template = generateSVG(data);
 console.log("Generating Logo");
 fs.writeFileSync("SVG", template);
    });


