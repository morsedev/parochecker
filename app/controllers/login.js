var args = arguments[0] || {};
function listarUsuarios(){
	Alloy.createController("listaUsuarios").getView().open();;
}