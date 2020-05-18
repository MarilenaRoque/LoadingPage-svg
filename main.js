
let monkey= document.getElementById("happy-monkey");
console.log(monkey);
let array= [142,171,197,226];


var myFunction= setInterval(MonkeyAppear,300);

monkey.onclick= function(){
    monkey.setAttribute('src', "assets/sad-monkey.svg");
    clearInterval(myFunction);
}


function MonkeyAppear() {
    var positionY= array[(Math.floor(Math.random() * 4))];
    var positionX= Math.floor(Math.random() * (136) + 176);
    console.log(positionX);
    var attribute= `bottom: ${positionY}px; left: ${positionX}px;`;
    monkey.setAttribute("style", attribute);

}

