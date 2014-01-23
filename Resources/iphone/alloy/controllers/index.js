function Controller() {
    function volver() {
        $.index.open();
        $.preg.hide();
    }
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
    function abrirVentana() {
        $.preg.open();
        $.preg.show();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "#000",
        layout: "vertical",
        title: "Tab 1",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    var __alloyId0 = [];
    $.__views.__alloyId1 = Ti.UI.createTableViewRow({
        id: "__alloyId1"
    });
    __alloyId0.push($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createButton({
        title: "Recupera Codigo Html",
        id: "__alloyId2"
    });
    $.__views.__alloyId1.add($.__views.__alloyId2);
    botonClick ? $.__views.__alloyId2.addEventListener("click", botonClick) : __defers["$.__views.__alloyId2!click!botonClick"] = true;
    $.__views.__alloyId3 = Ti.UI.createTableViewRow({
        id: "__alloyId3"
    });
    __alloyId0.push($.__views.__alloyId3);
    $.__views.spin = Ti.UI.createImageView({
        id: "spin"
    });
    $.__views.__alloyId3.add($.__views.spin);
    $.__views.__alloyId4 = Ti.UI.createButton({
        title: "Cortar Código",
        id: "__alloyId4"
    });
    $.__views.__alloyId3.add($.__views.__alloyId4);
    cortarCodigo ? $.__views.__alloyId4.addEventListener("click", cortarCodigo) : __defers["$.__views.__alloyId4!click!cortarCodigo"] = true;
    $.__views.tabla = Ti.UI.createTableView({
        data: __alloyId0,
        id: "tabla"
    });
    $.__views.index.add($.__views.tabla);
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
    var codigoHtml;
    var codigoCortado;
    $.index.open();
    __defers["$.__views.__alloyId2!click!botonClick"] && $.__views.__alloyId2.addEventListener("click", botonClick);
    __defers["$.__views.__alloyId4!click!cortarCodigo"] && $.__views.__alloyId4.addEventListener("click", cortarCodigo);
    __defers["$.__views.__alloyId5!click!volver"] && $.__views.__alloyId5.addEventListener("click", volver);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;