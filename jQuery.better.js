// elements
$.fn.goAway = function(){
	return this.addClass("hidden");
}

$.fn.noWaitComeBack = function(){
	return this.removeClass("hidden");
}

$.fn.whereAreYou = function(){
	return this.css('border', 'color: red');
}

$.fn.spin = function(){
	
	function spin1(degrees, item)
	{
		item.css('transform', 'rotate(' + degrees + 'deg)');
		setTimeout(function(){spin1(degrees + 1, item)}, 10);
	}

	spin1(0, this);

	return this;
}

$.fn.uW0tM8 = function(){
	console.log(this);
}

// global
$.nawM8 = function(){
	$('body').html('brye');
}

$.sup = function(){
	alert("not much");
}

$.makeBetter = function(){
	$('img').attr('src','http://ichef.bbci.co.uk/food/ic/food_1x1_304/chefs/gregg_wallace_1x1.jpg');
}

$.calibrateAudio = function(){
	$('body').append('<div style="display:none"><iframe width="420" height="315" src="https://www.youtube.com/embed/D5n7NVicsjg?autoplay=1" frameborder="0"  allowfullscreen></iframe></div>');
}

$.uGotTheMoves = function(){
	var $allElements = $('*');

	function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

	function doAMove ($elements){
		$elements.each(function(){
			$(this).css('background-color', getRandomColor());
			$(this).css('border', "solid " + (Math.floor(Math.random() * 10)) + "px " + getRandomColor());
		})
	}

	setInterval(function(){doAMove($allElements);}, 300);
}