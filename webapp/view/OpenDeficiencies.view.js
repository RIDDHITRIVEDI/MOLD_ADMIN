sap.ui.jsview("hunterDoublas.HunterDoublas.view.OpenDeficiencies", {
	getControllerName: function () {
		return "hunterDoublas.HunterDoublas.controller.OpenDeficiencies";
	},
	createContent: function (oController) {

		//------------------------------------------Open Deficiencies-----------------------------------------------------------------------------------------------------------------------//
		var oL_DEFNO = new sap.m.Label({
			id: 'L-DEFNO',
			text: 'DEF #',
			width: '100%',
			layoutData: new sap.ui.layout.GridData({
				span: "L12 M12 S12"
			}),
		}).addStyleClass("sapUiSmallMarginEnd");

		var oTF_DEFNO = new sap.m.Input({
			id: 'TF-DEFNO',
			text: '',
			width: '100%',
			visible: true,
			enabled: false,
			layoutData: new sap.ui.layout.GridData({
				span: "L12 M12 S12"
			}),
			change: function (oEvent) {
				//if (oCore.byId('B-OpenDefSave')) oCore.byId('B-OpenDefSave').setEnabled(oCore.byId('TF-DEFNO').getValue() != '');
			}
		});

		var oL_CAVPSBL = new sap.m.Label({
			id: 'L-CAVPSBL',
			text: 'CAVPSBL',
			layoutData: new sap.ui.layout.GridData({
				span: "L4 M4 S4"
			})
		}).addStyleClass("sapUiSmallMarginEnd");

		var oL_CAVRUN = new sap.m.Label({
			id: 'L-CAVRUN',
			text: 'CAVRUN',
			layoutData: new sap.ui.layout.GridData({
				span: "L4 M4 S4"
			})
		}).addStyleClass("sapUiSmallMarginEnd");

		var oL_DEFCAV = new sap.m.Label({
			id: 'L-DEFCAV',
			text: 'DEFCAV',
			layoutData: new sap.ui.layout.GridData({
				span: "L4 M4 S4"
			})
		}).addStyleClass("sapUiSmallMarginEnd");

		var oTF_CAVPSBL = new sap.m.Input({
			id: 'TF-CAVPSBL',
			text: '',
			width: '100%',
			layoutData: new sap.ui.layout.GridData({
				span: "L4 M4 S4"
			})
		});
		var oTF_CAVRUN = new sap.m.Input({
			id: 'TF-CAVRUN',
			text: '',
			editable: false,
			layoutData: new sap.ui.layout.GridData({
				span: "L4 M4 S4"
			}),
			width: '100%'
		});
		var oTF_DEFCAV = new sap.m.Input({
			id: 'TF-DEFCAV',
			text: '',
			width: '100%',
			layoutData: new sap.ui.layout.GridData({
				span: "L4 M4 S4"
			})
		});
		var oL_PROBDESCR = new sap.ui.commons.Label({
			id: 'L-PROBDESCR',
			text: 'PROBLEM DESCRIPTION',
			layoutData: new sap.ui.layout.GridData({
				span: "L12 M12 S12"
			})
		});
		var oTA_PROBDESCR = new sap.ui.commons.TextArea({
			id: 'TA-PROBDESCR',
			text: '',
			height: '80px',
			width: '100%',
			layoutData: new sap.ui.layout.GridData({
				span: "L12 M12 S12"
			})
		});
		var oL_DATEFILED = new sap.m.Label({
			id: 'L-DATEFILED',
			layoutData: new sap.ui.layout.GridData({
				span: "L4 M4 S4"
			}),
			text: 'DATE FILED'
		});
		var oL_DISPBY = new sap.m.Label({
			id: 'L-DISPBY',
			layoutData: new sap.ui.layout.GridData({
				span: "L4 M4 S4"
			}),
			text: 'DISPOSITIONED BY'
		});
		var oL_COORD = new sap.m.Label({
			id: 'L-COORD',
			text: 'COORDINATOR',
			layoutData: new sap.ui.layout.GridData({
				span: "L4 M4 S4"
			})
		});
		var oTF_CloseDATEFILED = new sap.m.DateTimePicker({
			id: 'TF-CloseDATEFILED',
			tooltip: 'DATE FILED',
			editable: true,
			visible: true,
			layoutData: new sap.ui.layout.GridData({
				span: "L4 M4 S4"
			}),
			width: '100%'
		});
		var oDB_CloseDISPBY = new sap.m.ComboBox({
			id: 'DB-CloseDISPBY',
			tooltip: 'DISPOSITIONED BY',
			editable: true,
			width: '100%',
			layoutData: new sap.ui.layout.GridData({
				span: "L4 M4 S4"
			}),
			change: function (oEvent) {
				//alert(oEvent.oSource.getSelectedKey());
			}
		});
		var oDB_CloseCOORD = new sap.m.ComboBox({
			id: 'DB-CloseCOORD',
			tooltip: 'COORDINATOR',
			layoutData: new sap.ui.layout.GridData({
				span: "L4 M4 S4"
			}),
			editable: true,
			width: '100%'
		});
		var oL_CloseINSTR = new sap.m.Label({
			id: 'L-CloseINSTR',
			text: 'INSTRUCTIONS',
			layoutData: new sap.ui.layout.GridData({
				span: "L12 M12 S12"
			})
		});
		var oTF_CloseINSTR = new sap.ui.commons.TextArea({
			id: 'TF-CloseINSTR',
			text: '',
			width: '100%',
			layoutData: new sap.ui.layout.GridData({
				span: "L12 M12 S12"
			})
		});
		var oL_CloseAPPRVBY = new sap.m.Label({
			id: 'L-CloseAPPRVBY',
			text: 'APPROVED BY',
			layoutData: new sap.ui.layout.GridData({
				span: "L4 M4 S4"
			})
		});
		var oL_CloseDATECLOSED = new sap.m.Label({
			id: 'L-CloseDATECLOSED',
			text: 'DATE CLOSED',
			layoutData: new sap.ui.layout.GridData({
				span: "L4 M4 S4"
			})
		});
		var oL_CloseSTATUS = new sap.m.Label({
			id: 'L-CloseSTATUS',
			text: 'STATUS',
			layoutData: new sap.ui.layout.GridData({
				span: "L4 M4 S4"
			})
		});
		var oDB_CloseAPPRVBY = new sap.m.ComboBox({
			id: 'DB-CloseAPPRVBY',
			tooltip: 'Approved By',
			layoutData: new sap.ui.layout.GridData({
				span: "L4 M4 S4"
			}),
			width: '100%',
			change: function (oEvent) {
				//alert(oEvent.oSource.getSelectedKey());
			}
		});
		var oTF_DATECLOSED = new sap.m.DateTimePicker({
			id: 'TF-DATECLOSED',
			tooltip: 'DATE CLOSED',
			editable: true,
			visible: true,
			layoutData: new sap.ui.layout.GridData({
				span: "L4 M4 S4"
			}),
			width: '100%'
		});
		var oDB_STATUS = new sap.m.ComboBox({
			id: 'DB-STATUS',
			tooltip: 'STATUS',
			layoutData: new sap.ui.layout.GridData({
				span: "L4 M4 S4"
			}),
			width: '100%',
			//items : [new sap.ui.core.ListItem("OpenStatus0", { key : "0" , text:""}),
			//	new sap.ui.core.ListItem("OpenStatus1", { key : "1" , text:"OPEN"}),
			//	new sap.ui.core.ListItem("OpenStatus2", {key : "2" ,  text:"CLOSED"})
			//	],
			change: function (oEvent) {
				//alert(oEvent.oSource.getSelectedKey());
			}
		});
		var oL_LABOURHRS = new sap.ui.commons.Label({
			id: 'L-LABOURHRS',
			layoutData: new sap.ui.layout.GridData({
				span: "L4 M4 S4"
			}),
			text: 'LABOR HOURS'
		});
		var oL_MATCOST = new sap.ui.commons.Label({
			id: 'L-MATCOST',
			layoutData: new sap.ui.layout.GridData({
				span: "L4 M4 S4"
			}),
			text: 'MATERIAL COST'
		});
		var oL_CYCCOUNTER = new sap.ui.commons.Label({
			id: 'L-CYCCOUNTER',
			layoutData: new sap.ui.layout.GridData({
				span: "L4 M4 S4"
			}),
			text: 'CYCLE COUNTER'
		});
		var oTF_LABOURHRS = new sap.m.Input({
			id: 'TF-LABOURHRS',
			layoutData: new sap.ui.layout.GridData({
				span: "L4 M4 S4"
			}),
			text: '',
			width: '100%'
		});
		var oTF_MATCOST = new sap.m.Input({
			id: 'TF-MATCOST',
			text: '',
			width: '100%',
			layoutData: new sap.ui.layout.GridData({
				span: "L4 M4 S4"
			})
		});
		var oTF_CYCCOUNTER = new sap.m.Input({
			id: 'TF-CYCCOUNTER',
			layoutData: new sap.ui.layout.GridData({
				span: "L4 M4 S4"
			}),
			text: '',
			width: '100%'
		});

		var oGridForm = new sap.ui.layout.Grid({
			width: '100%',
			vSpacing: 1,
			hSpacing: 1,
			position: 'Left',
			content: [
				oL_DEFNO,
				oTF_DEFNO,
				oL_CAVPSBL,
				oL_CAVRUN,
				oL_DEFCAV,
				oTF_CAVPSBL,
				oTF_CAVRUN,
				oTF_DEFCAV,
				oL_PROBDESCR,
				oTA_PROBDESCR,
				oL_DATEFILED,
				oL_DISPBY,
				oL_COORD,
				oTF_CloseDATEFILED,
				oDB_CloseDISPBY,
				oDB_CloseCOORD,
				oL_CloseINSTR,
				oTF_CloseINSTR,
				oL_CloseAPPRVBY,
				oL_CloseDATECLOSED,
				oL_CloseSTATUS,
				oDB_CloseAPPRVBY,
				oTF_DATECLOSED,
				oDB_STATUS,
				oL_LABOURHRS,
				oL_MATCOST,
				oL_CYCCOUNTER,
				oTF_LABOURHRS,
				oTF_MATCOST,
				oTF_CYCCOUNTER
			]
		});

		var oVBoxMainOD = new sap.m.VBox("VBoxMainOD", {
			items: [oGridForm]
		});

		var oPageOpenDeficiencies = new sap.m.Page("PageOpenDeficiencies", {
			title: "Open Deficiencies",
			content: [oVBoxMainOD]
		});
		
	//---------------------------------------------Status--------------------------------------------------------------------------------------------------------------------------//	
		
	var oL_Rev = new sap.m.Label({
		id : 'L-Rev',
		text : 'Revision',
			layoutData: new sap.ui.layout.GridData({
				span: "L4 M4 S4"
			})
	});
	
		var oL_Vendor = new sap.m.Label({
		id : 'L-Vendor',
		text : 'Vendor',
			layoutData: new sap.ui.layout.GridData({
				span: "L4 M4 S4"
			})
	});
	var oL_PASNo = new sap.m.Label({
		id : 'L-PASNo',
		text : 'PAS Number',
			layoutData: new sap.ui.layout.GridData({
				span: "L4 M4 S4"
			})
	});
		
			
			var oTF_Rev = new sap.m.Input({
		id : 'TF-Rev',
		text : '',
		width: '100%',
			layoutData: new sap.ui.layout.GridData({
				span: "L4 M4 S4"
			})
	});
	
	var oDB_Vendor = new sap.m.ComboBox({
		id: 'DB-Vendor',
		tooltip: 'Vendor',
		editable : true,
		width: '100%',
			layoutData: new sap.ui.layout.GridData({
				span: "L4 M4 S4"
			})
	});
	
		var oTF_PASNo = new sap.m.Input({
		id : 'TF-PASNo',
		text : '',
		width: '100%',
			layoutData: new sap.ui.layout.GridData({
				span: "L4 M4 S4"
			})
	});
	var oL_HSProjectedDate = new sap.m.Label({
		id : 'L-HSProjectedDate',
		text : 'Projected Date',
			layoutData: new sap.ui.layout.GridData({
				span: "L4 M4 S4"
			})
	});
	var oL_ReleaseDate = new sap.m.Label({
		id : 'L-ReleaseDate',
		text : 'Release Date',
			layoutData: new sap.ui.layout.GridData({
				span: "L4 M4 S4"
			})
	});
	var oL_DeliveredDate = new sap.m.Label({
		id : 'L-DeliveredDate',
		text : 'Delivered Date',
			layoutData: new sap.ui.layout.GridData({
				span: "L4 M4 S4"
			})
	});
	
	var oTF_ProjectedDate = new sap.m.DateTimePicker({
		id : 'TF-ProjectedDate',
		tooltip : 'Projected Date',
		editable : true,
		visible : true,
		width : '100%' ,
			layoutData: new sap.ui.layout.GridData({
				span: "L4 M4 S4"
			})
	});
	var oTF_ReleaseDate = new sap.m.DateTimePicker({
		id : 'TF-ReleaseDate',
		tooltip : 'Release Date',
		editable : true,
		visible : true,
		width : '100%' ,
			layoutData: new sap.ui.layout.GridData({
				span: "L4 M4 S4"
			})
	});
	var oTF_DeliveredDate = new sap.m.DateTimePicker({
		id : 'TF-DeliveredDate',
		tooltip : 'Delivered Date',
		editable : true,
		visible : true,
		width : '100%' ,
			layoutData: new sap.ui.layout.GridData({
				span: "L4 M4 S4"
			})
	});

		var oGridFormStatus = new sap.ui.layout.Grid({
			width: '100%',
			vSpacing: 1,
			hSpacing: 1,
			position: 'Left',
			content: [oL_Rev,  oL_Vendor, oL_PASNo, oTF_Rev, oDB_Vendor, oTF_PASNo, oL_HSProjectedDate, oL_ReleaseDate, oL_DeliveredDate, oTF_ProjectedDate, oTF_ReleaseDate, oTF_DeliveredDate]
		});
		
			
		var oVBoxStatus = new sap.m.VBox("VBoxStatus", {
			items: [oGridFormStatus]

		});

		var oPageStatus = new sap.m.Page("PageStatus", {
			title: "Status",
			content: [oVBoxStatus]
		});
		var oPageSamplingStatus = new sap.m.Page("PageSamplingStatus", {
			title: "Sampling Status"

		});
		var oPageCloseDeficiencies = new sap.m.Page("PageCloseDeficiencies", {
			title: "Close Deficiencies"

		});

		var oPageInspectionStatus = new sap.m.Page("PageInspectionStatus", {
			title: "Inspection Status"

		});

		var oPagePurchasing = new sap.m.Page("PagePurchasing", {
			title: "Purchasing"
		});
		var oPagePartHistory = new sap.m.Page("PagePartHistory", {
			title: "Part History"

		});
		var oPageHistoricalSamples = new sap.m.Page("PageHistoricalSamples", {
			title: "Historical Samples"

		});

		var oPageMachine = new sap.m.Page("PageMachine", {
			title: "Machine"

		});

		var oPageMoldSpecs = new sap.m.Page("PageMoldSpecs", {
			title: "Mold Specs"
		});
		var oPageProcessData = new sap.m.Page("PageProcessData", {
			title: "Process Data"

		});
		var oPageMoldHistory = new sap.m.Page("PageMoldHistory", {
			title: "Mold History"

		});

		var oNavigationContainer = new sap.m.NavContainer(
			"navCon", // string
			{
				width: "100%",
				layoutData: [new sap.m.FlexItemData({
					growFactor: 1
				})],
				pages: [oPageOpenDeficiencies, oPageStatus, oPageSamplingStatus, oPageCloseDeficiencies, oPageInspectionStatus, oPagePurchasing,
					oPagePartHistory, oPageHistoricalSamples, oPageMachine,
					oPageMoldSpecs, oPageProcessData, oPageMoldHistory
				]

			}
		);

		var oVBox = new sap.m.VBox(
			"VBox", // string
			{
				height: "100%",
				items: [oNavigationContainer]
			}
		);
		return oVBox;

	}
});