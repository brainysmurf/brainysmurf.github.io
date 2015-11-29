function main() {
	awtble.$container.before($('<button/>', {id:'newButton', text:'Add New'}));
	awtble.$container.before($('<div/>', {id:"#addNewDialog", style: "display:none;", title:'Add New!'}));
	$('#newButton').button({icons:{primary:'ui-icon-circle-plus'}}).on('click', function(e) {
		$('#addNewDialog').dialog("open");
	});
}
