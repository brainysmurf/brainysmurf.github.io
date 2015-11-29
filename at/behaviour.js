function main(url, prefill) {
	awtble.url = url;
	awtble.prefill = prefill;
	console.log(awtble.$title);
	awtble.$container.before($('<button/>', {id:'newButton', text:'Add New', style:'margin-bottom:10px'}));
	awtble.$container.before($('<div/>', {id:"addNewDialog", style: "display:none;", title:'Add New!'}));
	//$("#addNewDialog").append('hi');
	//$("#addNewDialog").append($('<iframe/>', {src:url, width:760, frameborder: 0, marginheight:0, text:'Loading…'}));
	$('#newButton').button({icons:{primary:'ui-icon-circle-plus'}});
	debugger;
	//$('#addNewDialog').dialog({autoOpen:false, height:"auto", width:750, modal:true, draggable:false,show:"fold", appendTo:$(window.parent.body)});
	$('#newButton').click(function() {
		//$('#addNewDialog').dialog("open");
		var w = window.open(url + '/viewform');
	});
}
