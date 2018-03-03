
$(document).ready(function(){
  $('.navigation').on('click','button[href^="#"]',function(e){
    //get the href of the clicked button
    const id = $(this).attr('href')
    const btnHrefs = []

    //get the hrefs of all the other buttons
    $('.navigation').find('button').each(function(i){
      btnHrefs.push($(this).attr('href'))
    })

    //get the hrefs of all the unselected buttons
    const unusedBtns = btnHrefs.filter((href)=>{
      return href != id
    })

    //if the unselected buttons is not selected fadeOut
    unusedBtns.map((href)=>{
        $(href).fadeOut(0)
    })

    //finally add a "show" class to the active button.
    $(id).addClass("show").fadeIn('slow')

  })
})
