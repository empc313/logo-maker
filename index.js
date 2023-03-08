//Required 
const inquirer = require("inquirer");
const fs = require("fs");
const {generateSVG} = require("./lib/svg");
const {renderShape} = require('./lib/shapes');

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
        name: "color",
        message: "Choose a color for your logo.",
    },
])

//generate SVG file pulling from user data
.then((data) => {
 const template = generateSVG(shape);
 console.log("Generating Logo");
 fs.writeFileSync("genrateSVG", template);
    });


