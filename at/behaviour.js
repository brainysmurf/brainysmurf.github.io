function main(url, prefill) {
	awtble.url = url;
	awtble.embedUrl = url + '/viewform?embedded=true#start=embed';
	awtble.prefill = prefill;
	console.log(awtble.$title);
	awtble.$container.before($('<button/>', {id:'newButton', text:'Add New', style:'margin-bottom:10px'}));
	awtble.$container.before($('<div/>', {id:"addNewDialog", style: "display:none;", title:'Add New!'}));
	//$("#addNewDialog").append('hi');
	$("#addNewDialog").append($('<iframe/>', {src:awtble.embedUrl, height:"100%", width:"100%", frameborder: 0, marginheight:0, text:'Loading…'}));
	$('#newButton').button({icons:{primary:'ui-icon-circle-plus'}});
	$('#addNewDialog').dialog({autoOpen:false, height:750, width:"auto", modal:true, draggable:false,show:"fold"});
	$('#newButton').click(function() {
		$('#addNewDialog').dialog("open");
		//var w = window.open(url + '/viewform');
	});
}
