
function hex2a(hexx) {
    var hex = hexx.toString();//force conversion
    var str = '';
    for (var i = 0; (i < hex.length && hex.substr(i, 2) !== '00'); i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
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
	
	var flagHash = "0b730c15ed96a9f034c274e2c8d8328b";
		
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