



function q1 (){
	
	var flag = $('#flag1').val();
	
	var flagHash = "10f5e88e2d2bca2fefe6049e67a0847d";
		
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
	
	var flagHash = "37d153a06c79e99e4de5889dbe2e7c57";
		
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

function q3 (){
	
	var flag = $('#flag3').val();
	
	var flagHash = "3945e22d97895f89748c27e82b188450";
		
	var flagCheck = hashCheck(flag, flagHash);
	
	
	if (flagCheck == true) {
		
		
		$("#flagFeedback3").html("Good job! Try the next question.");
		
		$("#flagFeedback3").css("color", "#28a745");
		
		$("#submit3").css("transition-duration", "1.0s");
		
		$("#submit3").css("background-color", "#28a745");
		
		$("#flag3").css("transition-duration", "1.0s");
		
		$("#flag3").css("border-color", "#28a745");
		
	}
	else {
		
		$("#flagFeedback3").html("Sorry, try again.");
		
		$("#flagFeedback3").css("color", "#dc3545");
		
		$("#submit3").css("transition-duration", "1.0s");
		
		$("#submit3").css("background-color", "#dc3545");
		
		$("#flag3").css("transition-duration", "1.0s");
		
		$("#flag3").css("border-color", "#dc3545");
		
	}

}




function myFlag (){
	
	var flag = $('#flag').val();
	
	var flagHash = "c7af963914dbdcb3cbddb67cb7c0e0f4";
		
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