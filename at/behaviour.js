function main() {
	awtble.$container.before($('<button/>', {id:'newButton', text:'Add New'}));
	$('#newButton').button({icons:{primary:'ui-icon-circle-plus'}});
}
