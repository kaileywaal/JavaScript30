
let keys = document.getElementsByClassName('key');
let audioFiles = Array.from(document.getElementsByTagName('audio'));
console.log(audioFiles);

document.addEventListener('keydown', event => {
    for (let key of keys) {
        let keyValue = key.getAttribute('data-key');
        if (event.keyCode == keyValue) {
            let audioValue = audioFiles.find(file => file.getAttribute('data-key') == keyValue);
            audioValue.currentTime = 0;
            audioValue.play();
            key.classList.add('playing');
        }
    }
}
)

document.addEventListener('keyup', event => {
    for (let key of keys) {
        key.classList.remove('playing');
    }
}
)


