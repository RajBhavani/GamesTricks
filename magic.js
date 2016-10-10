$(document).ready(function(){

	//Hide all questions//
$('.guessnumberform').hide();

//show the first question//
$("#s1").show();
$('.guessnumberform #Next1').click(function(){

	//alert("hi");
	//var s1val = 1 + Math.floor(Math.random() * 40); 
	//
	$("#s1").hide();
	$("#s2").show();
	event.preventDefault();

});
//End First Question
//$("#s2").fadeIn(3000);
$('.guessnumberform #Next2').click(function(){
     //var s = Math.floor((Math.random() * 40)+ 1);
      //alert(s);

      var randomenvenno = 0;
      do
      {
      	randomenvenno = Math.floor((Math.random() * 40)+ 1);

      } while(randomenvenno % 2 ==1);
      //return randomenvenno;
	$('#lblmsg').val(randomenvenno);
	
	$("#s1").hide();
	$("#s2").hide();	
	document.getElementById("demo").innerHTML = "Add " +randomenvenno;
	$("#s3").show();
	event.preventDefault();
	
});
//$("#q3").show();

$('.guessnumberform #Next3').click(function(){

	
 


	$("#s1").hide();
	$("#s2").hide();
	$("#s3").hide();
	$("#s4").show();
	event.preventDefault();
	
});

$('.guessnumberform #Next4').click(function(){

	$("#s1").hide();
	$("#s2").hide();
	$("#s3").hide();
	$("#s4").hide();
	$("#s5").show();
	event.preventDefault();
	
});
$('.guessnumberform #submit').click(function(){

	var x = $('#lblmsg').val();
	var y = x /2;
		
	$("#results").html('<h3>Now You have '+ y +'. Great Job!</h3><a href="index.html">TRY Again</a>');
	
   	$("#s1").hide();
	$("#s2").hide();
	$("#s3").hide();
	$("#s4").hide();
	$("#s5").hide();
	$("#results").show();
	event.preventDefault();
	});

});





