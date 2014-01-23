var codigoHtml;
var codigoCortado;

function volver(){
	$.index.open();
	
	$.preg.hide();
}


function botonClick(e) {
	var url = "https://ws054.juntadeandalucia.es/autenticacion/login?btn=2";
	var client = Ti.Network.createHTTPClient({

		// function called when the response data is available
		onload : function(e) {
			codigoHtml = this.responseText;
			alert("exito");
		},
		// function called when an error occurs, including a timeout
		onerror : function(e) {
			Ti.API.debug(e.error);
			alert('error');
		},
		timeout : 5000 // in milliseconds
	});
	client.onreadystatechange = function(){
		
	};
	// Prepare the connection.
	client.open("GET", url);
	// Send the request.
	client.send();
}

function cortarCodigo(e) {
	if (codigoHtml !== null || codigoHtml !== "") {
		codigoCortado = codigoHtml.substring(codigoHtml.indexOf('<label for="codigoPregunta" class="text_topic">'), codigoHtml.indexOf('<div id="form-3-cols-right">'));
		Ti.API.info("Indices substring: " + codigoHtml.indexOf('<label for="codigoPregunta" class="text_topic">') + ", " + codigoHtml.indexOf('<div id="form-3-cols-right">'));
		codigoCortado = codigoCortado.substring(codigoCortado.indexOf('<p>') + 3, codigoCortado.indexOf('name="keyQuestion"'));	
		//alert(codigoCortado);
		$.pregunta.text = codigoCortado;
		abrirVentana();

	}
}

function abrirVentana(e) {
	$.preg.open();
	$.preg.show();
}

$.index.open();