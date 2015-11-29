function main() {
	awtble.$container.before($('<button/>', {id:'newButton', text:'Add New One'}));
	$('#newButton').button({icons:{primary:'ui-icon-circle-plus'}});
}
