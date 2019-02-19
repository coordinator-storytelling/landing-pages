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