var button = document.getElementById('btn');
var textBox = document.getElementById('text-box');
var counterColor = document.getElementById('contador');
counterColor.textContent = 10;
// button.setAttribute('disabled', 'true');

button.addEventListener('click', showNewTwitter);
textBox.addEventListener('keydown', moreSpaceInBox);
textBox.addEventListener('keyup', limiteTextArea);



function showNewTwitter() {
  var textBox = document.getElementById('text-box');
  var paragraph = document.createElement('p');
  paragraph.textContent = textBox.value;
  paragraph.style.color = 'white';
  var containerNewTwitter = document.createElement('div');
  containerNewTwitter.appendChild(paragraph);
  containerNewTwitter.style.backgroundColor = 'black';
  var post = document.getElementById('tweet-area');
  post.appendChild(containerNewTwitter);
  event.preventDefault();
  textBox.value = "";
}


function limiteTextArea() {
  var quant = new Number();
  quant = 10;
  var atual = textBox.length;
  var total = new Number();
  total = counterColor-atual;
  document.getElementById('contador').innerHTML = total;
    // if(total <= quant) {
    //     rest = quant - total;
    //     document.getElementById('contador').innerHTML = rest;
    // }
}

function moreSpaceInBox() {
  while (textBox.scrollHeight > textBox.offsetHeight) {
    text.rows += 1;
  }
}

function currentTime() {
  var data = new Date;
  var hour = document.createElement('span');
  hour.textContent = 'Hora: ' + data.getHours() + ':' + data.getMinutes();
  msg.appendChild(hour);
}
