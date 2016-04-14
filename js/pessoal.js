$(document).ready(function(){
	$('body').jKit();

	$('.parallax1 ').animate({'bottom':0}, 1000,"easeInExpo");
	$('.parallax3').delay(500).animate({'opacity':1}, 1000,"easeInOutQuint");
	$('.parallax2').delay(1000).animate({'opacity':1}, 1000,"easeInOutQuint");

	//HOME
		$('.div-conteudo').jKit('parallax', {
			'strength': '3',
			'axis': 'both' ,
			'detect':'scroll'
		});

	$('.btn-access').click(function(event) {
		$("body,html").animate({
			scrollTop: $("#startups").offset().top
		}, 2000,"easeInOutQuint");
	});

	//MENU-INTERNO
	if ($(window).width()<479) {
		$(".menu-interno li").click(function(event) {
			$(".sections").slideDown(500);
		});
	} else{
		$(".menu-interno li").click(function(event) {
			$(".sections").animate({"right":"0%"}, 1000,"easeInOutQuint");
		});
	};

	if ($(window).width()<479) {
		$(".sections .btn-section-close").click(function(event) {
			$(".sections").slideUp(500, function(){
				$(".conteudo-section").css('display', 'none');
			});
		});
	} else{
		$(".sections .btn-section-close").click(function(event) {
			$(".sections").animate({"right":"-50%"}, 1000,"easeInOutQuint",function(){
				$(".conteudo-section").css('display', 'none');
			})
		});
	};

	//STARTUP
	$("#startups .menu-interno li").click(function(event) {
		$("body,html").animate({
				scrollTop: $("#startups").offset().top
			}, 2000,"easeInOutQuint");
	});

	$("#start-01").click(function(event) {
		$("#start-cont-01").css('display', 'block');
	});

	$("#start-02").click(function(event) {
		$("#start-cont-02").css('display', 'block');
	});

	$("#start-03").click(function(event) {
		$("#start-cont-03").css('display', 'block');
	});

	$("#start-04").click(function(event) {
		$("#start-cont-04").css('display', 'block');
	});

	$("#start-05").click(function(event) {
		$("#start-cont-05").css('display', 'block');
	});
});
