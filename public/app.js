
function get_binary(num) {
  var a = [];
  for (var i = 7; i >= 0; i -= 1) {
    a.push((num >> i) % 2);
  }
  return a.join("");
}

function onMount() {
  var root = document.getElementById("root");
  for (var x = 0; x < 16; x += 1) {
    for (var y = 0; y < 16; y += 1) {
      var num = get_binary(Math.floor(Math.random() * 256));
      var filename = "img/" + num + ".png";

      var div = document.createElement("div");
      div.className = "default";
      var img = document.createElement("img");
      img.src = filename;
      div.appendChild(img);
      root.appendChild(div);

      div.addEventListener("click", function(e) {
        if (this.className.match(/opened/)) {
          this.className = "default";
        }
        else {
          this.className = "default opened";
        }
      });
    }
    br = document.createElement("br");
    root.appendChild(br);
  }
}

onMount();
