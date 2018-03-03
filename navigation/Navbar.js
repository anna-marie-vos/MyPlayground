
$(document).ready(function(){
  // if hamburger bar is active add the hrefs as a unodered list
  const html = `
    <button href="#Home">Home</button>
    <button href="#About">About</button>
    <button href="#aboutUs">About Us</button>
    <button href="#contactUs">Contact</button>

  `
  $(html).prependTo('.navigation')
})
