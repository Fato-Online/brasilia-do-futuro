//CENTRO
	function centroOlimpico() {
		var mapCanvas = document.getElementById('map');
		var mapOptions = {
			center: new google.maps.LatLng(-15.7171375, -48.0246596),
			zoom: 10,
			scrollwheel: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		var map = new google.maps.Map(mapCanvas, mapOptions)


//------------------pinCentro0101 BRAZLANDIA
			var pinCentro0101 = {lat: -15.6662363, lng: -48.1935744};
				var markerpinCentro0101 = new google.maps.Marker({
					position: pinCentro0101,
					 icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
					map: map
				});
			var contentpinCentro0101 = '<b>Centro Olímpico de Brazlândia</b>'+'<p>Bairro Vila São José, Quadra 35, Área Especial 22 – Brazlândia - DF</p>'+'<p>de 8h às 12h e de 14h às 18h, de terça à sexta-feira de 9h às 16h,  sabado e domingo. Aos fins de semana a comunidade poderá acessar todo o espaço físico para convivência e lazer, exceto as piscinas.</p>'+'<br><a href="http://www.esporte.df.gov.br/servicos/centros-olimpicos/unidade-de-brazlandia.html" target="_blank">Abrir na página</a>';

			var infopinCentro0101 = new google.maps.InfoWindow({
				content: contentpinCentro0101,
				maxWidth: 300
			});
			markerpinCentro0101.addListener('click', function() {
				infopinCentro0101.open(map, markerpinCentro0101);
			});
			markerpinCentro0101.setMap(map);

//------------------pinCentro02 CEILANDIA
			var pinCentro02 = {lat: -15.7991396, lng: -48.1225952};
				var markerpinCentro02 = new google.maps.Marker({
					position: pinCentro02,
					 icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
					map: map
				});
			var contentpinCentro02 = '<p><b>Unidade da Ceilândia</b></p>'+'<p>QNP 21 AE - Setor Habitacional Sol Nascente - Setor "P" Norte - Ceilândia - DF</p>'+'<p>de 8h às 12h e de 14h às 18h, de terça à sexta-feira de 9h às 16h,  sabado e domingo. Aos fins de semana a comunidade poderá acessar todo o espaço físico para convivência e lazer, exceto as piscinas.</p>'+'<br><a href="http://www.esporte.df.gov.br/servicos/centros-olimpicos/unidade-de-ceilandia.html" target="_blank">Abrir na página</a>';

			var infopinCentro02 = new google.maps.InfoWindow({
				content: contentpinCentro02,
				maxWidth: 300
			});
			markerpinCentro02.addListener('click', function() {
				infopinCentro02.open(map, markerpinCentro02);
			});
			markerpinCentro02.setMap(map);

//------------------pinCentro03 ESTRUTURAL
			var pinCentro03 = {lat: -15.7781274, lng: -47.9946139};
				var markerpinCentro03 = new google.maps.Marker({
					position: pinCentro03,
					 icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
					map: map
				});
			var contentpinCentro03 = '<p><b>Unidade da Estrutural</b></p>'+'<p>Scia Área Especial 02, Setor Norte. Estrutural-DF</p>'+'<p>de 8h às 12h e de 14h às 18h, de terça à sexta-feira de 8h às 12h,  sabado e domingo. Aos fins de semana a comunidade poderá acessar todo o espaço físico para convivência e lazer, exceto as piscinas.</p>'+'<br><a href="http://www.esporte.df.gov.br/servicos/centros-olimpicos/unidade-da-estrutural.html" target="_blank">Abrir na página</a>';

			var infopinCentro03 = new google.maps.InfoWindow({
				content: contentpinCentro03,
				maxWidth: 300
			});
			markerpinCentro03.addListener('click', function() {
				infopinCentro03.open(map, markerpinCentro03);
			});
			markerpinCentro03.setMap(map);

//------------------pinCentro04 GAMA
			var pinCentro04 = {lat: -16.0122668, lng: -48.0631416};
				var markerpinCentro04 = new google.maps.Marker({
					position: pinCentro04,
					 icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
					map: map
				});
			var contentpinCentro04 = '<p><b>Unidade do Gama</b></p>'+'<p>SCE, Q 55, 119 Área Especial, CEP: 72.405-00 Gama - DF</p>'+'<p>de 8h às 12h e de 14h às 18h, de terça à sexta-feira de 9h às 16h,  sabado e domingo. Aos fins de semana a comunidade poderá acessar todo o espaço físico para convivência e lazer, exceto as piscinas.</p>'+'<br><a href="http://www.esporte.df.gov.br/servicos/centros-olimpicos/unidade-do-gama.html" target="_blank">Abrir na página</a>';

			var infopinCentro04 = new google.maps.InfoWindow({
				content: contentpinCentro04,
				maxWidth: 300
			});
			markerpinCentro04.addListener('click', function() {
				infopinCentro04.open(map, markerpinCentro04);
			});
			markerpinCentro04.setMap(map);

//------------------pinCentro05 RECANTO DAS EMAS
			var pinCentro05 = {lat: -16.0159151, lng: -48.0072476};
				var markerpinCentro05 = new google.maps.Marker({
					position: pinCentro05,
					 icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
					map: map
				});
			var contentpinCentro05 = '<p><b>Unidade do Recanto das Emas</b></p>'+'<p>Avenida Ponte Alta QD 604, Área Especial, CEP: 72.600-00 Recanto das Emas - DF</p>'+'<p>de 8h às 12h e de 14h às 18h, de terça à sexta-feira de 9h às 16h,  sabado e domingo. Aos fins de semana a comunidade poderá acessar todo o espaço físico para convivência e lazer, exceto as piscinas.</p>'+'<br><a href="http://www.esporte.df.gov.br/servicos/centros-olimpicos/unidade-do-recanto-das-emas.html" target="_blank">Abrir na página</a>';

			var infopinCentro05 = new google.maps.InfoWindow({
				content: contentpinCentro05,
				maxWidth: 300
			});
			markerpinCentro05.addListener('click', function() {
				infopinCentro05.open(map, markerpinCentro05);
			});
			markerpinCentro05.setMap(map);

//------------------pinCentro06 RIACHO FUNDO
			var pinCentro06 = {lat: -15.8341688, lng: -48.1281429};
				var markerpinCentro06 = new google.maps.Marker({
					position: pinCentro06,
					 icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
					map: map
				});
			var contentpinCentro06 = '<p><b>Unidade do Riacho Fundo</b></p>'+'<p>QS 16 Área Especial F Riacho Fundo I – DF</p>'+'<p>de 8h às 12h e de 14h às 18h, de terça à sexta-feira de 9h às 16h,  sabado e domingo. Aos fins de semana a comunidade poderá acessar todo o espaço físico para convivência e lazer, exceto as piscinas.</p>'+'<br><a href="http://www.esporte.df.gov.br/servicos/centros-olimpicos/unidade-do-riacho-fundo-i.html" target="_blank">Abrir na página</a>';

			var infopinCentro06 = new google.maps.InfoWindow({
				content: contentpinCentro06,
				maxWidth: 300
			});
			markerpinCentro06.addListener('click', function() {
				infopinCentro06.open(map, markerpinCentro06);
			});
			markerpinCentro06.setMap(map);

//------------------pinCentro07 SAMAMBAIA
			var pinCentro07 = {lat: -15.8408471, lng: -48.0908154};
				var markerpinCentro07 = new google.maps.Marker({
					position: pinCentro07,
					 icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
					map: map
				});
			var contentpinCentro07 = '<p><b>Unidade de Samambaia</b></p>'+'<p>QS 119 Área Especial 01, Centro Urbano – Samambaia Sul/DF CEP: 72.300-00</p>'+'<p>de 8h às 12h e de 14h às 18h, de terça à sexta-feira de 9h às 16h,  sabado e domingo. Aos fins de semana a comunidade poderá acessar todo o espaço físico para convivência e lazer, exceto as piscinas.</p>'+'<br><a href="http://www.esporte.df.gov.br/servicos/centros-olimpicos/unidade-de-samambaia.html" target="_blank">Abrir na página</a>';

			var infopinCentro07 = new google.maps.InfoWindow({
				content: contentpinCentro07,
				maxWidth: 300
			});
			markerpinCentro07.addListener('click', function() {
				infopinCentro07.open(map, markerpinCentro07);
			});
			markerpinCentro07.setMap(map);

//------------------pinCentro08 SANTA MARIA
			var pinCentro08 = {lat: -16.0159151, lng: -48.0072476};
				var markerpinCentro08 = new google.maps.Marker({
					position: pinCentro08,
					 icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
					map: map
				});
			var contentpinCentro08 = '<p><b>Unidade de Santa Maria</b></p>'+'<p>Quadra Central 3 Área Especial 4 Santa Maria Norte- DF</p>'+'<p>de 8h às 12h e de 14h às 18h, de terça à sexta-feira de 9h às 16h,  sabado e domingo. Aos fins de semana a comunidade poderá acessar todo o espaço físico para convivência e lazer, exceto as piscinas.</p>'+'<br><a href="http://www.esporte.df.gov.br/servicos/centros-olimpicos/unidade-de-santa-maria.html" target="_blank">Abrir na página</a>';

			var infopinCentro08 = new google.maps.InfoWindow({
				content: contentpinCentro08,
				maxWidth: 300
			});
			markerpinCentro08.addListener('click', function() {
				infopinCentro08.open(map, markerpinCentro08);
			});
			markerpinCentro08.setMap(map);

//------------------pinCentro09 SAO SEBASTIAO
			var pinCentro09 = {lat: -15.8917238, lng: -47.7840427};
				var markerpinCentro09 = new google.maps.Marker({
					position: pinCentro09,
					 icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
					map: map
				});
			var contentpinCentro09 = '<p><b>Unidade de São Sebastião</b></p>'+'<p>Quadra 1 Bairro São Bartolomeu - São Sebastião - DF</p>'+'<p>de 8h às 12h e de 14h às 18h, de terça à sexta-feira de 9h às 16h,  sabado e domingo. Aos fins de semana a comunidade poderá acessar todo o espaço físico para convivência e lazer, exceto as piscinas.</p>'+'<br><a href="http://www.esporte.df.gov.br/servicos/centros-olimpicos/unidade-de-sao-sebastiao.html" target="_blank">Abrir na página</a>';

			var infopinCentro09 = new google.maps.InfoWindow({
				content: contentpinCentro09,
				maxWidth: 300
			});
			markerpinCentro09.addListener('click', function() {
				infopinCentro09.open(map, markerpinCentro09);
			});
			markerpinCentro09.setMap(map);

//------------------pinCentro10 SOBRADINHO
			var pinCentro10 = {lat: -15.6525129, lng: -47.7894729};
				var markerpinCentro10 = new google.maps.Marker({
					position: pinCentro10,
					 icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
					map: map
				});
			var contentpinCentro10 = '<p><b>Unidade de Sobradinho</b></p>'+'<p>Quadra 02 - Área Especial de 01 a 05 – Sobradinho - DF</p>'+'<p>de 8h às 12h e de 14h às 18h, de terça à sexta-feira de 9h às 16h,  sabado e domingo. Aos fins de semana a comunidade poderá acessar todo o espaço físico para convivência e lazer, exceto as piscinas.</p>'+'<br><a href="http://www.esporte.df.gov.br/servicos/centros-olimpicos/unidade-de-sobradinho.html" target="_blank">Abrir na página</a>';

			var infopinCentro10 = new google.maps.InfoWindow({
				content: contentpinCentro10,
				maxWidth: 300
			});
			markerpinCentro10.addListener('click', function() {
				infopinCentro10.open(map, markerpinCentro10);
			});
			markerpinCentro10.setMap(map);

//------------------pinCentro11 SETOR O
			var pinCentro11 = {lat: -15.8410305, lng: -48.1664532};
				var markerpinCentro11 = new google.maps.Marker({
					position: pinCentro11,
					 icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
					map: map
				});
			var contentpinCentro11 = '<p><b>Unidade do Setor O</b></p>'+'<p>QNO 09 – conjunto 01 lote 01 - Ceilândia - DF</p>'+'<p>de 8h às 12h e de 14h às 18h, de terça à sexta-feira de 9h às 16h,  sabado e domingo. Aos fins de semana a comunidade poderá acessar todo o espaço físico para convivência e lazer, exceto as piscinas.</p>'+'<br><a href="http://www.esporte.df.gov.br/servicos/centros-olimpicos/unidade-do-setor-o.html" target="_blank">Abrir na página</a>';

			var infopinCentro11 = new google.maps.InfoWindow({
				content: contentpinCentro11,
				maxWidth: 300
			});
			markerpinCentro11.addListener('click', function() {
				infopinCentro11.open(map, markerpinCentro11);
			});
			markerpinCentro11.setMap(map);
		//----FIM----//
	}

// MAPA BIKE
function mapaTurismoBike() {
		var mapCanvasBike = document.getElementById('mapBike');
		var mapOptionsBike = {
			center: new google.maps.LatLng(-15.799695, -47.774484),
			zoom: 9,
			scrollwheel: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		var mapBike = new google.maps.Map(mapCanvasBike, mapOptionsBike)

		//------------------pinBike01
			var pinBike01 = {lat: -15.9707743, lng: -47.8607262};
				var markerpinBike01 = new google.maps.Marker({
					position: pinBike01,
					 icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
					map: mapBike
				});
			var contentpinBike01 = '<b>Cachoeira Tororó</b>'+'<br><a href="https://goo.gl/maps/94ARgcdoHaB2" target="_blank">Clique aqui</a> e veja como chegar.';

			var infopinBike01 = new google.maps.InfoWindow({
				content: contentpinBike01,
				maxWidth: 300
			});
			markerpinBike01.addListener('click', function() {
				infopinBike01.open(mapBike, markerpinBike01);
			});
			markerpinBike01.setMap(mapBike);

			//------------------pinBike02
			var pinBike02 = {lat: -15.800985, lng: -48.0800911};
				var markerpinBike02 = new google.maps.Marker({
					position: pinBike02,
					 icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
					map: mapBike
				});
			var contentpinBike02 = '<b>Floresta Nacional de Brasília</b>'+'<br><a href="https://goo.gl/maps/kXh3nrNC2pB2" target="_blank">Clique aqui</a> e veja como chegar.';

			var infopinBike02 = new google.maps.InfoWindow({
				content: contentpinBike02,
				maxWidth: 300
			});
			markerpinBike02.addListener('click', function() {
				infopinBike02.open(mapBike, markerpinBike02);
			});
			markerpinBike02.setMap(mapBike);

			//------------------pinBike03
			var pinBike03 = {lat: -15.7385389, lng: -47.9258527};
				var markerpinBike03 = new google.maps.Marker({
					position: pinBike03,
					 icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
					map: mapBike
				});
			var contentpinBike03 = '<b>Parque Nacional de Brasília</b>'+'<br><a href="https://goo.gl/maps/RbeLaDLGnKQ2" target="_blank">Clique aqui</a> e veja como chegar.';

			var infopinBike03 = new google.maps.InfoWindow({
				content: contentpinBike03,
				maxWidth: 300
			});
			markerpinBike03.addListener('click', function() {
				infopinBike03.open(mapBike, markerpinBike03);
			});
			markerpinBike03.setMap(mapBike);

			//------------------pinBike04
			var pinBike04 = {lat: -15.9466779, lng: -48.3258309};
				var markerpinBike04 = new google.maps.Marker({
					position: pinBike04,
					 icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
					map: mapBike
				});
			var contentpinBike04 = '<b>Santo Antônio do Descoberto</b>'+'<br><a href="https://goo.gl/maps/cXZXwjht5cu" target="_blank">Clique aqui</a> e veja como chegar.';

			var infopinBike04 = new google.maps.InfoWindow({
				content: contentpinBike04,
				maxWidth: 300
			});
			markerpinBike04.addListener('click', function() {
				infopinBike04.open(mapBike, markerpinBike04);
			});
			markerpinBike04.setMap(mapBike);

			//------------------pinBike05
			var pinBike05 = {lat: -15.54554, lng: -47.3530464};
				var markerpinBike05 = new google.maps.Marker({
					position: pinBike05,
					 icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
					map: mapBike
				});
			var contentpinBike05 = '<b>Formosa</b>'+'<br><a href="https://goo.gl/maps/nAEswm64tfx" target="_blank">Clique aqui</a> e veja como chegar.';

			var infopinBike05 = new google.maps.InfoWindow({
				content: contentpinBike05,
				maxWidth: 300
			});
			markerpinBike05.addListener('click', function() {
				infopinBike05.open(mapBike, markerpinBike05);
			});
			markerpinBike05.setMap(mapBike);
}
