sap.ui.define([
    "./BaseController",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageToast) {
        "use strict";

        return Controller.extend("com.ui5tooling.controller.MainView", {
            onInit: function () {

            },
            onPressMyButton:function(oEvent){
                MessageToast.show("Hello World");
            }
        });
    });
