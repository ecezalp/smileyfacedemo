
// transform int to binary string
function get_binary(num) {
  var a = [];
  for (var i = 7; i >= 0; i -= 1) {
    a.push((num >> i) % 2);
  }
  return a.join("");
}

// array shuffle function
function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

// create smiley class with name and image properties, initialized with binary string
class Smiley {
  constructor (stringId) {
    this.name = stringId
    this.image = "img/" + stringId + ".png"
  }
}

// create target smiley
function createTargetSmiley () {
  var num = get_binary(Math.floor(Math.random() * 256));
  let targetSmiley = new Smiley(num)
  return targetSmiley
}

// assign target smiley to global variable
var targetSmiley = createTargetSmiley()

// create unduplicated randomized binary array (0..255) for smiley display order
function createOrderArray () {
  let orderArray = [...Array(256).keys()].map(key => get_binary(parseInt(key)))
  shuffle(orderArray)
  return orderArray
}

//transform grid coordinates into array placement
function numConverter (x, y) {
  num = (y * 16) + x
  return num
}


function onMount() {
  var root = document.getElementById("root");

  orderArray = createOrderArray()

  for (var x = 0; x < 16; x += 1) {
    for (var y = 0; y < 16; y += 1) {

      var tempSmiley = new Smiley(orderArray[numConverter(x,y)])

      var filename = tempSmiley.image
      var div = document.createElement("div");
        div.className = "default";
      var img = document.createElement("img");
        img.src = filename;
      div.appendChild(img);
      root.appendChild(div);

      div.addEventListener("click", function(e) {
        if (this.className.match(/opened/)) {
          this.className = "default";

          if (tempSmiley.name == targetSmiley.name) {
            alert("You Win!");
          }

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
