$('.grid').isotope({
  itemSelector: '.grid-item',
  masonry: {
    columnWidth: 100,
      gutter: 14,
      isFitWidth:true,
      isAnimated: true
  }
});

$('.a').click(function(){	
	$('.b').hide();
	$('.grid').isotope( 'reloadItems' ).isotope();
})

