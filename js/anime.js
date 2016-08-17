//call rain audio on doc load and adjust volume with scroll
$(document).ready(function() {
    // var audio = $('audio').get(0);
    // 	audio.pause();
    
    // var height = $(document).height() - $(window).height();

    // $(window).scroll(function() {
    //     audio.play();
    //     audio.volume = 1 - $(window).scrollTop() / height;
    //     console.log('rain volume ' + audio.volume);
    // });

	// var sus = $('#scrollaudioDown').get(0);
	// 	sus.pause();

 //    var height2 = $(document).height() - $(window).height();

 //    $(window).scroll(function(){
 //    	sus.play();
 //    	sus.volume = 0 + $(window).scrollTop() / height2;

 //    	console.log('the light ' + sus.volume);
 //    });

	//horizontal scroll mouse responsive width measure
	var d = $('#d').get(0);
		// d.pause();

	$('.container-c').scroll(function() {
		d.play();
		var horizontal = 1 - $(this).scrollLeft() / (this.scrollWidth - this.clientWidth); 
		d.volume = horizontal;
		console.log('d ' + horizontal);

		// var height = $(document).height() - $(window).height();

	 //    $(window).scroll(function() {
	 //        // audio.play();
	 //        d.volume = 1 - $(window).scrollTop() / height;
	 //        // console.log('d vol ' + d.volume);
  //   	});

	});

	var c = $('#c').get(0);
		// c.pause();

	$('.container-c').scroll(function() {
		c.play();
		var horizontal_c = $(this).scrollLeft() / (this.scrollWidth - this.clientWidth); 
		c.volume = horizontal_c;
		console.log('k-hole ' + horizontal_c);

		// var height_c = $(document).height() - $(window).height();

	 //    $(window).scroll(function() {
	 //        // audio.play();
	 //        c.volume = 1 - $(window).scrollTop() / height_c;
	 //        // console.log('c vol ' + c.volume);
  //   	});
	});

		var e = $('#e').get(0);
		e.play();

	$('.container-e').scroll(function() {
		e.play();
		var horizontal_e = 1 - $(this).scrollLeft() / (this.scrollWidth - this.clientWidth); 
		e.volume = horizontal_e;
		console.log('k-hole ' + horizontal_e);
	});
		var fsharp = $('#fsharp').get(0);
		fsharp.pause();

	$('.container-e').scroll(function() {
		fsharp.play();
		var horizontal_fsharp = $(this).scrollLeft() / (this.scrollWidth - this.clientWidth); 
		fsharp.volume = horizontal_fsharp;
		console.log('k-hole ' + horizontal_fsharp);
	});

		var f = $('#f').get(0);
		// f.pause();

	$('.container-f').scroll(function() {
		f.play();
		var horizontal_f = 1 - $(this).scrollLeft() / (this.scrollWidth - this.clientWidth); 
		f.volume = horizontal_f;
		console.log('k-hole ' + horizontal_f);
	});
		var g = $('#g').get(0);
		// g.pause();

	$('.container-f').scroll(function() {
		g.play();
		var horizontal_g = $(this).scrollLeft() / (this.scrollWidth - this.clientWidth); 
		g.volume = horizontal_g;
		console.log('k-hole ' + horizontal_g);
	});

		var next = $('#next').get(0);
		// next.pause();

	$('.container-next').scroll(function() {
		next.play();
		var horizontal_next = $(this).scrollLeft() / (this.scrollWidth - this.clientWidth); 
		next.volume = horizontal_next;
		console.log('k-hole ' + horizontal_next);
	});

    //pause and play rain on mouse in and out of browser
    $(document).mouseleave(function() {
	// sus.pause();
	// c.pause();
	e.pause();
	// f.pause();
	// d.pause();
	// g.pause();
	// next.pause();
	fsharp.pause();
	});

    $(document).mouseenter(function() {
	// sus.play();
	});

    //pause and resume rain on click and scroll
	$(document).click(function() { 
	// sus.pause();
	// c.pause();
	e.pause();
	// f.pause();
	// g.pause();
	// next.pause();
	// d.pause();
	fsharp.pause();

	});

	$(document).scroll(function() { 
	// audioHardRain.play();
	// sus.play();
	// buzz.play();
	});

	// $(document).keydown(function() { 
	// sus.mute();
	// });

	//horizontal buzz pause on div exit
	// $('.container').mouseleave(function(){
	// c.pause();
	// e.pause();
	// f.pause();
	// g.pause();
	// });
});


//pause and play chimes on mouse in and out of browser
// $(document).mouseleave(function() {
// 	audio.pause();
// 	});

//     $(document).mouseenter(function() {
// 	audio.play();
// 	});

//pause and play div audios on and after clicks
// $(document).click(function() { 
// 	audio.pause();
// 	audio1a.pause();
// 	audio2.pause();
// 	audio2a.pause();
// 	audio3.pause();
// 	audio3a.pause();
// 	// audioH1.pause();
// 	// audioH2.pause();
// 	// audioH3.pause();
// 	// audioH4.pause();
// 	// audioH5.pause();
// 	// audioH6.pause();
// });








