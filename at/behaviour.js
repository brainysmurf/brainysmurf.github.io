function main() {
	awtble.$container.before($('<button/>', {id:'newButton', text:'New entry'}));
	$('#newButton').button();
}
