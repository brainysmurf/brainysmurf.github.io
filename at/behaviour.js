function main() {
	awtble.$container.before($('<button/>', {id:'newButton', text:'Add New One'}));
	$('#newButton').prepend($('<span/>', {class:'ui-icon-circle-plus'})).button();
}
