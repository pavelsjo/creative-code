const images = document.images;
const frame = document.getElementById('frame');

const draw = () => {

    const [width, height] = [300, 300]

    for(let i = 0; i < images.length; i++) {
        if(images[i].getAttribute('id') !== 'frame') {
            const canvas = document.createElement('canvas');

            // setup
            canvas.setAttribute('width', width);
            canvas.setAttribute('height', height);

            images[i].parentNode.insertBefore(canvas, images[i]);

            const context = canvas.getContext('2d');

            // draw
            context.drawImage(images[i], 0, 0, 1000, 1000, 10, 10, 250, 250);
            context.drawImage(frame, 0, 0, 270, 270);

        }
    }
}