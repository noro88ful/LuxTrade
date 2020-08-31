// Adaptive functions

$(window).resize(function(e){
	adaptive_function()
})

// $('[data-move]').each(function() {
//     // `this` is the div
// });

function adaptive_header(w,h){
	var elems = document.querySelectorAll("[data-move]")
	if (elems.length!=0) {
		for (var i = 0; i < elems.length; i++) {
			let d = elems[i].dataset.move.split(',')
			if (d.length==3) {
				let appTo = '.'+d[0],eq = d[1],mw = d[2];
				if (w<mw) {
					if (!elems[i].classList.contains('done')) {
						elems[i].classList.add('done')
						$(`${appTo}`).append(elems[i])
					} 
				} 
				else {
					if (elems[i].classList.contains('done')) {
						elems[i].classList.remove('done')
						$('.header__actions').before(elems[i])
					} 
				}
			}
		}
	}
}

function adaptive_function(){
	var w = $(window).outerWidth();
	var h = $(window).outerHeight();
	adaptive_header(w,h)
}
	adaptive_function()
