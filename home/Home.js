$(document).ready(function () {
  $('#Home').addClass('show')
  $('#Home').html(`
      <img src="assets/pics/Bird.svg" id="bird" alt="bird">
      <p>This is the the Home section</p>
    `)
  TweenMax.to($('#bird'), 2, {x: 500})
  TweenMax.to($('#bird'), 2, {x: 0, delay: 2})

})
