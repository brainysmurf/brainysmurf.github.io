function onLoad(element) {
	console.log($(element));
	$(element).find('.js-student-info').text( $(element).data('n') );
	$(element).find('.js-student-extra-info').html( $(element).data('o') + '<br />' + $(element).data('a') );

	if ($(element).data('d') === "Internal Record") {
		$(element).find('.sidebackground').addClass('ui-icon ui-icon-document');
		$(element).find('.js-content-title').text('Internal Record:');
		$(element).find('.js-content-body').text( $(element).data('h') );
	} else if ($(element).data('d') === "External Communication") {
		$(element).find('.sidebackground').addClass('ui-icon ui-icon-mail-closed');
		var emailText = '<p>' + $(element).data('l').split('\n').join('</p><p>') + '</p>';
		$(element).find('.js-content-hide').replaceWith( $('<div/>', {
			id:'emailText_'+index
		}).addClass('white-popup mfp-hide').html(emailText) );
		$(element).find('.js-content-title').html('Email to parents with subject <em>' + $(element).data('j') + '</em>:');
		$(element).find('.js-content-body').html( $('<div/>', {
				id:'emailTextPopup_'+index,
			}).html(emailText)  //.magnificPopup({
				//type: 'inline',
				//midClick: true
			//}) 
		); // ends here
	}
}

function modifyDom() {
	console.log("modding");
	$(".wrapper").each(function (index) {
		console.log($(this).data('n'));
		$(this).find('.js-student-info').text( $(this).data('n') );
		$(this).find('.js-student-extra-info').html( $(this).data('o') + '<br />' + $(this).data('a') );
		onLoad(this);
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
}
