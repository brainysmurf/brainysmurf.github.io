
function main(url, prefill) {
	awtble.definePrefill(prefill);
	awtble.updateUrl(url);
	awtble.makeNewButton('Add New', "Fill out this form");
	
	$(".info").each(function (index) {
		debugger;
		$(this).find('.js-student-info').text( $(this).data('student') + " " + $(this).data('grade') );
		if ($(this).data('kind') == "Internal Record") {
			$(this).find('.sidebackground').addClass('ui-icon ui-icon-document');
			$(this).find('.js-content-title').text('Record:');
			$(this).find('.js-content-body').text( $(this).data('content') );
		} else {
			$(this).find('.sidebackground').addClass('ui-icon ui-icon-mail-closed')
		}
	});
}
