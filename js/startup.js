$(document).ready(function(){

	if ($(window).width()<479) {
		$('#div-conteudo1').jKit('parallax', {
			'strength': '1',
			'axis': 'both' ,
			'detect':'scroll'
		});

	} else{
		$('#div-conteudo1').jKit('parallax', {
			'strength': '1',
			'axis': 'both' ,
			'scope':'global'
		});
	};

	// START UPS
	$('.smartphone').animate({'bottom':0}, 1000,"easeInOutQuint");
	$('.parallax3').delay(500).animate({'opacity':1}, 1000,"easeInOutQuint");

	//MENU
	$(".menu-interno li").click(function(event) {
		$(".sections").animate({"margin-right":"50%"}, 1000,"easeInOutQuint");
	});

	$(".sections .btn-section-close").click(function(event) {
		$(".sections").animate({"margin-right":"-50%"}, 1000,"easeInOutQuint")
	});

});
