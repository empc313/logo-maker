class Svg {
    constructor() {
        this.text = "";
        this.shape="";
    }
    render() {
        return `<svg width="200" height="300">
        ${this.shape}
        ${this.text}
        </svg>`
    }

    setText(text, textColor) {
        this.text = `<text x="50" y="45" font-size="45" text-anchor="middle" fill="${textColor}">${text}</text>`
    }

    setShape(shape) {
        this.shape = shape.render()
    }
}

    
module.exports = Svg;

