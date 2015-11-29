function main() {
	awtble.$container.before($('<button/>', {id:'newButton', text:'Add New'}));
	awtble.$container.before($('<div/>', {id:"addNewDialog", style: "display:none;", title:'Add New!'}));
	$('#newButton').button({icons:{primary:'ui-icon-circle-plus'}});
	$('#addNewDialog').dialog({autoOpen:false});
	$('#newButton').click(function() {
		$('#addNewDialog').dialog("open");
	});
}
