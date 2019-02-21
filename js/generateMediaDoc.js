
let url = "https://bountifulapp.netlify.com/docs/MEDIA.md"

async function getData(url) {
  let downloadData = await fetch(url)
  let data = await downloadData.text()
  document.getElementById('content').innerHTML = marked(data)
  if (data) {
    await createTable()
  }
}

window.onload = getData(url)

async function createTable () {
  //Create table
  const mainContent = document.getElementById('content')
  const tableHeader = document.querySelector('thead')
  console.log(`tableHeader: ${tableHeader.rows[0].cells}`)
  const tableBody = document.querySelector('tbody')
  console.log(`tableBody: ${tableBody.rows}`)
  const tableWrapper = document.createElement('div')
  let newTable = document.createElement('table')


  for (let i = 0; i < tableBody.rows.length; i++) {
    let row0 = document.createElement('tr')
    let row1 = document.createElement('tr')
    let row2 = document.createElement('tr')

    let row0cell0 = document.createElement('td')
    row0cell0.textContent = tableHeader.rows[0].cells[0].textContent
    row0.append(row0cell0)

    let row1cell0 = document.createElement('td')
    row1cell0.textContent = tableHeader.rows[0].cells[1].textContent
    row1.append(row1cell0)

    let row2cell0 = document.createElement('td')
    row2cell0.textContent = tableHeader.rows[0].cells[2].textContent
    row2.append(row2cell0)

    let cell0 = document.createElement('td')
    cell0.textContent = tableBody.rows[i].cells[0].textContent
    row0.append(cell0)
    let cell1 = document.createElement('td')
    cell1.textContent = tableBody.rows[i].cells[1].textContent
    row1.append(cell1)
    let cell2 = document.createElement('td')
    cell2.textContent = tableBody.rows[i].cells[2].textContent
    row2.append(cell2)

    newTable.append(row0)
    newTable.append(row1)
    newTable.append(row2)
  }

  // for (let i = 0; i < tableBody.rows.length; i++) {
  //   let row0cell0 = document.createElement('td')
  //   let row1cell0 = document.createElement('td')
  //   let row2cell0 = document.createElement('td')


  //   for (let j = 0; j < tableHeader.rows[0].cells.length; j++) {
      
  //     let cell = document.createElement('td')
  //     cell.textContent = tableHeader.rows[0].cells[j].textContent
  //     row.append(cell)
  //   }
  //   newTable.append(row)
  // }

  tableWrapper.append(newTable)
  mainContent.append(tableWrapper)
}

//window.onload = createTable


