$(document).ready(function() {
	console.log("jQuery started");
	$(".owl-carousel").owlCarousel({
		items: 1,
		singleItem: true,
		loop: false,
		center: true,
		dots: false,
		navigation:true
	});
	$('.owl-carousel-arrows .next').click(function() {
		$(".owl-carousel").trigger('next.owl.carousel');
	});
	$('.owl-carousel-arrows .prev').click(function() {
		$(".owl-carousel").trigger('prev.owl.carousel');
	});

	$('#gallery1').css('display', 'none'); 		/* As soon as carousel width defined, remove */

	$('#newPic_container').click(function() {
		$('#newPic_container').css('display', 'none');
		$('#portals').css('display', 'block');
	});

	$('.caption').hide();

	$('.doorKnob').hover(function() {
		$(this).next()
			.slideToggle();
	});

	$('.one').click(function() {
		$('#portals').css('display', 'none');
		$('#gallery1').css('display','block');
	});
});