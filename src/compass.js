
'use strict';

function setDirectionName (name){
    $('.compass .direction').text(name);
}

function setAngle (degree){
    degree = parseInt(degree,10) || 0;
    $('.compass .angle').text(degree);
}

function rotateCompass (angle){
    $('.compass .disc').css({
        transform:'rotate('+ angle +'deg)'
    });

}
$(window).on('deviceorientation',function(event){
    event = event.originalEvent
    //event.alpha
    //event.beta
    //event.gamma
    rotateCompass(event.alpha);
    setAngle(event.alpha)
            compassElem.css({
        transform:'rotate3d(1,0,0,'+ (event.beta * -1)  +'deg)'
    })
})

setDirectionName();
setAngle ();
rotateCompass();