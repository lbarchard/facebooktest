$( document ).ready( function () {
	window.fbAsyncInit = function() {
    FB.init({
      appId      : '139005159958824',
      xfbml      : true,
      version    : 'v2.8'
    });

	(function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk')); 

	// "use strict";
	//get rid of all that old stuff
	//window.location = "http://gt.bootcampcontent.com/pineapplesoda/project-one";
	//redirect to gitlab readme until we actually have something to serve up

// 	$("#facebook_button").on("click", function(d, s, id){
//      var js, fjs = d.getElementsByTagName(s)[0];
//      if (d.getElementById(id)) {return;}
//      js = d.createElement(s); js.id = id;
//      js.src = "//connect.facebook.net/en_US/sdk.js";
//      fjs.parentNode.insertBefore(js, fjs);
//    }(document, 'script', 'facebook-jssdk')); 
	
	$("#facebook_button").on("click", function(test){
         FB.ui(
	 		{
			method: 'share',
			href: 'https://developers.facebook.com/docs/'
			}, function(response){});
  	});
});