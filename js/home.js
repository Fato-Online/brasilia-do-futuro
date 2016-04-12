$(document).ready(function(){

	var sobeHome = function(){
		$(".btn-success").animate({"opacity":0}, 1000)
		$('.anima-01').animate({'top':-800}, 1000,"easeInExpo");
		$('.anima-02').delay(100).animate({'top':-800}, 1000,"easeInExpo");
		$('.parallax3').delay(200).animate({'top':300}, 1000,"easeInExpo");
	}

	if ($(window).width()<479) {
		$('#div-conteudo').jKit('parallax', {
			'strength': '1',
			'axis': 'both' ,
			'detect':'scroll'
		});

	} else{
		$('#div-conteudo').jKit('parallax', {
			'strength': '1',
			'axis': 'both' ,
			'scope':'global'
		});
	};

	$('.btn-access').click(function(event) {
		$(".menu-hotsite").animate({"right":"-40%"}, 1000,"easeInOutQuint");
		$('.hamburger-menu').animate({"right":"5%"}, 1000,"easeInOutQuint");
		sobeHome();
		setTimeout(function(){ $('.content-all').load('bsb-futuro-startups.html'); }, 1500);
	});

	//HOME
	$('.parallax1 ').animate({'bottom':0}, 1000,"easeInExpo");
	$('.parallax3').delay(500).animate({'opacity':1}, 1000,"easeInOutQuint");
	$('.parallax2').delay(1000).animate({'opacity':1}, 1000,"easeInOutQuint");

});
