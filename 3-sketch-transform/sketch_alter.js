const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [ 1024, 1024 ]
};

// const degToRad = (degress) => {
//   return degress / 180 * Math.PI;
// };

// const randomRange = (min, max) => {
//   return Math.random() * (max - min) + min;
// };

const sketch = () => {
  return ({ context, width, height }) => {

    // background
    context.fillStyle = 'gray';
    context.fillRect(0, 0, width, height);

    // draw
    const cx = width  * 0.5;
    const cy = height * 0.5;

    const w = width  * 0.001;
    const h = height * 200;
    let x, y;

    const num = 900;
    const radius = width * 0.3;
    
    for (let i = 0; i < num; i++) {

      // lines
      const slice = math.degToRad(360 / num);
      const angle = slice * i;

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      context.save();
      context.translate(x, y);
      context.rotate(angle);
      context.scale(random.range(0.01, 2), random.range(0.01, 0.9));
      
      context.fillStyle = '#58f1f1';
      context.beginPath();
      context.rect(-w * 0.16, random.range(0, -h * 0.15), w, h);
      context.fill();
      context.restore();

      // // circle
      // context.save();
  
      // context.translate(cx, cy);
      // context.rotate(angle);
      // context.lineWidth = random.range(1, 20);
      
      // context.beginPath();
      // context.arc(0, 0, radius * random.range(0.7, 1.3), slice * random.range(1, -8), slice * random.range(1, 5));
      // context.stroke();
      // context.restore();
      
    }
  };

};

canvasSketch(sketch, settings);
