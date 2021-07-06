selected=function (e){
	$(e).addClass('selected')
}
$(document).ready(()=>{
	$('.time').scroll(()=>{
		$('.reservation').each(function(){
			leftPoistion=500-$(this).offset().left
			$(this).css('paddingLeft',leftPoistion>0?leftPoistion:0)
		})
	})
	$('.block').mousedown(function(){
		$(this).parent().append('<div class="reservation selected">hh:mm ~ hh:mm メンテナンス</div>')
		$('.reservation.selected').css('left', $(this).offset().left-500+$('.time').scrollLeft())
		console.log($(this).parent().children('.block:gt(2)'))
		$(this).parent().children('.block:gt('+$(this).parent().children('.block').index(this)+')').mouseenter(function(){
			selected(this)
			$('.reservation.selected').width($('.selected').length*76)
		})
	})
	$('.part').on('mouseup', 'div', ()=>{
		console.log(111)
		$('.block').off('mouseenter')
		// $('.reservation.selected').width($('.selected').length*51)
		$('.selected').removeClass('selected')
	})
})