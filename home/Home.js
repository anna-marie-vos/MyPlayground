$(document).ready(function(){
  $('#Home').addClass('show')
  $('#Home').html(`
      <img src="home/pics/Bird.svg" id="bird" alt="bird">
      <p>This is the the Home section</p>
    `)
  TweenLite.to($('#bird'),2,{x:500})

})
