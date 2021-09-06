const adoptMenu = () => {
	$('.burger').on('click', function(){
		$('.mob-nav-menu').toggle();
	});
}

const adoptMenuOverLay = () => {
	$(window).on('click', function(){
		$('.burger_overlay').toggle();
	});
}

const closWin = () => {
	let screenwidth = $(window).width();
	$(window).resize(function() {
		if (screenwidth <= 1050) {
			$('.mob-nav-menu').hide();
		}
	}).resize();
}

const modalOpenByClickToButton = () => {
	$('.button').on('click', function() {
		$('.modal').show();
	})
}

const modalClose = () => {
	let mClose = document.getElementByClassName('.modal_close');
	mClose.onclick = function() {
		$('.modal').hide();
	}
}

// const modalOpenByScroll = () => {
// 	let scrollheight = window.pageYOffset();
// 	window.addEventListener('scroll', function() {
// 		if(scrollheight === 1000) {
// 			modal.style.display="block";
// 		}
// 	})
// }


// const modalCloseIcon = document.querySelectorAll('.close-modal');
// 	if(modalCloseIcon.length > 0) {
// 		for(let i = 0; i < modalCloseIcon.length; i++) {
// 			const el = modalCloseIcon[i];
// 			el.addEventListener('click' function(e) {
// 				modalClose(el.closest('.modal'));
// 				e.preventDefault();
// 			})
// 		}
// 	}

adoptMenu();
adoptMenuOverLay();
closWin();
modalOpenByClickToButton();
modalClose();