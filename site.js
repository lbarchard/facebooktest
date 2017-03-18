/*jslint node:false*/
/*browser:true*/

$( document ).ready( function () {
	"use strict";
	//get rid of all that old stuff
	//window.location = "http://gt.bootcampcontent.com/pineapplesoda/project-one";
	//redirect to gitlab readme until we actually have something to serve up

$('#add-user').on("click", function(event){
  	event.preventDefault();


	$("#facebook_button").on("click") function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk')); 
	
} );