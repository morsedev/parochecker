function Controller() {
    function volver() {
        $.index.open();
        $.preg.hide();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createiPhone({
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId1 = Ti.UI.createWindow({
        backgroundColor: "#000",
        layout: "vertical",
        id: "__alloyId1"
    });
    $.__views.__alloyId2 = Alloy.createController("tableview", {
        id: "__alloyId2",
        __parentSymbol: $.__views.__alloyId1
    });
    $.__views.__alloyId2.setParent($.__views.__alloyId1);
    $.__views.__alloyId0 = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.__alloyId1,
        id: "__alloyId0"
    });
    $.__views.index.add($.__views.__alloyId0);
    $.__views.__alloyId3 = Ti.UI.createWindow({
        backgroundColor: "#000",
        layout: "vertical",
        title: "Tab 1",
        id: "__alloyId3"
    });
    $.__views.__alloyId3 && $.addTopLevelView($.__views.__alloyId3);
    $.__views.__alloyId4 = Alloy.createController("tableview", {
        id: "__alloyId4",
        __parentSymbol: $.__views.__alloyId3
    });
    $.__views.__alloyId4.setParent($.__views.__alloyId3);
    $.__views.preg = Ti.UI.createWindow({
        backgroundColor: "#000",
        layout: "vertical",
        title: "Pregunta",
        id: "preg"
    });
    $.__views.preg && $.addTopLevelView($.__views.preg);
    $.__views.__alloyId5 = Ti.UI.createButton({
        title: "Volver",
        id: "__alloyId5"
    });
    $.__views.preg.add($.__views.__alloyId5);
    volver ? $.__views.__alloyId5.addEventListener("click", volver) : __defers["$.__views.__alloyId5!click!volver"] = true;
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
    __defers["$.__views.__alloyId5!click!volver"] && $.__views.__alloyId5.addEventListener("click", volver);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;