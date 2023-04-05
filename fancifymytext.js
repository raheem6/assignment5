function increaseSize() {
  document.getElementById("textArea").style.fontSize = "24pt";
}

function setStyles() {
  var textArea = document.getElementById("textArea");
  var fancyRadio = document.getElementById("fancyRadio");
  if (fancyRadio.checked) {
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
    textArea.style.fontWeight = "bold";
  } else {
    textArea.style.color = "";
    textArea.style.textDecoration = "";
    textArea.style.fontWeight = "";
  }
}

function addMoo() {
  var textArea = document.getElementById("textArea");
  var text = textArea.value;
  text = text.toUpperCase();
  var parts = text.split(".");
  for (var i = 0; i < parts.length; i++) {
    var words = parts[i].split(" ");
    words[words.length - 1] = words[words.length - 1] + "-Moo";
    parts[i] = words.join(" ");
  }
  text = parts.join(".");
  textArea.value = text;
}
