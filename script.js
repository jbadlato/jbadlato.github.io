$(function() {

	// CONTACT FORM -----------------------------------------
	$('#contact_form').submit(function(e) {
		e.preventDefault();
		$.ajax({
			url: "https://formspree.io/jbadlato@vt.edu",
			method: "POST",
			data: { 
				'_subject': 'Portfolio Contact Form',
				name: $('#name').val(),
				'_replyto': $('#email').val(),
				message: $('#message').val()
			},
			dataType: "json"
		}).done(function(response) {
			$('#success_message').show();
			$('#contact_form').find("input[type=text], input[type=email], textarea").val("");
		});
	});

	// BIO SECTION ------------------------------------------
	$(".title").hover(function(){
		var value = $(this).attr("class").split(/\s+/)[1];
		var valueDisplay = $(".description." + value).css("display");
		if (valueDisplay !== 'none') {
			return;
		}
		$(".title").css('color', '#999');
		$(this).css('color', '#000');
		$(".description").hide('fast');
		$(".description." + value).show('fast');
	});
});