function Controller() {
    function doBack() {
        var loginView = Alloy.createController("login").getView();
        loginView.navBarHidden = true;
        $.listaUsuarios.hide();
        Ti.API.log("entra");
        loginView.show();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "listaUsuarios";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.listaUsuarios = Ti.UI.createWindow({
        id: "listaUsuarios",
        layout: "vertical"
    });
    $.__views.listaUsuarios && $.addTopLevelView($.__views.listaUsuarios);
    $.__views.header = Ti.UI.createView({
        top: Alloy.Globals.top,
        height: "50dp",
        width: Ti.UI.FILL,
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "0%"
            },
            endPoint: {
                x: "0%",
                y: "100%"
            },
            colors: [ {
                color: "#117",
                offset: 0
            }, {
                color: "#1176d2",
                offset: 1
            } ]
        },
        id: "header",
        layout: "horizontal"
    });
    $.__views.listaUsuarios.add($.__views.header);
    $.__views.__alloyId0 = Ti.UI.createButton({
        title: "Atras",
        id: "__alloyId0"
    });
    $.__views.header.add($.__views.__alloyId0);
    doBack ? $.__views.__alloyId0.addEventListener("click", doBack) : __defers["$.__views.__alloyId0!click!doBack"] = true;
    $.__views.title = Ti.UI.createLabel({
        verticalAlign: "auto",
        text: "Usuarios",
        id: "title",
        textAlign: "center"
    });
    $.__views.header.add($.__views.title);
    $.__views.__alloyId1 = Ti.UI.createView({
        id: "__alloyId1"
    });
    $.__views.header.add($.__views.__alloyId1);
    $.__views.addView = Ti.UI.createView({
        id: "addView"
    });
    $.__views.header.add($.__views.addView);
    $.__views.addImage = Ti.UI.createImageView({
        width: "40dp",
        verticalAlign: "auto",
        id: "addImage"
    });
    $.__views.addView.add($.__views.addImage);
    $.__views.__alloyId2 = Ti.UI.createView({
        id: "__alloyId2"
    });
    $.__views.listaUsuarios.add($.__views.__alloyId2);
    var __alloyId3 = [];
    $.__views.__alloyId4 = Ti.UI.createTableViewRow({
        height: "50dp",
        layout: "horizontal",
        id: "__alloyId4"
    });
    __alloyId3.push($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createImageView({
        width: "40dp",
        verticalAlign: "auto",
        image: "/logo.png",
        id: "__alloyId5"
    });
    $.__views.__alloyId4.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createLabel({
        verticalAlign: "auto",
        text: "Texto",
        id: "__alloyId6"
    });
    $.__views.__alloyId4.add($.__views.__alloyId6);
    $.__views.lista = Ti.UI.createTableView({
        data: __alloyId3,
        id: "lista",
        layout: "vertical"
    });
    $.__views.__alloyId2.add($.__views.lista);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.__alloyId0!click!doBack"] && $.__views.__alloyId0.addEventListener("click", doBack);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;