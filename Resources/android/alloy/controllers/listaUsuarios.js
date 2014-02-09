function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "listaUsuarios";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
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
        id: "header"
    });
    $.__views.listaUsuarios.add($.__views.header);
    $.__views.title = Ti.UI.createLabel({
        text: "Usuarios",
        id: "title"
    });
    $.__views.header.add($.__views.title);
    $.__views.__alloyId0 = Ti.UI.createView({
        id: "__alloyId0"
    });
    $.__views.header.add($.__views.__alloyId0);
    $.__views.addView = Ti.UI.createView({
        id: "addView"
    });
    $.__views.header.add($.__views.addView);
    $.__views.addImage = Ti.UI.createImageView({
        width: "20dp",
        id: "addImage"
    });
    $.__views.addView.add($.__views.addImage);
    $.__views.__alloyId1 = Ti.UI.createView({
        id: "__alloyId1"
    });
    $.__views.listaUsuarios.add($.__views.__alloyId1);
    var __alloyId2 = [];
    $.__views.__alloyId3 = Ti.UI.createTableViewRow({
        height: "50dp",
        layout: "horizontal",
        id: "__alloyId3"
    });
    __alloyId2.push($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        text: "Texto",
        id: "__alloyId4"
    });
    $.__views.__alloyId3.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createImageView({
        width: "20dp",
        image: "/logo.png",
        id: "__alloyId5"
    });
    $.__views.__alloyId3.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createTableViewRow({
        height: "50dp",
        id: "__alloyId6"
    });
    __alloyId2.push($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        text: "Texto",
        id: "__alloyId7"
    });
    $.__views.__alloyId6.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createTableViewRow({
        height: "50dp",
        id: "__alloyId8"
    });
    __alloyId2.push($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createLabel({
        text: "Texto",
        id: "__alloyId9"
    });
    $.__views.__alloyId8.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createTableViewRow({
        height: "50dp",
        id: "__alloyId10"
    });
    __alloyId2.push($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createLabel({
        text: "Texto",
        id: "__alloyId11"
    });
    $.__views.__alloyId10.add($.__views.__alloyId11);
    $.__views.lista = Ti.UI.createTableView({
        data: __alloyId2,
        id: "lista",
        layout: "vertical"
    });
    $.__views.__alloyId1.add($.__views.lista);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;