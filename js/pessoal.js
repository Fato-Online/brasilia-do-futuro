$(document).ready(function(){
	$('body').jKit();

	$('.parallax1 ').animate({'bottom':0}, 1000,"easeInExpo");
	$('.parallax3').delay(500).animate({'opacity':1}, 1000,"easeInOutQuint");
	$('.parallax2').delay(1000).animate({'opacity':1}, 1000,"easeInOutQuint");

	//SOCIAL
	$('.nav-social li').on({
		mouseenter:function(){
			$(this).animate({width:130}, 1000,"easeInOutQuint", function(){
				$("p",this).show("fast");
			})
		},
		mouseleave:function(){
			$(this).stop();
			$("p",this).hide("fast");
			$(this).animate({width:30}, 500,"linear")
		}
	})

	//HOME
		$('.div-conteudo').jKit('parallax', {
			'strength': '3',
			'axis': 'both' ,
			'detect':'scroll'
		});

	$('.btn-access').click(function(event) {
		$("body,html").animate({
			scrollTop: $("#jovem").offset().top
		}, 2000,"easeInOutQuint");
	});

	// BT PROXIMO
	$('#proximo-01').click(function(event) {
		$("body,html").animate({
			scrollTop: $("#herois").offset().top
		}, 2000,"easeInOutQuint");
	});

	$('#proximo-02').click(function(event) {
		$("body,html").animate({
			scrollTop: $("#atletas").offset().top
		}, 2000,"easeInOutQuint");
	});

	$('#proximo-03').click(function(event) {
		$("body,html").animate({
			scrollTop: $("#personagens").offset().top
		}, 2000,"easeInOutQuint");
	});

	$('#proximo-04').click(function(event) {
		$("body,html").animate({
			scrollTop: $("#turismo").offset().top
		}, 2000,"easeInOutQuint");
	});

	$('#proximo-05').click(function(event) {
		$("body,html").animate({
			scrollTop: $("#jovem").offset().top
		}, 2000,"easeInOutQuint");
	});

	$('.btn-top').click(function(event) {
		$("body,html").animate({
			scrollTop: $("body").offset().top
		}, 2000,"easeInOutQuint");
	});

	//MENU-INTERNO
	if ($(window).width()<479) {
		$(".menu-interno li").click(function(event) {
			$(".sections").slideDown(500);
		});
	} else{
		$(".menu-interno li").click(function(event) {
			if ($(".sections").css('right') == '0px') {
				$(".sections").animate({"right": '-50%'}, 1000,"easeInOutQuint", function(){
					$(".conteudo-section").css('display', 'none');
				});
				$(".sections").animate({"right": '0px'}, 1000,"easeInOutQuint");

			} else{
				$(".sections").animate({"right": '0px'}, 1000,"easeInOutQuint");
			};
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

	$(document).on('keyup',function(evt) {
		if (evt.keyCode == 27) {
			 $(".sections").animate({"right":"-50%"}, 1000,"easeInOutQuint",function(){
				$(".conteudo-section").css('display', 'none');
			})
		}
	});

	//STARTUP
	$("#startups .menu-interno li").click(function(event) {
		if ($(window).width()<479) {

		} else{
			$("body,html").animate({
					scrollTop: $("#startups").offset().top
				}, 1000,"easeInOutQuint");
		};
	});

	$("#start-01").click(function(event) {
		setTimeout(function(){
			$("#start-cont-01").slideDown(400);
		},1000);
	});

	$("#start-02").click(function(event) {
		setTimeout(function(){
			$("#start-cont-02").slideDown(400);
		},1000);
	});

	$("#start-03").click(function(event) {
		setTimeout(function(){
			$("#start-cont-03").slideDown(400);
		},1000);
	});

	$("#start-04").click(function(event) {
		setTimeout(function(){
			$("#start-cont-04").slideDown(400);
		},1000);
	});

	$("#start-05").click(function(event) {
		setTimeout(function(){
			$("#start-cont-05").slideDown(400);
		},1000);
	});

	// HEROIS
	$("#herois .menu-interno li").click(function(event) {
		if ($(window).width()<479) {

		} else{
			$("body,html").animate({
					scrollTop: $("#herois").offset().top
				}, 1000,"easeInOutQuint");
		};
	});

	$("#herois-01").click(function(event) {
		setTimeout(function(){
			$("#herois-cont-01").slideDown(400);
		},1000);
	});

	$("#herois-02").click(function(event) {
		setTimeout(function(){
			$("#herois-cont-02").slideDown(400);
		},1000);
	});

	//ATLETAS
	$("#atletas .menu-interno li").click(function(event) {
		if ($(window).width()<479) {

		} else{
			$("body,html").animate({
					scrollTop: $("#atletas").offset().top
				}, 1000,"easeInOutQuint");
		};
	});

	$("#atletas-01").click(function(event) {
		setTimeout(function(){
			$("#atletas-cont-01").slideDown(400);
		},1000);
	});

	$("#atletas-02").click(function(event) {
		setTimeout(function(){
			$("#atletas-cont-02").slideDown(400);
		},1000);
	});

	$("#atletas-03").click(function(event) {
		setTimeout(function(){
			$("#atletas-cont-03").slideDown(400,function(){
				centroOlimpico();
			});
		},1000);
	});

	//PERSONAGENS
	$("#personagens .menu-interno li").click(function(event) {
		if ($(window).width()<479) {

		} else{
			$("body,html").animate({
					scrollTop: $("#personagens").offset().top
				}, 1000,"easeInOutQuint");
		};
	});

	$("#personagens-01").click(function(event) {
		setTimeout(function(){
			$("#personagens-cont-01").slideDown(400);
		},1000);
	});

	$("#personagens-02").click(function(event) {
		setTimeout(function(){
			$("#personagens-cont-02").slideDown(400);
		},1000);
	});

	// TURISMO
	$("#turismo .menu-interno li").click(function(event) {
		if ($(window).width()<479) {

		} else{
			$("body,html").animate({
					scrollTop: $("#turismo").offset().top
				}, 1000,"easeInOutQuint");
		};
	});

	$("#turismo-01").click(function(event) {
		setTimeout(function(){
			$("#turismo-cont-01").slideDown(400);
		},1000);
	});
	$("#turismo-01").one( 'click', function(event) {
		setTimeout(function(){
			$('.bxslider').bxSlider({
						adaptiveHeight: true
					});
		},2000)
	});

	$("#turismo-02").click(function(event) {
		setTimeout(function(){
			$("#turismo-cont-02").slideDown(400, function(){
				mapaTurismoBike();
			});
		},1000);
	});
	$("#turismo-02").one( 'click', function(event) {
		setTimeout(function(){
			$('.galeriaBike').bxSlider({
						adaptiveHeight: true
					});
		},2000)
	});

	// GALERIA
		//FOTOS
		var fotos = [
         		"https://raw.githubusercontent.com/Fato-Online/brasilia-do-futuro2/develop/images/photo/01.jpg",
         		"https://raw.githubusercontent.com/Fato-Online/brasilia-do-futuro2/develop/images/photo/02.jpg",
         		"https://raw.githubusercontent.com/Fato-Online/brasilia-do-futuro2/develop/images/photo/03.jpg",
         		"https://raw.githubusercontent.com/Fato-Online/brasilia-do-futuro2/develop/images/photo/04.jpg",
         		"https://raw.githubusercontent.com/Fato-Online/brasilia-do-futuro2/develop/images/photo/05.jpg",
         		"https://raw.githubusercontent.com/Fato-Online/brasilia-do-futuro2/develop/images/photo/06.jpg",
         		"https://raw.githubusercontent.com/Fato-Online/brasilia-do-futuro2/develop/images/photo/07.jpg",
         		"https://raw.githubusercontent.com/Fato-Online/brasilia-do-futuro2/develop/images/photo/08.jpg",
         		"https://raw.githubusercontent.com/Fato-Online/brasilia-do-futuro2/develop/images/photo/09.jpg",
         		"https://raw.githubusercontent.com/Fato-Online/brasilia-do-futuro2/develop/images/photo/10.jpg",
         		"https://raw.githubusercontent.com/Fato-Online/brasilia-do-futuro2/develop/images/photo/11.jpg",
         		"https://raw.githubusercontent.com/Fato-Online/brasilia-do-futuro2/develop/images/photo/12.jpg",
         		"https://raw.githubusercontent.com/Fato-Online/brasilia-do-futuro2/develop/images/photo/13.jpg",
         		"https://raw.githubusercontent.com/Fato-Online/brasilia-do-futuro2/develop/images/photo/14.jpg",
         		"https://raw.githubusercontent.com/Fato-Online/brasilia-do-futuro2/develop/images/photo/15.jpg",
         		"https://raw.githubusercontent.com/Fato-Online/brasilia-do-futuro2/develop/images/photo/16.jpg",
         		"https://raw.githubusercontent.com/Fato-Online/brasilia-do-futuro2/develop/images/photo/17.jpg",
         		"https://raw.githubusercontent.com/Fato-Online/brasilia-do-futuro2/develop/images/photo/18.jpg",
         		"https://raw.githubusercontent.com/Fato-Online/brasilia-do-futuro2/develop/images/photo/19.jpg"
		]

		var imgs = '';
		for( foto in fotos) {
				imgs += "<li>"+ "<img src=" + fotos[foto] + ">" + "</li>";
		}

		$(".bxslider").html(imgs);

		//BIKES
		var fotosBike = [
			"https://raw.githubusercontent.com/Fato-Online/brasilia-do-futuro2/develop/images/photo/01bike.jpg",
			"https://raw.githubusercontent.com/Fato-Online/brasilia-do-futuro2/develop/images/photo/02bike.jpg",
			"https://raw.githubusercontent.com/Fato-Online/brasilia-do-futuro2/develop/images/photo/03bike.jpg",
			"https://raw.githubusercontent.com/Fato-Online/brasilia-do-futuro2/develop/images/photo/04bike.jpg",
			"https://raw.githubusercontent.com/Fato-Online/brasilia-do-futuro2/develop/images/photo/05bike.jpg"
		]

		var imgsBikes = '';
		for(fotoBike in fotosBike){
			imgsBikes += "<li>"+ "<img src=" + fotosBike[fotoBike] + ">" + "</li>";
		}
		$(".galeriaBike").html(imgsBikes);

	// JOVEM
	$("#jovem .menu-interno li").click(function(event) {
		if ($(window).width()<479) {

		} else{
			$("body,html").animate({
					scrollTop: $("#jovem").offset().top
				}, 1000,"easeInOutQuint");
		};
	});

	$("#jovem-01").click(function(event) {
		setTimeout(function(){
			$("#jovem-cont-01").slideDown(400);
		},1000);
	});
});
