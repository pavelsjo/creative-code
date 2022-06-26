const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [ 1024, 1024 ],
  animate: true
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
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    // draw
    const cx = width  * 0.5;
    const cy = height * 0.5;

    const w = width  * 0.01;
    const h = height * 0.3;
    let x, y;

    const num = 90;
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
      context.scale(random.range(0.1, 2), random.range(0.1, 0.5));
      
      context.fillStyle = '#58f1f1';
      context.beginPath();
      context.rect(-w * 0.5, random.range(0, -h * 0.8), w, h);
      context.fill();
      context.restore();

      // circle
      context.save();
      context.translate(cx, cy);
      context.rotate(-angle);
      context.lineWidth = random.range(-10, 10);
      
      context.beginPath();
      context.arc(0, 0, radius * random.range(0.7, 1.3), slice * random.range(1, -8), slice * random.range(1, 5));
      context.stroke();
      context.restore();
      
    }
  };

};

canvasSketch(sketch, settings);
