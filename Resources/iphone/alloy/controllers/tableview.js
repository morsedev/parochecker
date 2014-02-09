function Controller() {
    function botonClick() {
        var url = "https://ws054.juntadeandalucia.es/autenticacion/login?btn=2";
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                codigoHtml = this.responseText;
                alert("exito");
            },
            onerror: function(e) {
                Ti.API.debug(e.error);
                alert("error");
            },
            timeout: 5e3
        });
        client.onreadystatechange = function() {};
        client.open("GET", url);
        client.send();
    }
    function cortarCodigo() {
        if (null !== codigoHtml || "" !== codigoHtml) {
            codigoCortado = codigoHtml.substring(codigoHtml.indexOf('<label for="codigoPregunta" class="text_topic">'), codigoHtml.indexOf('<div id="form-3-cols-right">'));
            Ti.API.info("Indices substring: " + codigoHtml.indexOf('<label for="codigoPregunta" class="text_topic">') + ", " + codigoHtml.indexOf('<div id="form-3-cols-right">'));
            codigoCortado = codigoCortado.substring(codigoCortado.indexOf("<p>") + 3, codigoCortado.indexOf('name="keyQuestion"'));
            $.pregunta.text = codigoCortado;
            abrirVentana();
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "tableview";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    var __alloyId11 = [];
    $.__views.__alloyId12 = Ti.UI.createTableViewRow({
        id: "__alloyId12"
    });
    __alloyId11.push($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createButton({
        title: "Recupera Codigo Html",
        id: "__alloyId13"
    });
    $.__views.__alloyId12.add($.__views.__alloyId13);
    botonClick ? $.__views.__alloyId13.addEventListener("click", botonClick) : __defers["$.__views.__alloyId13!click!botonClick"] = true;
    $.__views.__alloyId14 = Ti.UI.createTableViewRow({
        id: "__alloyId14"
    });
    __alloyId11.push($.__views.__alloyId14);
    $.__views.spin = Ti.UI.createImageView({
        id: "spin"
    });
    $.__views.__alloyId14.add($.__views.spin);
    $.__views.__alloyId15 = Ti.UI.createButton({
        title: "Cortar Código",
        id: "__alloyId15"
    });
    $.__views.__alloyId14.add($.__views.__alloyId15);
    cortarCodigo ? $.__views.__alloyId15.addEventListener("click", cortarCodigo) : __defers["$.__views.__alloyId15!click!cortarCodigo"] = true;
    $.__views.tabla = Ti.UI.createTableView({
        data: __alloyId11,
        id: "tabla"
    });
    $.__views.tabla && $.addTopLevelView($.__views.tabla);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.__alloyId13!click!botonClick"] && $.__views.__alloyId13.addEventListener("click", botonClick);
    __defers["$.__views.__alloyId15!click!cortarCodigo"] && $.__views.__alloyId15.addEventListener("click", cortarCodigo);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;