function onLoad($element) {
	$me.find('.js-student-info').text( $me.data('n') );
	$me.find('.js-student-extra-info').html( $me.data('o') + '<br />' + $me.data('a') );

	if ($me.data('d') === "Internal Record") {
		$me.find('.sidebackground').addClass('ui-icon ui-icon-document');
		$me.find('.js-content-title').text('Internal Record:');
		$me.find('.js-content-body').text( $me.data('h') );
	} else if ($me.data('d') === "External Communication") {
		$me.find('.sidebackground').addClass('ui-icon ui-icon-mail-closed');
		var emailText = '<p>' + $me.data('l').split('\n').join('</p><p>') + '</p>';
		//$me.find('.js-content-hide').replaceWith( $('<div/>', {
		//	id:'emailText_'+index
		//}).addClass('white-popup mfp-hide').html(emailText) );
		$me.find('.js-content-title').html('Email to parents with subject <em>' + $me.data('j') + '</em>:');
		//$element.find('.js-content-body').html( $('<div/>', {
		//		id:'emailTextPopup_'+index,
		//	}).html(emailText)  //.magnificPopup({
				//type: 'inline',
				//midClick: true
			//}) 
		//); // ends here
	}
}

function modifyDom() {
	$this = $(this);
	$(".wrapper").each(function (index) {
		console.log($(this).data('n'));
		$this.find('.js-student-info').text( $this.data('n') );
		$this.find('.js-student-extra-info').html( $this.data('o') + '<br />' + $this.data('a') );
		$this.find('.js-student-info').text( $this.data('n') );
		$this.find('.js-student-extra-info').html( $this.data('o') + '<br />' + $this.data('a') );

		if ($this.data('d') === "Internal Record") {
			$this.find('.sidebackground').addClass('ui-icon ui-icon-document');
			$this.find('.js-content-title').text('Internal Record:');
			$this.find('.js-content-body').text( $this.data('h') );
		} else if ($this.data('d') === "External Communication") {
			$this.find('.sidebackground').addClass('ui-icon ui-icon-mail-closed');
			var emailText = '<p>' + $this.data('l').split('\n').join('</p><p>') + '</p>';
			//$this.find('.js-content-hide').replaceWith( $('<div/>', {
			//	id:'emailText_'+index
			//}).addClass('white-popup mfp-hide').html(emailText) );
			$this.find('.js-content-title').html('Email to parents with subject <em>' + $this.data('j') + '</em>:');
			//$element.find('.js-content-body').html( $('<div/>', {
			//		id:'emailTextPopup_'+index,
			//	}).html(emailText)  //.magnificPopup({
					//type: 'inline',
					//midClick: true
				//}) 
			//); // ends here
		}
	});
}

function main(url, prefill) {
	awtble.definePrefill(prefill);
	awtble.updateUrl(url);
	awtble.makeNewButton('Add New', "Fill out this form");
	$('#controlers0').find('.charts-menu-button-caption').text("Filter by kind");
	$('#controlers1').find('input')
		.addClass('studentSearch')
		.attr('placeholder', "Type to filter by Student");
	awtble.moveStringFilterToFront($('#controlers1'));
	$('#controlers2').find('.charts-menu-button-caption').text("Filter by grade");
	var $parentDiv = $('iframe').parent();
	console.log($parentDiv);
	var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
	
	var observer = new MutationObserver(function(mutations, observer) {
	    // fired when a mutation occurs
	    console.log(mutations, observer);
	    // ...
	});

	// define what element should be observed by the observer
	// and what types of mutations trigger the callback
	observer.observe($parentDiv, {
	  subtree: true,
	  attributes: true
	  //...
	});
}
