$(function submit(argument) {
	// body...
	$('.btn-send-body').on('click', function() {
		window.location.reload()
	})
})
$(function hover () {
	$("#first-img,#search").hover(
	function () {
		$("#search").css('visibility', 'visible');
		$('#search').css('opacity', '1');
		$('#search').css('transform', 'translate(0, 0%)')
	},
	function() {
	$("#search").css('visibility', 'hidden');
		$('#search').css('opacity', '0');
		
	}
	)
})
$(function hover () {
	$("#second,#search1").hover(
	function () {
		$("#search1").css('visibility', 'visible');
		$('#search1').css('opacity', '1');
		$('#search1').css('transform', 'translate(0, 0%)')
	},
	function() {
	$("#search1").css('visibility', 'hidden');
		$('#search1').css('opacity', '0');
		
	}
	)
})
$(function hover () {
	$("#free,#search2").hover(
	function () {
		$("#search2").css('visibility', 'visible');
		$('#search2').css('opacity', '1');
		$('#search2').css('transform', 'translate(0, 0%)')
	},
	function() {
	$("#search2").css('visibility', 'hidden');
		$('#search2').css('opacity', '0');
		
	}
	)
})
$(function modal() {
	$("#first-img").on('click', function()   {
		$(".popup").css('opacity', '1')
		$(".popup").css('visibility', 'visible')
		$(".popup-content").css('transform','translate(0,0%)')
	})
})

$(function() {
	$('.popup-close').on('click', function() {
			$(".popup").css('opacity', '0')
			$(".popup").css('visibility', 'hidden')

	})
})
$(function modal() {
	$("#second").on('click', function()   {
		$(".popup1").css('opacity', '1')
		$(".popup1").css('visibility', 'visible')
		$(".popup-content1").css('transform','translate(0,0%)')
	})
})

$(function() {
	$('.popup-close1').on('click', function() {
			$(".popup1").css('opacity', '0')
			$(".popup1").css('visibility', 'hidden')

	})
})
$(function modal() {
	$("#free").on('click', function()   {
		$(".popup2").css('opacity', '1')
		$(".popup2").css('visibility', 'visible')
		$(".popup-content2").css('transform','translate(0,0%)')
	})
})

$(function() {
	$('.popup-close2').on('click', function() {
			$(".popup2").css('opacity', '0')
			$(".popup2").css('visibility', 'hidden')

	})
})