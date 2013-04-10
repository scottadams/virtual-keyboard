$().ready(function(){

	$('.upper').hide();

// when a key is pressed, class of that key is set to 'depressed'
    document.onkeydown = document.body.onkeydown = function(e){
      	e = e || window.event;
      	var id = 'k' + (e.keyCode || e.which);
      	$('.key').each(function(){
      		if($(this).attr('id') === id){
      			$(this).addClass('depressed');
      		};
      		
      		
      	});
    };
// when a key is unpressed, 'depressed' class is removed
    document.onkeyup = document.body.onkeydown = function(e){
      	e = e || window.event;
      	var id = 'k' + (e.keyCode || e.which);
      	$('.key').each(function(){
      		if($(this).attr('id') === id){
      			$(this).removeClass('depressed');
      		}
      		/*
      		if($(this).attr('id') === 'k20'){
      			$('.lower').removeClass('lower').addClass('upper');
      		}
      		*/
      	});
    };/*
    function capsLock(){
    	if($('#k20').hasClass('depressed')){
      		$('.lower').hide(0);
      		$('.upper').show(0);
      	} else {
      		$('.upper').hide(0);
      		$('.lower').show(0);
      	};
      };

      function shift(){
      	if($('#k16').hasClass('depressed')){
      		$('.lower').hide(0);
      		$('.upper').show(0);
      	} else {
      		$('.upper').hide(0);
      		$('.lower').show(0);
      	};
      };
      	*/
    
});