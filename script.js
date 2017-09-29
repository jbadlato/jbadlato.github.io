$(function() {
  $('#contact_form').submit(function(e) {
    e.preventDefault();
	$.ajax({
	    url: "https://formspree.io/jbadlato@vt.edu",
	    method: "POST",
	    data: { message: $('form').serialize() },
	    dataType: "json"
	}).done(function(response) {
	    $('#form_message').style('display: inline');
	    $('#contact_form').find("input[type=text], input[type=email], textarea").val("");
	});
  });
});