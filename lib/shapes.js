function renderShape(shape) {
  if (shape === "triangle") {
    SVG().addTo('#drawing')
    , rect = draw.rect(100, 100)
  } else if (shape === 'circle') {
    SVG().addTo('body').size(300, 130)
 var rect = draw.circle(100)
  }
}






function generateLogo(data){
  return data(renderShape)
}

 module.exports = generateLogo;
