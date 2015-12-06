
function main(url, prefill) {
	awtble.definePrefill(prefill);
	awtble.updateUrl(url);
	awtble.makeNewButton('Add New', "Fill out this form");
	
	var kind = $('#sidebackground').data('kind');
	$('.sidebackground').addClass(kind == 'Internal Record' ? 'ui-icon ui-icon-document' : 'ui-icon ui-icon-mail-closed');
	debugger;
}
