function hashCheck(flag, hash) {
	
	var lowercaseFlag = flag.toLowerCase();
	
	var flagHash = $.MD5(lowercaseFlag);
	
	if (flagHash == hash) {
		
		return true;
		
	}
	else {
		
		return false;
		
		
	}
	
	
}