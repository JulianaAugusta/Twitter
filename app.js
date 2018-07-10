var btnSubmit = document.getElementById('button-submit');
var textBox = document.getElementById('text-box');
var counterCharacter = document.getElementById('counter-character');
counterCharacter.textContent = 140;
btnSubmit.disabled = true;

textBox.addEventListener('keydown', expandAreaSize);
textBox.addEventListener('keyup', changeCounterColor);
btnSubmit.addEventListener('click', showNewTwitter);

function changeCounterColor() {
    counterCharacter.textContent = (140 - textBox.value.length);
    console.log(textBox.value.length);
    if (textBox.value.length === 0 || textBox.value === ' ') {
        btnSubmit.disabled = true;
    } else if (textBox.value.length > 140) {
        counterCharacter.classList = 'color-counter';
        counterCharacter.classList.add('color-140');
        btnSubmit.disabled = true;
    } else if (textBox.value.length >= 110 && textBox.value.length < 120) {
        counterCharacter.classList = 'color-counter';
        counterCharacter.classList.add('color-130');
    } else if (textBox.value.length >= 120 && textBox.value.length <= 140) {
        counterCharacter.classList = 'color-counter';
        counterCharacter.classList.add('color-120');
        btnSubmit.disabled = false;
    } else {
        counterCharacter.classList = 'color-counter';
        btnSubmit.disabled = false;
    }
};

function expandAreaSize() {
    textBox = event.currentTarget;
    textBox.style.height = 'auto';
    textBox.style.height = textBox.scrollHeight + 'px';
};

function showNewTwitter() {
    event.preventDefault();
    if (textBox.value) {
        var containerNewTweet = document.getElementById('tweet-area');
        var userPost = document.createElement('li');
        userPost.textContent = textBox.value;
        var dateOfPost = document.createElement('span');
        var currentTime = new Date();
        dateOfPost.textContent = 'Hora: ' + currentTime.getHours() + '\:' + currentTime.getMinutes();
        userPost.appendChild(dateOfPost);
        containerNewTweet.appendChild(userPost);

        textBox.value = "";
    }
};
