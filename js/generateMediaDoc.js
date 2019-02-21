
let url = "https://bountifulapp.netlify.com/docs/MEDIA.md"

async function getData(url) {
  let downloadData = await fetch(url)
  let data = await downloadData.text()
  document.getElementById('content').innerHTML = marked(data)
  console.log(`data: `, data)
}

window.onload = getData(url)

//Create table
const mainContent = document.getElementById('content')
const tableHeader = document.querySelector('thead')
console.log(`tableHeader: ${tableHeader}`)
const tableBody = document.querySelector('tbody')
console.log(`tableBody: ${tableBody}`)
const tableWrapper = document.createElement('div')


