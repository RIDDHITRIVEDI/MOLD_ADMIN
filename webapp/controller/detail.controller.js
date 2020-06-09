sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function (Controller, MessageBox) {
	"use strict";

	return Controller.extend("hunterDoublas.HunterDoublas.controller.detail", {

		onInit: function () {
			this.oRouter = this.getOwnerComponent().getRouter();
			this.oModel = this.getOwnerComponent().getModel();

			this.oRouter.getRoute("detail").attachPatternMatched(this._onProductMatched, this);
			//	this.oRouter.getRoute("detail").attachPatternMatched(this._onProductMatched, this);
			//	this.oRouter.getRoute("detailDetail").attachPatternMatched(this._onProductMatched, this);
		},
		_onProductMatched: function (oEvent) {
			this._product = oEvent.getParameter("arguments").product || this._product || "0";
			this.getView().bindElement({
				path: "/results/" + this._product,
				model: "products"
			});
		},

		onListItemPress: function (oEvent) {

			var oNextUIState = this.getOwnerComponent().getHelper().getNextUIState(2),
				productPath = oEvent.getSource().getBindingContext("Operations").getPath(),
				product = productPath.split("/").slice(-1).pop();
				this.oRouter.navTo("OpenDeficiencies", {
					layout: oNextUIState.layout,
					product: product,
					Value : product
				}, true);
	
		}
	});

});