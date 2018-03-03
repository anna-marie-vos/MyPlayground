
$(document).ready(function(){
  const hamburger = $('.hambrg-btn')
  const navbar = $('#navigation')

  const html = (`
    <div class="hambrg-btn">
      <span></span>
      <span></span>
      <span></span>
    </div>
  `)

  $(html).prependTo('.navigation')
})
