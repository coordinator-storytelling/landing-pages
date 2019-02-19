const mainNav = document.querySelector('.mainNav')
const openMenuIcon = document.querySelector('#openMenu')
const closeMenuIcon = document.querySelector('#closeMenu')
const openMenu = () => {
  mainNav.style.display = 'flex'
  openMenuIcon.style.display = 'none'
  closeMenuIcon.style.display = 'block'
}

const closeMenu = () => {
  mainNav.style.display = 'none'
  openMenuIcon.style.display = 'block'
  closeMenuIcon.style.display = 'none'
}

openMenuIcon.addEventListener('click', openMenu)
closeMenuIcon.addEventListener('click', closeMenu)

//Design options
//Banner button
const changeButton = (e, fontColor, bgColor) => {
  e.preventDefault()
  e.currentTarget.style.color = fontColor
  e.currentTarget.style.backgroundColor = bgColor
}
document.querySelector('.intro button').addEventListener('click', (e) => changeButton(e, '#FFFFFF', '#FF7F50'))