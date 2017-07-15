export default function sketch (p) {
  let rotation = 0;

  p.setup = function () {
    p.createCanvas(200, 200, p.WEBGL);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.rotation){
      rotation = props.rotation * Math.PI / 180;
    }
  };

  p.draw = function () {
    p.background(51);
    p.noStroke();
    p.push();
    p.rotateY(rotation);
    p.sphere(20);
    p.pop();
  };
}
