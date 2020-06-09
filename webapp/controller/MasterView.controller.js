sap.ui.define([
"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	'sap/ui/model/Sorter',
	'sap/m/MessageBox'
], function (JSONModel, Controller, Filter, FilterOperator, Sorter, MessageBox) {
	"use strict";

	return Controller.extend("hunterDoublas.HunterDoublas.controller.MasterView", {
		onInit: function () {
				this.oRouter = this.getOwnerComponent().getRouter();
		
		},
		onListItemPress: function (oEvent){
			var oNextUIState = this.getOwnerComponent().getHelper().getNextUIState(1),
				productPath = oEvent.getSource().getBindingContext("products").getPath(),
				product = productPath.split("/").slice(-1).pop();
				this.oRouter.navTo("detail", {layout: oNextUIState.layout, product: product});

		}
	});
});