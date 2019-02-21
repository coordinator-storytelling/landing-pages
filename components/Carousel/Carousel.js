class Carousel {
  constructor(carousel) {
    this.carousel = carousel
    this.leftButton = carousel.querySelector('.left-button')
    this.rightButton = carousel.querySelector('.right-button')
    // Place the NodeList of images inside an array to facilitate moving through the list
    this.testimonials = Array.from(carousel.querySelectorAll('.testimony'))

    this.leftButton.addEventListener('click', () => this.goBack())
    this.rightButton.addEventListener('click', () => this.goForward())
  }

  displayImage(num = 0, direction = 'left') {
    for (let i = 0; i < this.testimonials.length; i++) {
      // Find the index number of the image currently being displayed
      if (window.getComputedStyle(this.testimonials[i], null).display === 'flex') {
        this.displayIndex = i
        this.testimonials[i].style.display = 'none'
      }
    }

    // Create an infinite loop by resetting the display index number to 0 or the array length - 1 
    if ((this.displayIndex + num) > (this.testimonials.length - 1)) {
      this.displayIndex = 0
    } else if ((this.displayIndex + num) < 0) {
      this.displayIndex = this.testimonials.length - 1
    } else {
      this.displayIndex = this.displayIndex + num
    }

    // Display the next image in the array and execute the slide animation effect
    if (direction == 'right') {
      this.testimonials[this.displayIndex].style.display = 'flex'
      this.testimonials[this.displayIndex].style.left = 'initial'
      this.testimonials[this.displayIndex].style.right = '-100%'
      this.testimonials[this.displayIndex].style.animation = 'slideRight 0.5s forwards'

    } else {
      this.testimonials[this.displayIndex].style.display = 'flex'
      this.testimonials[this.displayIndex].style.right = 'initial'
      this.testimonials[this.displayIndex].style.left = '-100%'
      this.testimonials[this.displayIndex].style.animation = 'slideLeft 0.5s forwards'
    }

  }

  goForward() {
    this.displayImage(1, 'left')
  }

  goBack() {
    this.displayImage(-1, 'right')
  }

}


let carousel = document.querySelector('.carousel')
// Display the first image in the list by default
carousel.querySelector('.testimony').style.display = 'flex'
carousel = new Carousel(carousel)
