$(document).ready(function() {
    const learn = document.querySelectorAll('.checkbox');
    const modal = $('.modal');
    const accept = $('.accept');
    const cancel = $('.cancel');
    const firstDiv = $('.first');
    const secondDiv = $('.second');
    const dateSpan = $('.date');
    const content = $('.content')
    let num = 0;

    const modal2 = $('.modal-2');
    const glasses = $('.glasses');


    for(var i = 0; i < learn.length; i++){
        learn[i].addEventListener('click', function(e){
            num = this.getAttribute('num');
            modal.css('z-index', '1');
            content.css('opacity', '0.3');
            e.preventDefault();
        })
    }   

    glasses.click(function(e){
        modal2.css('z-index', '1');
        modal2.css('display', 'flex');
        content.css('opacity', '0.3');
        e.preventDefault();
    })


    accept.click(function(){
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        today = dd + '.' + mm + '.' + yyyy + 'г';
        modal.css('z-index', '-1');
        content.css('opacity', '1');
        dateSpan[num].innerHTML = today;
        firstDiv[num].style.display = 'none';
        secondDiv[num].style.display = 'flex';
    })

    cancel.click(function(){
        modal.css('z-index', '-1');
        modal2.css('z-index', '-1');
        modal2.css('display', 'none');
        content.css('opacity', '1');
    })











});
    

function getDate(){

}