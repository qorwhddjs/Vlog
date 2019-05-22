$(document).ready(function () {
	$(document).click(function(event){
		$("p").text(event.pageX)
		$("span").text(event.pageY)
	})
})