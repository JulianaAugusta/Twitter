var button = document.getElementById("btn");
button.addEventListener("click", showNewTwitter)

function showNewTwitter() {
  var textBox = document.getElementById('text-box');
  var paragraph = document.createElement('p');
  paragraph.textContent = textBox.value;

  var containerNewTwitter = document.createElement('div');
  containerNewTwitter.appendChild(paragraph);
  var post = document.getElementById('tweet-area');
  post.appendChild(containerNewTwitter);
  event.preventDefault();
  textBox.value = "";
}

function limite_textarea(value) {
  var quant = 140;
  var total = value.length;
    if(total <= quant) {
        rest = quant - total;
        document.getElementById('contador').innerHTML = rest;
    } else {
        document.getElementById('text-box').value = value.substr(0,quant);
    }
}
