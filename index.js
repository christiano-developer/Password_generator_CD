const characters = ["A", "B", "C", "D", "E", "F", "G", "H",
  "I", "J", "K", "L", "M", "N", "O", "P",
  "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
  "a", "b", "c", "d", "e", "f", "g", "h",
  "i", "j", "k", "l", "m", "n", "o", "p",
  "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
  "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_",
  "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">",
  ".", "?", "/"];


let outEl1 = document.getElementById("output1-el")
let outEl2 = document.getElementById("output2-el")

document.getElementById("button-el").addEventListener("click", function () {
  let pass1 = ""
  let pass2 = ""
  outEl1.textContent = ""
  outEl2.textContent = ""
  for (let i = 0; i < 15; i++) {
    let p = Math.floor(Math.random() * characters.length)
    pass1 += characters[p]
  }

  for (let i = 0; i < 8; i++) {
    let q = Math.floor(Math.random() * characters.length)
    pass2 += characters[q]
  }
  outEl1.textContent = pass1
  outEl2.textContent = pass2

})


