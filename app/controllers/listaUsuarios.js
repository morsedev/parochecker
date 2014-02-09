var args = arguments[0] || {};

function doBack(){
	var loginView = Alloy.createController("login").getView();
	loginView.navBarHidden = true;
	loginView.open();
}
