$(document).ready(function(){
	$('.content-all').load('includes/home.html');

	$('body').jKit();

	var sobeHome = function(){
		$(".btn-success").animate({"opacity":0}, 1000);
		$('.text-page').animate({'opacity':0}, 1000,"easeInOutQuint");
		$('.anima-01').animate({'top':-800}, 1000,"easeInExpo");
		$('.anima-02').delay(100).animate({'top':-800}, 1000,"easeInExpo");
		$('.parallax3').delay(200).animate({'top':300}, 1000,"easeInExpo");
	}

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
		sobeHome()
		setTimeout(function(){ $('.content-all').load('includes/home.html'); }, 1500);
	});

	$('#menu-startup').click(function(event) {
		sobeHome()
		setTimeout(function(){ $('.content-all').load('includes/startups.html'); }, 1500);
	});
});
