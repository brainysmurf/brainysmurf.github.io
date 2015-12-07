
function main(url, prefill) {
	awtble.definePrefill(prefill);
	awtble.updateUrl(url);
	awtble.makeNewButton('Add New', "Fill out this form");
	
	var kind = $('.sidebackground').data('kind');
	//$('.sidebackground[data-kind="Internal Record"]').addClass('ui-icon ui-icon-document');
	//$('.sidebackground[data-kind="Internal Communication"]').addClass('ui-icon ui-icon-mail-closed');
	//$('.sidebackground[data-kind="External Communication"]').addClass('ui-icon ui-icon-mail-closed');
	$(".info").each(function (index) {
		if ($(this).data('kind') == "Internal Record") {
			$(this).find('.sidebackground').addClass('ui-icon ui-icon-docuent');
		} else {
			$(this).find('.sidebackground').addClass('ui-icon ui-icon-')
		}
	});
}
