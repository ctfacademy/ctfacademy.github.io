function q1 (){
	
	var flag = $('#flag1').val();
	
	var flagHash = "0507de5c07e980ee1f4d199cf3431471";
		
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



function myFlag (){
	
	var flag = $('#flag').val();
	
	var flagHash = "c8b193c18ff28b2305c4529ab17fd947";
		
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