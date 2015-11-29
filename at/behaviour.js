function main() {
	awtble.$container.before($('<button/>', {id:'newButton', text:'<i class="add-plus"></i> Add New One'}));
	$('#newButton').prepend($('<span/>', {class:'ui-icon-circle-plus'})).button();
}
