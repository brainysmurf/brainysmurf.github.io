this.awtble = {};

(function (awtble) {
    /*
      
    */
	awtble.app = function (ss) {
		awtble.$sidebar = $('#sidebar');
		awtble.$container = $('#middleContainer');
		awtble.$count = $('#middleContainer > .count');
		awtble.$container.before('<input type="submit" value="New entry">')
	};

	awtble.embedForm = function(formId) {



	}

}(this.awtble));

this.awtble.app();
