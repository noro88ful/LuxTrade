$('.wrapper').addClass('loaded')

// $('.icon-menu').click(function(e){
// 	$(this).toggleClass('_active')
// 	$('.menu-body').toggleClass('_active')
// 	$('body').toggleClass('lock')
// })

// Burger menu animation

$('.icon-menu').click(function(e){
	$(this).toggleClass('_active')
	$('.menu__body').toggleClass('_active')
	if ($(this).hasClass('_active')) {
		$('body').data('scroll',$(window).scrollTop())
	} 
	$('body').toggleClass('lock')
	if (!$(this).hasClass('_active')) {
		$('body,html').scrollTop(parseInt($('body').data('scroll')))
	} 
})

//2 PARTS IMAGE + TEXT

function ibg(){
	$.each($('._ibg'), function (){
		if ($(this).find('img').length>0) {
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")')
		}
	})
}
ibg()

let user_icon = document.querySelector('.user-header__icon')
let user_menu = document.querySelector('.user-header__menu')
user_icon.addEventListener("click",function(){
	user_menu.classList.toggle('_active')
})

document.documentElement.addEventListener("click",function(e){
	if (!e.target.closest('.user-header')) {
		user_menu.classList.remove('_active')
	}
})

$('._goto').click(function(){
	let target = $(this).attr('href')
	target = '.'+target.slice(1)
	$('html,body').animate({ scrollTop: $(`${target}`).offset()['top']-20 }, 1000);
	return false; 
});





