document.addEventListener("DOMContentLoaded", function() {

	$('.menu-btn').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('menu-btn_active');
		$('.menu-nav').toggleClass('menu-nav_active');
		// Берем ссылку с классом меню-бтн, на действие клик 
		// отменяем стандартное действие браузера, добавляем класс
		// меню бтн эктив. Так же при нажатии на эту кнопку 
		// менюшке с классом меню нав присваевается класс меню нав эктив.
	});
	$('.slider__services').slick({
		arrows: true,
		dots: true,
		adapriveHeight: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
		easing: 'linear',
		infinite: true,
		initialSlide: 0,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseonFocus: true,
		pauseonHover: true,
		pauseonDotsHover: true,
		draggable: true,
		swipe: true,
		touchThreshold: 10,
		touchMove: true,
		waitForAnimate: false,
		centerMode: false,
		fade: true,
	});
	$('.team__slider').slick({
		arrows: true,
		dots: true,
		adapriveHeight: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
		easing: 'linear',
		infinite: true,
		initialSlide: 0,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseonFocus: true,
		pauseonHover: true,
		pauseonDotsHover: true,
		draggable: true,
		swipe: true,
		touchThreshold: 10,
		touchMove: true,
		waitForAnimate: false,
		centerMode: false,
	});
	$('.pricing__slider').slick({
		arrows: true,
		dots: true,
		adapriveHeight: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
		easing: 'linear',
		infinite: true,
		initialSlide: 0,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseonFocus: true,
		pauseonHover: true,
		pauseonDotsHover: true,
		draggable: true,
		swipe: true,
		touchThreshold: 10,
		touchMove: true,
		waitForAnimate: false,
		centerMode: false,
	});

	
});

