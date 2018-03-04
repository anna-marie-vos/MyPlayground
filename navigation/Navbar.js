
$(document).ready(function(){
  let html = ''

  html =`
  <li><button href="#Home">Home</button></li>
  <li><button href="#About">About</button></li>
  <li><button href="#aboutUs">About Us</button></li>
  <li><button href="#contactUs">Contact</button></li>
  `
  $("#navbar").html(html)

  html = `
  <button href="#Home">Home</button>
  <button href="#About">About</button>
  <button href="#aboutUs">About Us</button>
  <button href="#contactUs">Contact</button>

  `
  $(html).prependTo('.navigation')
})
