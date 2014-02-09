function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "tableview.js";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    var __alloyId6 = [];
    $.__views.__alloyId7 = Ti.UI.createTableViewRow({
        id: "__alloyId7"
    });
    __alloyId6.push($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createButton({
        title: "Recupera Codigo Html",
        id: "__alloyId8"
    });
    $.__views.__alloyId7.add($.__views.__alloyId8);
    botonClick ? $.__views.__alloyId8.addEventListener("click", botonClick) : __defers["$.__views.__alloyId8!click!botonClick"] = true;
    $.__views.__alloyId9 = Ti.UI.createTableViewRow({
        id: "__alloyId9"
    });
    __alloyId6.push($.__views.__alloyId9);
    $.__views.spin = Ti.UI.createImageView({
        id: "spin"
    });
    $.__views.__alloyId9.add($.__views.spin);
    $.__views.__alloyId10 = Ti.UI.createButton({
        title: "Cortar Código",
        id: "__alloyId10"
    });
    $.__views.__alloyId9.add($.__views.__alloyId10);
    cortarCodigo ? $.__views.__alloyId10.addEventListener("click", cortarCodigo) : __defers["$.__views.__alloyId10!click!cortarCodigo"] = true;
    $.__views.tabla = Ti.UI.createTableView({
        data: __alloyId6,
        id: "tabla"
    });
    $.__views.tabla && $.addTopLevelView($.__views.tabla);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId8!click!botonClick"] && $.__views.__alloyId8.addEventListener("click", botonClick);
    __defers["$.__views.__alloyId10!click!cortarCodigo"] && $.__views.__alloyId10.addEventListener("click", cortarCodigo);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;