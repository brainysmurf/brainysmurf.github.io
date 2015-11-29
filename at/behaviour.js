function main(embedUrl, prefill) {
	awtble.embedUrl = embedUrl;
	awtble.prefill = prefill;
	awtble.$title.before($('<button/>', {id:'newButton', text:'Add New'}));
	awtble.$title.before($('<div/>', {id:"addNewDialog", style: "display:none;", title:'Add New!'}));
	$('#newButton').button({icons:{primary:'ui-icon-circle-plus'}});
	$('#addNewDialog').dialog({autoOpen:false});
	$('#newButton').click(function() {
		$('#addNewDialog').dialog("open");
		console.log(awtble.embedUrl);
	});
}
