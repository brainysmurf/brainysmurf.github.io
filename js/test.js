this.SSWrapper = {};

(function (SSWrapper) {
    /*
      
    */
	SSWrapper.app = function (ss) {
       if (ss === undefined) {
         SSWrapper.ss = SpreadsheetApp.getActiveSpreadsheet();
       } else {
         SSWrapper.ss = undefined;
       }
	}

}(this.SSWrapper));

SSWrapper.app();
