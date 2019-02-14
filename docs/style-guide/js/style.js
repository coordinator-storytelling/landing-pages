// Style Guide Script
// Typography
const fontList = {
  logoFont : {
    description: "Varela, 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, sans-serif",
    sample: "Acme, Inc."},
  headingFont : {
    description: "Varela, 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, sans-serif",
    sample: "The quick, brown fox"
  },
  defaultFont: {
    description: "'Open Sans', 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, sans-serif",
    sample: "The quick, brown fox"
  },
}

//Color Palette
//const colorList = ['#1363A8', '#0F5080', '#D1DAE5', '#4195D2', '#7F969F', '#FF7F50', '#03100D', '#595959', '#FFFFFF']
const colorPalette = {
  primaryColor: {
    name: "Primary Color",
    description: '#1363A8',
    get sample() { return this.description },
  },
  primaryDark: {
    name: "Primary Dark",
    description: '#0F5080',
    get sample () { return this.description },
  },
  primaryBgShading: {
    name: "Primary Background Shading",
    description: '#D1DAE5',
    get sample () { return this.description },
  },
  secondaryColor: {
    name: "Seconday Color",
    description: '#4195D2',
    get sample () { return this.description },
  },
  secondaryBgShading: {
    name: "Secondary Background Shading",
    description: '#7F969F',
    get sample() { return this.description },
  },
  accent: {
    name: "Accent",
    description: '#FF7F50',
    get sample() { return this.description },
  },
  emphasis: {
    name: "Emphasis",
    description: '#03100D',
    get sample() { return this.description },
  },
  darkText: {
    name: "Text (Dark)",
    description: '#595959',
    get sample () { return this.description },
  },
  lightText: {
    name: "Text (Light)",
    description: '#FFFFFF',
    get sample () { return this.description },
  }
}

const headingTags = ['H1', 'H2', 'H3', 'H4', 'H5']
const headingList = headingTags.map((elem, index) => {
  return {
    tag: elem,
    name: `Heading${index+1}`,
    description: fontList.headingFont.description,
    get sample () { return this.name },
  }
})

const pageElements = {

}

const displayContent = (obj, section) => {
  for (let key in obj) {
    let newItem = document.createElement('div')
    newItem.classList.add('item')
    section.append(newItem)
    let newItemName = document.createElement('p')
    newItemName.classList.add('name')
    newItemName.textContent = obj[key].name
    newItem.append(newItemName)
    let newItemDesc = document.createElement('p')
    newItemDesc.classList.add('description')
    newItemDesc.textContent = obj[key].description
    newItem.append(newItemDesc)
    let newSample = document.createElement('div')
    newSample.classList.add('sample')
    newSample.textContent = obj[key].sample
    section.append(newSample)
  }
}

const typography = document.querySelector('#typography')
displayContent(fontList, typography)

const colors = document.querySelector('#color-palette')
displayContent(colorPalette, colors)

const headings = document.querySelector('#page-headings')
displayContent(headingList, headings)

