awtble.updateComment = function(commentUrl) {
	awtble.commentUrl = commentUrl;
};

awtble.makeCommentButton = function(buttonTitle, dialogTitle) {
	awtble.$container.before($('<button/>', {id:'commentButton', text:buttonTitle, style:'margin-bottom:10px'}));
	awtble.$container.before($('<div/>', {id:"commentDialog", style: "display:none;", title:dialogTitle}));
	$("#commentDialog").append($('<iframe/>', {src:awtble.commentUrl, height:"100%", width:"100%", frameborder: 0, marginheight:0, text:'Loading…'}));
	$('#commentButton').button({icons:{primary:'ui-icon-circle-plus'}});
	$('#addNewDialog').dialog({
		autoOpen:false, 
		height:700, 
		width:"90%", 
		modal:true, 
		draggable:false,
		show:"fadeIn",
		position: { my: 'top', at: 'top+15' }
	});
};

function update() {

	$('*[column]').each(function (item) { 
		var value = $(this).parents('.wrapper').data( $(this).attr('column') );
		if ($(this).attr('attr')) {
			var attr = $(this).attr('attr');
			$(this).attr(attr, value);
		} else if ($(this).attr('stringified') === "") {
			// make a new div that will replace this one
			//var comments = JSON.parse(value);
			if (value instanceof Array) {
				debugger;
				var $div = $('<div/>');
				$me = $(this);
				template = $me.html();
				$me.html("");
				value.forEach(function (item, index, arr) {
					$(_.template(template, item)).appendTo($me);
				});
			} else {
				console.log('Expecting an array: ' + value);
			}

			$(this).replaceWith($div);

		} else {
			switch ($(this).attr('at') && $(this).attr('at').toLowerCase()) {
				case 'after': 
					$(this).append(value); 
					break;
				case 'before':
					$(this).prepend(value); 
					break;
				default:
					$(this).prepend(value); 
			}
		}
	});

	$('*[onlyif]').each(function (item) {
		var value = $(this).attr('onlyif');
		if (value.indexOf('=') != -1) {
			var column = value.split("=")[0];
			value = value.split("=")[1];
			var variable = $(this).parents('.wrapper').data(column.toLowerCase());
			if (variable !== value) {
				$(this).css('display', 'none');
			}
		} else {
			if ($(this).text() !== value) {
				$(this).css('display', 'none');
			}
		}
	});


}

function main(params) {
	awtble.definePrefill(params.prefill);
	awtble.updateUrl(params.formUrl);
	awtble.updateComment(params.commentUrl);
	awtble.makeNewButton('Add New', "Enter a new item");
	//awtble.makeCommentButton('New Comment', "Enter a new comment");

	$('#controlers0').find('.charts-menu-button-caption').text("Filter by kind");
	$('#controlers1').find('input')
		.addClass('studentSearch')
		.attr('placeholder', "Type to filter by Student");
	awtble.moveStringFilterToFront($('#controlers1'));
	$('#controlers2').find	('.charts-menu-button-caption').text("Filter by grade");

	update();

	// Add an observer so that we can run update whenever the data in the table changes.
	// The selectors and if statements make it only run once
	// TODO: Figure out a better way
	$('#controlersPanel')
		.observe('childList subtree', function(record) {
			if (record.target.className == 'google-visualization-controls-categoryfilter-selected') {
				switch ($(record.target).parents('.controlers-filters').get(0).id) {
					case 'controlers0':
						$('#controlers0').find('.charts-menu-button-caption').text("Filter by kind");
						break;
					case 'controlers2':
						$('#controlers2').find	('.charts-menu-button-caption').text("Filter by grade");
						break;
				}
			}
	});

	$(awtble.$container)
		.observe('childList subtree', function(record) {
			if (record.addedNodes && record.addedNodes.length == 1 && record.target.className == 'google-visualization-table') {
				if (record.previousSibling == null) {
					update();
				}
			}
		});
}
