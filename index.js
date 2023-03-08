//Required 
const inquirer = require("inquirer");
const fs = require("fs");
const Svg = require("./lib/svg");
const shapes = require('./lib/shapes');

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
        name:"textColor",
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
//.then((answers) => fs.writeFile("logo.svg", generateSvg(answers)), {})
.then((answers) => {
console.log(answers.shape)
const shape = new shapes[answers.shape](answers.color, answers.text, answers.textColor)
 const template = generateSvg(shape);
 console.log("Generating Logo");
 fs.writeFileSync("logo.svg", template);
    });


const generateSvg = (shape) => {
    console.log(Svg)
    const logo = new Svg()
    logo.setShape(shape)
    logo.setText(shape.text, shape.textColor)
    return logo.render();
}
// console.log(generateSvg)


