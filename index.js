const ravenclaw = [4, -1, 2, 3];
const slytherin = [3, 7, 1, 1, 1, 1, 5];
const gryffindor = [10, 1];
const hufflepuff = [1, 1, 1, 10];

const total =
  ravenclaw.reduce((a, b) => a + b) +
  slytherin.reduce((a, b) => a + b) +
  gryffindor.reduce((a, b) => a + b) +
  hufflepuff.reduce((a, b) => a + b);

const animationOffset = [];

const alterAnimation = (cssId, array) => {
  const num = array.reduce((a, b) => a + b);
  document.getElementById(`${cssId}`).setAttribute("style", `height:${num}px`);
};

window.onload = () => {
  alterAnimation("HTTPufflepuff", hufflepuff);
  alterAnimation("Slytherin", slytherin);
  alterAnimation("GriffinTDDor", gryffindor);
  alterAnimation("RavenCSSlaw", ravenclaw);
};

console.log(animationOffset[0]);
