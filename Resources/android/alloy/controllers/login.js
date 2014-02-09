function Controller() {
    function listarUsuarios() {
        var listaUsuarios = Alloy.createController("listaUsuarios").getView();
        listaUsuarios.navBarHidden = true;
        listaUsuarios.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "login";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.loginView = Ti.UI.createWindow({
        id: "loginView"
    });
    $.__views.loginView && $.addTopLevelView($.__views.loginView);
    $.__views.__alloyId7 = Ti.UI.createView({
        backgroundColor: "#1176d2",
        layout: "vertical",
        id: "__alloyId7"
    });
    $.__views.loginView.add($.__views.__alloyId7);
    $.__views.logo = Ti.UI.createImageView({
        width: 150,
        image: "/logo.png",
        id: "logo"
    });
    $.__views.__alloyId7.add($.__views.logo);
    $.__views.__alloyId8 = Ti.UI.createLabel({
        color: "white",
        text: "Usuario SAE*",
        id: "__alloyId8"
    });
    $.__views.__alloyId7.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createTextField({
        width: 300,
        backgroundColor: "white",
        height: 40,
        color: "#1176d2",
        paddingLeft: 10,
        paddingRight: 10,
        id: "__alloyId9"
    });
    $.__views.__alloyId7.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createLabel({
        id: "__alloyId10"
    });
    $.__views.__alloyId7.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createLabel({
        color: "white",
        text: "Contraseña SAE*",
        id: "__alloyId11"
    });
    $.__views.__alloyId7.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createTextField({
        width: 300,
        backgroundColor: "white",
        height: 40,
        color: "#1176d2",
        paddingLeft: 10,
        paddingRight: 10,
        id: "__alloyId12"
    });
    $.__views.__alloyId7.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createLabel({
        id: "__alloyId13"
    });
    $.__views.__alloyId7.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createLabel({
        color: "white",
        text: "Email",
        id: "__alloyId14"
    });
    $.__views.__alloyId7.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createTextField({
        width: 300,
        backgroundColor: "white",
        height: 40,
        color: "#1176d2",
        paddingLeft: 10,
        paddingRight: 10,
        id: "__alloyId15"
    });
    $.__views.__alloyId7.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        id: "__alloyId16"
    });
    $.__views.__alloyId7.add($.__views.__alloyId16);
    $.__views.loginButton = Ti.UI.createButton({
        backgroundColor: "#381775",
        width: 200,
        height: 40,
        color: "white",
        title: "Guardar",
        id: "loginButton"
    });
    $.__views.__alloyId7.add($.__views.loginButton);
    listarUsuarios ? $.__views.loginButton.addEventListener("click", listarUsuarios) : __defers["$.__views.loginButton!click!listarUsuarios"] = true;
    $.__views.__alloyId17 = Ti.UI.createLabel({
        id: "__alloyId17"
    });
    $.__views.__alloyId7.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createLabel({
        text: "*SAE= Servicio Andaluz de Empleo",
        color: "white",
        id: "__alloyId18"
    });
    $.__views.__alloyId7.add($.__views.__alloyId18);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.loginButton!click!listarUsuarios"] && $.__views.loginButton.addEventListener("click", listarUsuarios);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;