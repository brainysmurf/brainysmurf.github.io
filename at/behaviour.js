function modifyDom() {

	$(".wrapper").each(function (index) {
		$this = $(this);
		console.log($this);
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

$('#content')
    .observe('childlist', 'ul li:first', function(record) {
        // Observe if elements matching '#content ul li:first' have been added or removed
    })
    .observe('attributes', '.section p:visible', function(record) {
        // Observe if elements matching '#content .section p:visible' have been added or removed
    })



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

	modifyDom();
	$(awtble.$tableSelector)
		.observe('added', function(record) {
			console.log(record);
			debugger;
			//modifyDom();
		});

}
