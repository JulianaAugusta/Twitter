var button = document.getElementById("btn");
var textBox = document.getElementById('text-box');
var contador = document.getElementById('contador');
button.addEventListener("click", showNewTwitter);
// textBox.addEventListener('input', disabledButton);
textBox.addEventListener('keyup', btnCounter);

// button.setAttribute('disabled', 'true');
// button.style.backgroundColor = '#a9a9a9';


function showNewTwitter() {
  var paragraph = document.createElement('p');
  paragraph.textContent = textBox.value;

  var containerNewTwitter = document.createElement('div');
  containerNewTwitter.appendChild(paragraph);
  var post = document.getElementById('tweet-area');
  post.appendChild(containerNewTwitter);
  event.preventDefault();
  textBox.value = "";
}

function btnCounter() {
  var quant = 140;
  var total = value.length;
    if(total <= quant) {
      var rest = quant - total;
      document.getElementById('contador').innerHTML = rest;
    }
    if (textBox.length <= quant) {
      button.removeAttribute('disabled');
    }
    if (textBox.length > quant) {
      button.setAttribute('disabled', 'false');
      contador.style.color = '#ff0000';
      button.style.backgroundColor = '#a9a9a9';
    }
    if (textBox.length > 130 && textBox.length <= 140) {
      contador.style.color = '#0000ff';
    }
    if (textBox.length > 120 && textBox.length <= 130) {
      contador.style.color = '#ff00ff';
    }
}

// function color_textarea(value){
//   var banana = document.getElementById('contador');
//   if (banana === "130"){
//     alert("ui!");
//   }
// }


// function disabledBtn (){
//   if (textBox.value.length === 0 || textBox.value.length > 140 || textBox.value.trim() === '') {
//       button.disabled = true;
//       button.classList = 'button-disabled';
//     } else {
//       button.classList = 'button-disabled';
//       button.disabled = false;
//     }
// }
