
function main(url, prefill) {
	awtble.definePrefill(prefill);
	awtble.updateUrl(url);
	awtble.makeNewButton('Add New', "Fill out this form");
	$('#controlers0').find('.charts-menu-button-caption').text("Filter by kind");
	$('#controlers1').find('input').addClass('studentSearch').attr('placeholder', "Type to filter by Student");
	awtble.moveStringFilterToFront($('#controlers1'));
	$('#controlers2').find('.charts-menu-button-caption').text("Filter by grade");

	$(".wrapper").each(function (index) {
		$(this).find('.js-student-info').text( $(this).data('n') );
		$(this).find('.js-student-extra-info').html( $(this).data('o') + '<br />' + $(this).data('a') );
		if ($(this).data('d') === "Internal Record") {
			$(this).find('.sidebackground').addClass('ui-icon ui-icon-document');
			$(this).find('.js-content-title').text('Internal Record:');
			$(this).find('.js-content-body').text( $(this).data('h') );
		} else if ($(this).data('d') === "External Communication") {
			$(this).find('.sidebackground').addClass('ui-icon ui-icon-mail-closed');
			var emailText = '<p>' + $(this).data('l').split('\n').join('</p><p>') + '</p>';
			$(this).find('.js-content-hide').replaceWith( $('<div/>', {
				id:'emailText_'+index
			}).addClass('white-popup mfp-hide').html(emailText) );
			$(this).find('.js-content-title').html('Email to parents with subject <em>' + $(this).data('j') + '</em>:');
			$(this).find('.js-content-body').html( $('<div/>', {
					id:'emailTextPopup_'+index,
				}).html(emailText).magnificPopup({
					type: 'inline',
					midClick: true
				}) 
			);
		}
	});
}
