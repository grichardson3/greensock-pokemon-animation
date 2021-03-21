$(document).foundation();

var pokeBall = document.querySelector("#pokeball");
var voltorb = document.querySelector("#pokemonVoltorb");
var catchTransition = document.querySelector("#catchTransition");
var Shadow = document.querySelector("#voltorbShadow");
var caughtPokemon = document.querySelector("#ballButton");


function init()
{
	TweenLite.to(pokeBall, 1, {right:"190px", rotation: 720, ease: Power0.easeNone, y: 0});
	TweenLite.to(pokeBall, .5, {bottom:"600px", ease: Power3.easeNone, y: 0});
	TweenLite.to(voltorb, .5, {right:"30px", rotation: 15, ease: Power1.EaseNone, y: 0, delay: .5});
	TweenLite.to(pokeBall, .5, {bottom:"400px", ease: Power1.easeIn, y: 0, delay: .5});
	TweenLite.to(Shadow, .5, {right:"30px", ease: Power1.easeNone, y: 0, delay: .5})
	TweenLite.to(pokeBall, .7, {bottom:"500px", ease: Power2.easeNone, y: 0, delay: 1});
	TweenLite.to(catchTransition, .05, {opacity: 1, ease: Power0.easeNone, y: 0, delay: 1});
	TweenLite.to(voltorb, .7, {opacity: 0, ease: Power2.easeNone, y: 0, delay: 1.3});
	TweenLite.to(Shadow, .5, {opacity: 0, ease: Power0.easeNone, y: 0, delay: 1.3});
	TweenLite.to(catchTransition, .5, {opacity: 0, ease: Power0.easeNone, y: 0, delay: 1.8});
	TweenLite.to(pokeBall, 1, {bottom:"230px", ease: Bounce.easeOut, y: 0, delay: 2.3})
	TweenLite.to(pokeBall, .125, {right:"210px", rotation: 705, ease: Power0.easeNone, y: 0, delay: 4});
	TweenLite.to(pokeBall, .25, {right:"190px", rotation: 735, ease: Power0.easeNone, y: 0, delay: 4.125});
	TweenLite.to(pokeBall, .125, {right:"200px", rotation: 720, ease: Power0.easeNone, y: 0, delay: 4.375});
	TweenLite.to(pokeBall, .125, {right:"190px", rotation: 735, ease: Power0.easeNone, y: 0, delay: 5.5});
	TweenLite.to(pokeBall, .25, {right:"210px", rotation: 705, ease: Power0.easeNone, y: 0, delay: 5.625});
	TweenLite.to(pokeBall, .125, {right:"200px", rotation: 720, ease: Power0.easeNone, y: 0, delay: 5.875});
	TweenLite.to(pokeBall, .125, {right:"210px", rotation: 705, ease: Power0.easeNone, y: 0, delay: 7});
	TweenLite.to(pokeBall, .25, {right:"190px", rotation: 735, ease: Power0.easeNone, y: 0, delay: 7.125});
	TweenLite.to(pokeBall, .125, {right:"200px", rotation: 720, ease: Power0.easeNone, y: 0, delay: 7.375});
	TweenLite.to(caughtPokemon, 1, {background:"#ff96ab", ease: Power2.easeNone, y: 0, delay: 8.5});

}

window.addEventListener('load', init, false);