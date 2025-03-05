odoo.define("custom_pos.SampleButton",function(require){
"use strict";
    const PosComponent = require("point_of_sale.PosComponent");
    const ProductScreen = require("point_of_sale.ProductScreen");
    const Registries = require("point_of_sale.Registries");


    class JSSampleButton extends PosComponent{

    }


//    creating the temp for buttonm

    JSSampleButton.template = "JSSampleButton";
        ProductScreen.addControlButton({
        component : JSSampleButton,
        position : ["before","OrderlineCustomerNoteButton"],
    })


//    now we register this temp in

    Registries.Component.add(JSSampleButton);


    return JSSampleButton
});