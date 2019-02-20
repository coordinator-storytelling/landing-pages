let url = "https://bountifulapp.netlify.com/docs/MEDIA.md"

async function getData (url) { 
  let downloadData = await fetch(url) 
  let data = await downloadData.text()
  document.getElementById('content').innerHTML = marked(data)
  console.log(`data: `, data)
}

windows.onload = getData(url)


