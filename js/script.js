$(document).ready(function() {
	console.log("jQuery started");
	$(".owl-carousel").owlCarousel({
		singleItem: true,
		loop: false,
		center: true,
		dots: false,
		navigation:true,
		/*navigationText:[
		"<i class='icon-chevron-left icon-white'><</i>",
		"<i class='icon-chevron-right icon-white'>></i>"],*/
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});
	$('.owl-carousel-arrows .next').click(function() {
		owl.trigger('owl.next');
	});
	$('.owl-carousel-arrows .prev').click(function() {
		owl.trigger('owl.prev');
	});
	$('#libai_container').click(function() {
		$('#libai_container').css('display', 'none');
		$('#nightshining_container').css('display', 'block');
	});
	$('#nightshining_container').click(function() {
		$('#nightshining_container').css('display', 'none');
		$('#portals').css('display', 'block');
	});
	$('.one').click(function() {
		$('#portals').css('display', 'none');
		$('#gallery1').css('display','block');
	})
});