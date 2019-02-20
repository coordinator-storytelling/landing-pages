// function readTextFile(file) {
//   var rawFile = new XMLHttpRequest();
//   rawFile.open("GET", file, false);
//   rawFile.onreadystatechange = function () {
//     if (rawFile.readyState === 4) {
//       if (rawFile.status === 200 || rawFile.status == 0) {
//         var allText = rawFile.responseText;
//         alert(allText);
//       }
//     }
//   }
//   rawFile.send(null);
// }
// let myFile = readTextFile("file:///docs/MEDIA.md")
// console.log(myFile)

// const input = document.querySelector('input[type="file"]')
// input.addEventListener('change', function (e) {
//   console.log(input.files)
//   const reader = new FileReader()
//   reader.onload = function () {
//     document.getElementById('content').innerHTML =
//       marked(reader.result);
//     console.log(reader.result)
//   }
//   reader.readAsText(input.files[0])
// }, false)

window.onload = function () {
  let myFile = readTextFile("https://bountifulapp.netlify.com/docs/MEDIA.md")
  console.log(myFile)
  const reader = new FileReader()
  reader.onload = function () {
    console.log(reader.result)
  }

  reader.readAsText(myFile)
}
