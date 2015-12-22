function update() {

	$('*[column]').each(function (item) { 
		var value = $(this).parents('.wrapper').data( $(this).attr('column') );
		if ($(this).attr('attr')) {
			var attr = $(this).attr('attr');
			$(this).attr(attr, value);
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

	// $('*[onlyif]:not([variable])').each(function (item) {
	// 	var value = $(this).attr('onlyif');
	// 	if ($(this).text() !== value) {
	// 		$(this).css('display', 'none');
	// 	}
	// });

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

	// $(".wrapper").each(function (index) {
	// 	$this = $(this);
	// 	$this.timestamp = $this.data('a');
	// 	$this.submittedBy = $this.data('b');
	// 	$this.kind = $this.data('d');
	// 	$this.frontendUser = $this.data('username');
	// 	$this.internalRecordContent = $this.data('h');
	// 	$this.whoCanEditMe = $this.data('s');
	// 	$this.studentName = $this.data('n');
	// 	$this.grade = $this.data('o');
	// 	$this.externalComBody = $this.data('l');
	// 	$this.externalComSubject = $this.data('j');
	// 	$this.row = $this.data('t');
	// 	$this.uniqueId = $this.data('w');
	// 	$this.embedUrl = $this.data('x');
	// 	$this.commentsRaw = $this.data('y');
	// 	if (typeof $this.commentsRaw === 'object') {
	// 		// We have to unpack them
	// 		$this.comments = [];
	// 		$this.commentsRaw.forEach(function (item, index) {
	// 			var user, timestamp, uniqueId, content;
	// 			timestamp = item[0];
	// 			content = item[1];
	// 			user = "<unknown>";
	// 			$this.comments.push({user:user, content:content})
	// 		})
	// 	} else {
	// 		$this.comments = null;
	// 	}

	// 	$this.isOwner = $this.submittedBy == $this.frontendUser;
	// 	$this.canEdit = $this.whoCanEditMe.indexOf($this.frontendUser) != 1;

	// 	$this.find('.js-student-info').text( $this.studentName );
	// 	var extraHtml = $this.grade + '<br />' + $this.timestamp;

	// 	if ($this.isOwner || $this.canEdit) {
	// 		extraHtml += '<br /><a href="'+ $this.embedUrl +'">Edit</a>';
	// 	}
	// 	$this.find('.js-student-extra-info').html( extraHtml );

	// 	if ($this.kind === "Internal Record") {
	// 		$this.find('.sidebackground').addClass('ui-icon ui-icon-document');
	// 		$this.find('.js-content-title').text('Internal Record:');
	// 		$this.find('.js-content-body').text( $this.internalRecordContent );
	// 	} else if ($this.kind === "External Communication") {
	// 		$this.find('.sidebackground').addClass('ui-icon ui-icon-mail-closed');
	// 		var emailText = '<p>' + $this.externalComBody.split('\n').join('</p><p>') + '</p>';
	// 		//$this.find('.js-content-hide').replaceWith( $('<div/>', {
	// 		//	id:'emailText_'+index
	// 		//}).addClass('white-popup mfp-hide').html(emailText) );
	// 		$this.find('.js-content-title').html('Email to parents with subject <em>' + $this.externalComSubject + '</em>:');
	// 		//$element.find('.js-content-body').html( $('<div/>', {
	// 		//		id:'emailTextPopup_'+index,
	// 		//	}).html(emailText)  //.magnificPopup({
	// 				//type: 'inline',
	// 				//midClick: true
	// 			//}) 
	// 		//); // ends here
	// 	}

	// 	if ($this.comments) {
	// 		$comments = $this.find('.js-comments');
	// 		$comments.append($('<div/>', {class:"label", text:"Follow-ups"}));
	// 		$this.comments.forEach(function (thisComment) {
	// 			$comments.append($('<div/>', {text: thisComment.user + ' said ' + thisComment.content}));
	// 		});
	// 		debugger;
	// 	}
	//});
}

$('#content')
    .observe('childlist', 'ul li:first', function(record) {
        // Observe if elements matching '#content ul li:first' have been added or removed
    })
    .observe('attributes', '.section p:visible', function(record) {
        // Observe if elements matching '#content .section p:visible' have been added or removed
    })

function main(params) {
	awtble.definePrefill(params.prefill);
	awtble.updateUrl(params.formUrl);
	awtble.makeNewButton('Add New', "Fill out this form");
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
			console.log(record.target);
			if (record.target.class == 'google-visualization-controls-categoryfilter-selected') {
				console.log(record.target);
				switch (record.target.parent.id) {
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
					console.log(record);
					update();
				}
			}
		});
}
