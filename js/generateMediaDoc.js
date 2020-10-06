
let url = "https://bountifulapp.netlify.app/docs/MEDIA.md"

async function getData(url) {
  let downloadData = await fetch(url)
  let data = await downloadData.text()
  document.getElementById('content').innerHTML = marked(data)
}

window.onload = getData(url)




