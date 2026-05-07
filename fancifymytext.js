function makeBigger() {
  alert("Hello, world!");
  document.getElementById("userText").style.fontSize = "24pt";
}

function applyStyle() {
  var textArea = document.getElementById("userText");
  var fancy = document.getElementById("fancyShmancy").checked;

  if (fancy) {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
  } else {
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
  }
}

function mooText() {
  var textArea = document.getElementById("userText");
  var text = textArea.value.toUpperCase();

  var parts = text.split(".");
  for (var i = 0; i < parts.length; i++) {
    parts[i] = parts[i].trim();
    if (parts[i].length > 0) {
      var words = parts[i].split(/\s+/);
      words[words.length - 1] = words[words.length - 1] + "-MOO";
      parts[i] = words.join(" ");
    }
  }

  textArea.value = parts.join(". ");
}
