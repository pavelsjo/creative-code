// draw
const drawMesh = (width, height) => {

    // create canvas
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    
    //context
    const context = canvas.getContext('2d');

    const w = 50;
    const h = 50;
    const gap = 30;
    
    for(let i = 0; i < 5; i++) {
        for(let j = 0; j < 5; j++) {
            const x = 15 + (w  + gap) * i;
            const y = 15 + (h + gap) * j;
            
            // square
            context.beginPath();
            context.rect(x, y, w, h);
            context.stroke();

            meshDetails(x, y, w, h, context);
        }
    }

    return canvas;
}

const meshDetails = (x, y, w, h, context) => {
    if( Math.random() > 0.7) {
        // small upper left
        context.beginPath();  
        context.rect(x - 6, y - 6, w / 4, h / 4);
        context.fill();
    } 
    
    if( Math.random() > 0.6) {
        // small upper right
        context.beginPath();  
        context.rect(x + 42, y - 6, w / 4, h / 4);
        context.fill();
    }

    if( Math.random() > 0.5) {
        // small lower left
        context.beginPath();  
        context.rect(x -8, y + 42, w / 4, h / 4);
        context.fill();
    }

    if( Math.random() > 0.4) {
        // small lower rigth
        context.beginPath();  
        context.rect(x + 42, y + 42, w / 4, h / 4);
        context.fill();
    }
}
