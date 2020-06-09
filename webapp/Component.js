sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"hunterDoublas/HunterDoublas/model/models",
		"sap/ui/model/json/JSONModel",
	"sap/f/FlexibleColumnLayoutSemanticHelper",
		"jquery.sap.global",
			'sap/m/MessageBox'

], function (UIComponent, Device, models,JSONModel, FlexibleColumnLayoutSemanticHelper, jQuery, MessageBox) {
	"use strict";

	var Component = UIComponent.extend("hunterDoublas.HunterDoublas.Component", {

		metadata: {
			manifest: "json"
		},

		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
			
			var oModel = new sap.ui.model.json.JSONModel();
		    this.setModel(oModel);

		
		
		var data = {
			results: [{
				first: "Rachana",
				Last: "RachanaLast"
			}, {
				first: "Vaibhav",
				Last: "VaibhavLast"
			}, {
				first: "Anoop",
				Last: "VaibhavLast"
			}, {
				first: "Jk",
				Last: "VaibhavLast"
			}, {
				first: "Pachu",
				Last: "VaibhavLast"
			}, {
				first: "ABS",
				Last: "VaibhavLast"
			}, {
				first: "Rachana",
				Last: "RachanaLast"
			}, {
				first: "Vaibhav",
				Last: "VaibhavLast"
			}, {
				first: "Anoop",
				Last: "VaibhavLast"
			}, {
				first: "Jk",
				Last: "VaibhavLast"
			}, {
				first: "Pachu",
				Last: "VaibhavLast"
			}, {
				first: "ABS",
				Last: "VaibhavLast"
			}, {
				first: "Rachana",
				Last: "RachanaLast"
			}, {
				first: "Vaibhav",
				Last: "VaibhavLast"
			}, {
				first: "Anoop",
				Last: "VaibhavLast"
			}, {
				first: "Jk",
				Last: "VaibhavLast"
			}, {
				first: "Pachu",
				Last: "VaibhavLast"
			}, {
				first: "ABS",
				Last: "VaibhavLast"
			}, {
				first: "Rachana",
				Last: "RachanaLast"
			}, {
				first: "Vaibhav",
				Last: "VaibhavLast"
			}, {
				first: "Anoop",
				Last: "VaibhavLast"
			}, {
				first: "Jk",
				Last: "VaibhavLast"
			}, {
				first: "Pachu",
				Last: "VaibhavLast"
			}, {
				first: "ABS",
				Last: "VaibhavLast"
			}, {
				first: "Rachana",
				Last: "RachanaLast"
			}, {
				first: "Vaibhav",
				Last: "VaibhavLast"
			}, {
				first: "Anoop",
				Last: "VaibhavLast"
			}, {
				first: "Jk",
				Last: "VaibhavLast"
			}, {
				first: "Pachu",
				Last: "VaibhavLast"
			}, {
				first: "ABS",
				Last: "VaibhavLast"
			}, {
				first: "Rachana",
				Last: "RachanaLast"
			}, {
				first: "Vaibhav",
				Last: "VaibhavLast"
			}, {
				first: "Anoop",
				Last: "VaibhavLast"
			}, {
				first: "Jk",
				Last: "VaibhavLast"
			}, {
				first: "Pachu",
				Last: "VaibhavLast"
			}, {
				first: "ABS",
				Last: "VaibhavLast"
			}, {
				first: "Rachana",
				Last: "RachanaLast"
			}, {
				first: "Vaibhav",
				Last: "VaibhavLast"
			}, {
				first: "Anoop",
				Last: "VaibhavLast"
			}, {
				first: "Jk",
				Last: "VaibhavLast"
			}, {
				first: "Pachu",
				Last: "VaibhavLast"
			}, {
				first: "ABS",
				Last: "VaibhavLast"
			}, {
				first: "Rachana",
				Last: "RachanaLast"
			}, {
				first: "Vaibhav",
				Last: "VaibhavLast"
			}, {
				first: "Anoop",
				Last: "VaibhavLast"
			}, {
				first: "Jk",
				Last: "VaibhavLast"
			}, {
				first: "Pachu",
				Last: "VaibhavLast"
			}, {
				first: "ABS",
				Last: "VaibhavLast"
			}, {
				first: "Rachana",
				Last: "RachanaLast"
			}, {
				first: "Vaibhav",
				Last: "VaibhavLast"
			}, {
				first: "Anoop",
				Last: "VaibhavLast"
			}, {
				first: "Jk",
				Last: "VaibhavLast"
			}, {
				first: "Pachu",
				Last: "VaibhavLast"
			}, {
				first: "ABS",
				Last: "VaibhavLast"
			}, {
				first: "Rachana",
				Last: "RachanaLast"
			}, {
				first: "Vaibhav",
				Last: "VaibhavLast"
			}, {
				first: "Anoop",
				Last: "VaibhavLast"
			}, {
				first: "Jk",
				Last: "VaibhavLast"
			}, {
				first: "Pachu",
				Last: "VaibhavLast"
			}, {
				first: "ABS",
				Last: "VaibhavLast"
			}, {
				first: "Rachana",
				Last: "RachanaLast"
			}, {
				first: "Vaibhav",
				Last: "VaibhavLast"
			}, {
				first: "Anoop",
				Last: "VaibhavLast"
			}, {
				first: "Jk",
				Last: "VaibhavLast"
			}, {
				first: "Pachu",
				Last: "VaibhavLast"
			}, {
				first: "ABS",
				Last: "VaibhavLast"
			}, {
				first: "Rachana",
				Last: "RachanaLast"
			}, {
				first: "Vaibhav",
				Last: "VaibhavLast"
			}, {
				first: "Anoop",
				Last: "VaibhavLast"
			}, {
				first: "Jk",
				Last: "VaibhavLast"
			}, {
				first: "Pachu",
				Last: "VaibhavLast"
			}, {
				first: "ABS",
				Last: "VaibhavLast"
			}]
		};
		var oProductsModel = new sap.ui.model.json.JSONModel(data);
		this.setModel(oProductsModel, "products");
		
		var Operationdata = {
			Operations: [{
				Name: "Open Deficiencies"
			}, {
				Name: "Status"
			}, {
				Name: "Sampling Status"
				
			}, {
				Name: "Close Deficiencies"
				
			}, {
				Name: "Inspection Status"
			}, {
				Name: "Purchasing"
				
			}, {
				Name: "Part History"
				
			}, {
				Name: "Historical Samples"
				
			}, {
				Name: "Machine"
				
			}, {
				Name : "Mold Specs"
				
			}, {
				Name: "Process Data"
				
			}, {
				Name: "Mold History"
				
			}]
		};
		var oOperationModel = new sap.ui.model.json.JSONModel(Operationdata);
		this.setModel(oOperationModel, "Operations");

				this.getRouter().initialize();
		},
		
		createContent: function () {
			return sap.ui.view({
				viewName: "hunterDoublas.HunterDoublas.view.FlexibleColumnLayout",
				type: "JS"
			});
		},

		getHelper: function () {
			var oFCL = sap.ui.getCore().byId("FlexibleColumnLayout"),
				oParams = jQuery.sap.getUriParameters(),
				oSettings = {
					defaultTwoColumnLayoutType: sap.f.LayoutType.TwoColumnsMidExpanded,
					defaultThreeColumnLayoutType: sap.f.LayoutType.ThreeColumnsMidExpanded,
					mode: oParams.get("mode"),
					initialColumnsCount: oParams.get("initial"),
					maxColumnsCount: oParams.get("max")
				};

			return FlexibleColumnLayoutSemanticHelper.getInstanceFor(oFCL, oSettings);
		}

	});
	return Component;
}, true);