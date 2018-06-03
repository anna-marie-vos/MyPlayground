
$(document).ready(function () {
  $('#aboutUs').addClass('hide')
  $('#aboutUs').html(`
      <img src="assets/pics/box.svg" id="box" alt="box"/>
      <img src="assets/pics/box2.svg" id="box2" alt="box"/>
    `)
  $('button').click(function () {
    const boxTimeline = new TimelineMax()
    // TweenMax.to($('#box'), 2, {x: 500})
    // TweenMax.to($('#box'), 2, {x: 0, delay: 2})
    boxTimeline.to('#box', 2, {x: 500})
      .to('#box2', 2, {y: 200})
  })
})
