
function main(url, prefill) {
	awtble.definePrefill(prefill);
	awtble.updateUrl(url);
	awtble.makeNewButton('Add New', "Fill out this form");
	
	var kind = $('#sidebackground').data('kind');
	$('sidebackground').addClass(kind == 'Internal Record' ? 'ui-icon-document' : 'ui-icon-mail-closed')
	
	background:url(images/pdf-icon.gif) center right no-repeat;
padding:0 16px 0 0;
white-space:nowrap;
}
