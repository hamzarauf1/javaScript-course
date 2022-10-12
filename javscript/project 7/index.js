console.log("This is drag and drop");

const imgBox = document.querySelector('.imgbox');
const whiteBoxes = document.getElementsByClassName('whiteBox');

// eventlistner for dragable element imgBox
imgBox.addEventListener('dragstart', (e) => {
    console.log("Dragstart triggered");
    e.target.className += " hold";
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);
});

imgBox.addEventListener('dragend', (e) => {
    console.log("Dragend triggered");
    e.target.className = 'imgBox';
});

for (let whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover', (e) => {
    console.log("Dragover triggered");
    e.preventDefault();
    });
    whiteBox.addEventListener('dragenter', () => {
        console.log("Dragenter triggered");

    });
    whiteBox.addEventListener('dragleave', () => {
        console.log("Dragleave triggered");

    });
    whiteBox.addEventListener('drop', (e) => {
        console.log("Drop triggered");
        e.target.append(imgBox);

    });
}

