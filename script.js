const adoptMenu = () => {
	$('.burger').on('click', function(){
		$('.mob-nav-menu').toggle();
	});
}

const closWin = () => {
	let screenwidth = $(window).width();
	$(window).resize(function() {
		if (screenwidth <= 600) {
			$('.mob-nav-menu').hide();
		}
	}).resize();
}