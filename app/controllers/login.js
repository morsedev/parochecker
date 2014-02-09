var args = arguments[0] || {};
function listarUsuarios(){
	var listaUsuarios = Alloy.createController("listaUsuarios").getView();
	listaUsuarios.navBarHidden = true;
	listaUsuarios.open();
}