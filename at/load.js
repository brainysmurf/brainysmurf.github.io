this.awtble = {};

(function (awtble) {
    /*
      
    */
	awtble.app = function (ss) {
		awtble.$sidebar = $('#sidebar');
		awtble.$title = $('h4.sites-embed-title');
		awtble.$container = $('#middleContainer');
		awtble.$count = $('#middleContainer > .count');
		awtble.prefillPhrase = '';
	};

	awtble.updateUrl = function(url) {
		awtble.url = url;
		//awtble.embedUrl = url + '/viewform?embedded=true#start=embed';
		if (awtble.prefillPhrase) awtble.embedUrl = url + '/viewform?' + awtble.prefillPhrase + '&embedded=true#start=embed';
		else awtble.embedUrl = url + '/viewform?embedded=true#start=embed';
	}
	
	awtble.makeNewButton = function(buttonTitle, dialogTitle) {
		awtble.$container.before($('<button/>', {id:'newButton', text:buttonTitle, style:'margin-bottom:10px'}));
		awtble.$container.before($('<div/>', {id:"addNewDialog", style: "display:none;", title:dialogTitle}));
		$("#addNewDialog").append($('<iframe/>', {src:awtble.embedUrl, height:"100%", width:"100%", frameborder: 0, marginheight:0, text:'Loading…'}));
		$('#newButton').button({icons:{primary:'ui-icon-circle-plus'}});
		$('#addNewDialog').dialog({autoOpen:false, height:700, width:"90%", modal:true, draggable:false,show:"fadeIn"});
		$('#newButton').click(function() {
			$('#addNewDialog').dialog("open");
		});
	}
	
	awtble.definePrefill = function(prefillUrl) {
		// Take the raw prefill Url and extract just the bits we want
		// So we have a 'prefillPhrase'
		awtble.prefillPhrase = prefillUrl.match(/entry.*$/)[0].split('&').reduce(function (obj, value, index) {
			s = value.split('=');
			if (s.length>1) obj.push(s);
			return obj;
		}, []).map(function (v, i, _) {
			return v.join('=');
		}).join('&');
	}

}(this.awtble));

this.awtble.app();
