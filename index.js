let room = document.querySelector('.room');

for (let i=0; i < 4; i++) {
    const canvas = drawMesh(400, 400);
    room.appendChild(canvas);
}



