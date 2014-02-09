function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.preg = Ti.UI.createWindow({
        backgroundColor: "#000",
        layout: "vertical",
        title: "Pregunta",
        id: "preg"
    });
    $.__views.preg && $.addTopLevelView($.__views.preg);
    $.__views.__alloyId0 = Ti.UI.createButton({
        title: "Volver",
        id: "__alloyId0"
    });
    $.__views.preg.add($.__views.__alloyId0);
    $.__views.pregunta = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "white",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue",
            color: "black"
        },
        textAlign: "center",
        id: "pregunta"
    });
    $.__views.preg.add($.__views.pregunta);
    $.__views.respuesta = Ti.UI.createTextField({
        size: Ti.UI.SIZE,
        width: "200px",
        height: Ti.UI.SIZE,
        backgroundColor: "white",
        font: {
            fontSize: 20,
            color: "black"
        },
        textAlign: "center",
        id: "respuesta"
    });
    $.__views.preg.add($.__views.respuesta);
    $.__views.valor = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "white",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue",
            color: "black"
        },
        textAlign: "center",
        id: "valor"
    });
    $.__views.preg.add($.__views.valor);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;