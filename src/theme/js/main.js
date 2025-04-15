$(function(){

	$('#loader').delay(300).fadeOut(900);

	
	$('.main-nav_list li a').each(function(){
		
		$(this).on('click', function(e){
			e.preventDefault();
		
			let target = $(this).attr('href');
			
			$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 1000);
		});

	});

	$('.main-nav_footer li a').each(function(){
		
		$(this).on('click', function(event){
			event.preventDefault();
			console.log('footer links');
		
			let target = $(this).attr('href');
			
			$('html, body').animate({
				scrollTop: $(target).offset().top
			}, 1000);
		});

	});




	$('.btn-scroll a').click(function(e){
		e.preventDefault();
		// console.log($('.btn-scroll a'));
		// console.log($(this));
		let target = $(this).attr('href');
		// console.log(typeof(target));
		$('html, body').animate({
		scrollTop: $(target).offset().top
	}, 1200);
	});

	$('.btn-reveal').click(function(e){
		e.preventDefault();
		const $form = $('#potential_lead');
		if($form.hasClass('isOpen')) {
			$form.slideUp('slow', function(){
				$form.removeClass('isOpen');
				$('.btn-reveal').html('Get in touch');
			});
		}else{
			$form.slideDown('slow', function() {
				$form.addClass('isOpen');
				$('.btn-reveal').html('Great!! You have found my email.');
			});
		}


	});

  /*
  * Contact Form 
  *
  * ** Validation with jquery
  */
	// $('#contactForm').on('submit', function(){
	// 	validateContactForm();
	// });

	// function validateContactForm() {
	// 	$('#contactForm').validate({
	// 		rules: {
	// 			firstLastname: "required",
	// 			emailInp: {
	// 				required: true,
	// 				email: true
  //       },
  //       phoneInp: "required"
	// 		},
	// 		messages: {
	// 			firstLastname: "Please enter your first and last name",
  //       emailInp: "Please enter a valid email address",
  //       phoneInp: "Please enter your phone number"
	// 		},
	// 		submitHandler: function(form) {
	// 			form.submit();
	// 		}
	// 	});
	// }


});