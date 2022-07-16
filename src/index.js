let room = document.querySelector('.room');

const show = () => {
    for (let i = 0; i < 3; i++) {
        const canvas = drawMesh(400, 400);
        room.appendChild(canvas);
    }
}

show();


