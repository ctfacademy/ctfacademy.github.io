
function hex2a(hexx) {
    var hex = hexx.toString();//force conversion
    var str = '';
    for (var i = 0; (i < hex.length && hex.substr(i, 2) !== '00'); i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}



function buttonFunction() {
      
	   
var myPassword = document.getElementById("password").value;

var username = document.getElementById("username").value;

var myalert = "637466617b7061795f617474656e74696f6e7d";

	
	var admin = "73726f6765727340636f6d70616e792e636f6d";
	
	var pass = "6d6967687479736869656c6431373736";
	
 var myString = hex2a(myalert);
 
  var myUser = hex2a(admin);
  
   var myPass = hex2a(pass);
	
if (username == myUser && myPassword == myPass) {
			

				
				$("#loginFeedback").html("Great job! The flag is below.");
				
				$("#loginFeedback").css("color", "#28a745");
				
				$("#signin").css("transition-duration", "1.0s");
		
				$("#signin").css("background-color", "#28a745");
				
				$("#username").css("transition-duration", "1.0s");
				
				$("#username").css("border-color", "#28a745");
				
				$("#password").css("transition-duration", "1.0s");
				
				$("#password").css("border-color", "#28a745");
				
				
				$("#flagDiv").addClass("loginFlag myLightBox p-4 my-4");
				
				$("#successFlag").html(myString);
				
			
   
}



else {
	
	
	$("#loginFeedback").html("Incorrect username/password. Try again.");
	
	
		
		$("#loginFeedback").css("color", "#dc3545");
		
		$("#signin").css("transition-duration", "1.0s");
		
		$("#signin").css("background-color", "#dc3545");
		
		$("#username").css("transition-duration", "1.0s");
		
		$("#username").css("border-color", "#dc3545");
		
		$("#password").css("transition-duration", "1.0s");
		
		$("#password").css("border-color", "#dc3545");
	
	
}
	   
	   
}

function q1 (){
	
	var flag = $('#flag1').val();
	
	var flagHash = "21232f297a57a5a743894a0e4a801fc3";
		
	var flagCheck = hashCheck(flag, flagHash);
	
	
	if (flagCheck == true) {
		
		
		$("#flagFeedback1").html("Good job! Try the next question.");
		
		$("#flagFeedback1").css("color", "#28a745");
		
		$("#submit1").css("transition-duration", "1.0s");
		
		$("#submit1").css("background-color", "#28a745");
		
		$("#flag1").css("transition-duration", "1.0s");
		
		$("#flag1").css("border-color", "#28a745");
		
	}
	else {
		
		$("#flagFeedback1").html("Sorry, try again.");
		
		$("#flagFeedback1").css("color", "#dc3545");
		
		$("#submit1").css("transition-duration", "1.0s");
		
		$("#submit1").css("background-color", "#dc3545");
		
		$("#flag1").css("transition-duration", "1.0s");
		
		$("#flag1").css("border-color", "#dc3545");
		
	}

}


function q2 (){
	
	var flag = $('#flag2').val();
	
	var flagHash = "bbb2c5e63d2ef893106fdd0d797aa97a";
		
	var flagCheck = hashCheck(flag, flagHash);
	
	
	if (flagCheck == true) {
		
		
		$("#flagFeedback2").html("Good job! Try the next question.");
		
		$("#flagFeedback2").css("color", "#28a745");
		
		$("#submit2").css("transition-duration", "1.0s");
		
		$("#submit2").css("background-color", "#28a745");
		
		$("#flag2").css("transition-duration", "1.0s");
		
		$("#flag2").css("border-color", "#28a745");
		
	}
	else {
		
		$("#flagFeedback2").html("Sorry, try again.");
		
		$("#flagFeedback2").css("color", "#dc3545");
		
		$("#submit2").css("transition-duration", "1.0s");
		
		$("#submit2").css("background-color", "#dc3545");
		
		$("#flag2").css("transition-duration", "1.0s");
		
		$("#flag2").css("border-color", "#dc3545");
		
	}

}



function myFlag (){
	
	var flag = $('#flag').val();
	
	var flagHash = "9acdb9ad38f2af88afffba97e2f85cd4";
		
	var flagCheck = hashCheck(flag, flagHash);
	
	
	if (flagCheck == true) {
		
		
		$("#flagFeedback").html("Good job! <a href='answer.htm'>Click here for the explaination.</a>");
		
		$("#flagFeedback").css("color", "#28a745");
		
		$("#submit").css("transition-duration", "1.0s");
		
		$("#submit").css("background-color", "#28a745");
		
		$("#flag").css("transition-duration", "1.0s");
		
		$("#flag").css("border-color", "#28a745");
		
		
		
	}
	else {
		
		$("#flagFeedback").html("Sorry, try again.");
		
		$("#flagFeedback").css("color", "#dc3545");
		
		$("#submit").css("transition-duration", "1.0s");
		
		$("#submit").css("background-color", "#dc3545");
		
		$("#flag").css("transition-duration", "1.0s");
		
		$("#flag").css("border-color", "#dc3545");
		
	}

}