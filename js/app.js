document.addEventListener('DOMContentLoaded', function() {

  console.log('DOM content loaded');

  document.getElementById('sprite').onclick = spriteSpeaks;
  document.querySelector('.instructions').onclick = win;

  function win() {
    title1.style.textColor = "black";
    document.querySelector("instructions").innerText = "YOU WIN!";
  }

  function spriteSpeaks() {
    var sprite = document.getElementById("sprite");
    sprite.innerHTML = "<div id='found'>You Found Me!</div>";
    sprite.style.backgroundColor = "white";
    document.getElementById("instructions").innerHTML = "<div id='won'>You won!</div>";

  };
})
