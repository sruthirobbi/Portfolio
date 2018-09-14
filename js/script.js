$(document).ready(function(){
	 $("#restart").queue(function() {  
	    var original = $(this);
	    var newClass = original.clone(true);
	    setInterval(function() {
	        original.before(newClass);
	        $("." + original.attr("class") + ":last").remove();
	    },47000);
	});
	 // hamburger toggle function
	  $(".hamburger").click(function(){
	    $(this).toggleClass("is-active");
	    $('#menuList').toggle();
	  });

	  $('#menuList').hide();
	  // onclick scroll to about me section
  	$("#mouseScroll").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#AboutMePage").offset().top
	    }, 1000);
	});
  // onclick scroll to Skills section
  	$("#skillsScroll").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#skillsPage").offset().top
	    }, 1000);
	});
	// onclick scroll to work section
	$("#workScroll").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#ProjectsPage").offset().top
	    }, 1000);
	});
	// onclick scroll to contact section
	$(".contact .view_experince").click(function() {
	    $('html, body').animate({
	        scrollTop: $(".contactPage").offset().top
	    }, 1000);
	});

	// Menu
	$("#aboutMenu").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#AboutMePage").offset().top
	    }, 1000);
	});

	$("#ResumeMenu").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#AboutMePage").offset().top
	    }, 1000);
	});

	$("#skillsMenu").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#skillsPage").offset().top
	    }, 1000);
	});
	$("#homeMenu").click(function() {
	    $('html, body').animate({
	        scrollTop: $(".homePage").offset().top
	    }, 1000);
	});
	$("#WorkMenu").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#ProjectsPage").offset().top
	    }, 1000);
	});

	$("#contactMenu").click(function() {
	    $('html, body').animate({
	        scrollTop: $(".contactPage").offset().top
	    }, 1000);
	});


	 // work box animation
	  $(".hover").mouseleave(
	    function () {
	      $(this).removeClass("hover");
	    }
	  );

	  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$(".contact").hide();
		$("#workScroll").hide();
		$("#skillsScroll").hide();
		
		} else {
		 // Do something else
		}


});