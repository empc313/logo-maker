function renderLogoShape(Shape) {
  if (shape === "circle") {
    return circle((cx = "25"), (cy = "75"), (r = "20"));
  } else if (shape === "triangle") {
    return polygon((points = "50 15, 100 100, 0 100"));
  } else if (shape === "square") {
    return rect((x = "50"), (y = "20"), (width = "150"), (height = "150"));
  }
}

// function renderLogo(data){
//     return
//  ${renderLogoShape(data.shape)}
// }

// module.exports = shapes
