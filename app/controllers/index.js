function loginAlert(){
	alert("Segunda Pantalla");
}

function listarUsuarios(){
	$.listaUsuarios.open();
}


function doClick(e) {
    
    var network = Titanium.Network;
    var line = network.getOnline();
    var ti = Ti.API;
        
    if(line == '1'){
    	//alert("Hay conexión a internet");
    	var loginView = Alloy.createController("login").getView();
    	loginView.navBarHidden = true;
    	loginView.open();
    	//loginAlert();
    }else{
    	alert("No hay conexión a internet");
    }
    
}

//$.loginView.open();
$.index.navBarHidden = true;
$.index.open();
