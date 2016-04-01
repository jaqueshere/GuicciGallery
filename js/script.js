$(document).ready(function() {
	console.log("jQuery started");
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