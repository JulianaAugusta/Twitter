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
