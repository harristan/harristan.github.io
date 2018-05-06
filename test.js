
$(document).ready(function(){		

	//// Force cached pages to reload
	window.onpageshow = function(event) {
			
  		if (event.persisted) {
        	window.location.reload();
		}

		$("html,body").scrollTop(0);
	};

	// Event handler for dropdown button proper styling
	$(".p-profile").on("click", ".dropdown-toggle", function(event) {
		var jqBtn = $(this);
		jqBtn.css("background-color", "#f7f7f7");
		jqBtn.css("color", "#337ab7");
		jqBtn.css("border-color", "#337ab7");
	});

	// Ensures carousel does not automatically cle
	$('.carousel').carousel({
		interval: false
	});
	var jqModal = $(".modal.fade");
		jqModal.modal('show');

}); // jQuery
