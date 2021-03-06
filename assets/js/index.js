$(document).ready(fuction(){

    $('a').click(function(event){
        if(this.hash !== ""){
            event.preventDefault();
          var hash = this.hash;
$('html,body').enimate({
    scrollTop: $(hash).offset().top 
}.8000,function(){
    window.location.hash = hash;
})       
        }
})

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
$('#carouselExampleFade').carousel({
    interval: 800
})
})