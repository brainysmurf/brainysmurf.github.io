function main() {
	awtble.$container.before($('<button/>', {id:'newButton', text:'<i class="add-plus"></i> Add New'}));
	$('#newButton').button();
}
