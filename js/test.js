this.awtble = {};

(function (awtble) {
    /*
      
    */
	awtble.app = function (ss) {
		awtble.$sidebar = $('#sidebar');
		awtble.$container = $('#middleContainer');
		awtble.$count = $('#middleContainer > .count');
		console.log(awtble.$count);
		awtble.$count.before('<b>success</b>')
	};

	awtble.embedForm = function(formId) {



	}

}(this.awtble));

this.awtble.app();
