$(document).ready(function(){
	$('body').jKit();

	$('.parallax1 ').animate({'bottom':0}, 1000,"easeInExpo");
	$('.parallax3').delay(500).animate({'opacity':1}, 1000,"easeInOutQuint");
	$('.parallax2').delay(1000).animate({'opacity':1}, 1000,"easeInOutQuint");

	//HOME
		$('.div-conteudo').jKit('parallax', {
			'strength': '1',
			'axis': 'both' ,
			'detect':'scroll'
		});

	$('.btn-access').click(function(event) {
		$("body,html").animate({
			scrollTop: $("#startups").offset().top
		}, 2000,"easeInOutQuint");
	});


	// MENU
	$('.hamburger-menu').click(function(event) {
		$(this).animate({"right":"-20%"}, 1000,"easeInOutQuint");
		$('.menu-hotsite').animate({"right":"0px"}, 1000,"easeInOutQuint");
	});

	$('.menu-hotsite li').click(function(event) {
		$(".menu-hotsite").animate({"right":"-40%"}, 1000,"easeInOutQuint");
		$('.hamburger-menu').animate({"right":"5%"}, 1000,"easeInOutQuint");
	});

	$('.menu-hotsite span').click(function(event) {
		$(".menu-hotsite").animate({"right":"-40%"}, 1000,"easeInOutQuint");
		$('.hamburger-menu').animate({"right":"5%"}, 1000,"easeInOutQuint");
	});

	$('#menu-home').click(function(event) {
		$("body,html").animate({
			scrollTop: $("#home").offset().top
		}, 2000,"easeInOutQuint");
	});

	$('#menu-startup').click(function(event) {
		$("body,html").animate({
			scrollTop: $("#startups").offset().top
		}, 2000,"easeInOutQuint");
	});

	//MENU-INTERNO
	$(".menu-interno li").click(function(event) {
		$(".sections").animate({"right":"0%"}, 1000,"easeInOutQuint");
	});

	$(".sections .btn-section-close").click(function(event) {
		$(".sections").animate({"right":"-50%"}, 1000,"easeInOutQuint")
	});
});
