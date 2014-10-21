function validateForm(){

    var whitespace = "Field must not contain whitespace characters.";
    var blank = "Field must not be blank.";
    var trueNum = "Field must contain numerical characters.";
    var falseNum = "Field must not contain numerical characters.";
    var trueAlpha = "Field must contain alphabetical characters.";
    var falseAlpha = "Field must not contain alphabetical characters.";
    
    var first = document.getElementById("firstName").value;
    var last = document.getElementById("lastName").value;
    var age = document.getElementById("ageInput").value;
    var edu = document.getElementById("edu").value;
    var state = document.getElementById("state").value;
    var occ = document.getElementById("occ").value;
    var hobby = document.getElementById("hobby").value;
    var num = document.getElementById("num").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var explain = document.getElementById("expain").value;

    
    //*******************************
    //START NAME VALIDATION (nameerr)
    //*******************************
    document.getElementById("nameerr").innerHTML='';
    
    //not alphabet, is whitespace
    if((!first.match(/^[a-zA-Z]+$/)
        || !last.match(/^[a-zA-Z]+$/))){
        document.getElementById("nameerr").innerHTML=trueAlpha;
        
        if(first.match(".*\\d.*")
           || last.match(".*\\d.*"))
            document.getElementById("nameerr").innerHTML=falseNum;
        
        if(first.match(" ")
           || last.match(" "))
            document.getElementById("nameerr").innerHTML=whitespace;
    }
    
    //Matches Empty String
    if((!first.match(/\S/) || (!last.match(/\S/))))
        document.getElementById("nameerr").innerHTML=blank;
    
    //***********************************
    //START GENDER VALIDATION (gendererr)
    //***********************************
    document.getElementById("gendererr").innerHTML='';
    
    if((!document.getElementById('male').checked) && (!document.getElementById('female').checked)) {
        document.getElementById("gendererr").innerHTML="Select your gender";
    }
    
    //*****************************
    //START AGE VALIDATION (ageerr)
    //*****************************
    document.getElementById("ageerr").innerHTML='';

    //if not a number, age is between 1 and 100
    if(isNaN(age) || age < 1 || age > 100){
        document.getElementById("ageerr").innerHTML="Invalid age specified";
        
        if((age.match(/[a-zA-Z]+$/)))
            document.getElementById("ageerr").innerHTML=falseAlpha;
        
        if(age.match(" "))
            document.getElementById("ageerr").innerHTML=whitespace;
    }
    
    //if empty
    if((!age.match(/\S/)))
        document.getElementById("ageerr").innerHTML=blank;
    
    //*******************************
    //START EDU VALIDATION (eduerr)
    //*******************************
    document.getElementById("eduerr").innerHTML='';
    
    if(edu.match("empty")){
        document.getElementById("eduerr").innerHTML="Select your education.";
    }
    
    //*********************************
    //START STATE VALIDATION (stateerr)
    //*********************************
    document.getElementById("stateerr").innerHTML='';
    
    if(state.match("empty")){
        document.getElementById("stateerr").innerHTML="Select your state.";
    }
    
    //************************************
    //START OCCUPATION VALIDATION (occerr)
    //************************************
    document.getElementById("occerr").innerHTML='';
    
    if(!occ.match(/\S/))
        document.getElementById("occerr").innerHTML=blank;
    
    //*********************************
    //START HOBBY VALIDATION (hobbyerr)
    //*********************************
    document.getElementById("hobbyerr").innerHTML='';
    
    if(!hobby.match(/\S/))
        document.getElementById("hobbyerr").innerHTML=blank;
    
    //*********************************
    //START PHONE VALIDATION (phoneerr)
    //*********************************
    document.getElementById("phoneerr").innerHTML='';
	
    if(!num.match(/\d+.\d+.\d+/)){
        document.getElementById("phoneerr").innerHTML="Incorrect format";
    
        if((num.match(/[a-zA-Z]+$/)))
            document.getElementById("phoneerr").innerHTML=falseAlpha;

    	if(!num.match(/\S/))
        	document.getElementById("phoneerr").innerHTML=blank;
    }
    
    var defaultArea = "618";
    if(num.length == 7){
        num = defaultArea + num;
    }
        
    var areaCode = num.substring(0, 2);
    var endNumber = num.substring(3, 9);
        
    num.value = areaCode + endNumber;
    
    //*********************************
    //START EMAIL VALIDATION (emailerr)
    //*********************************
    document.getElementById("emailerr").innerHTML='';
    
    if(!email.match("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$")){
       document.getElementById("emailerr").innerHTML="Incorrect format";
	
	if(!email.match(/\S/))
		document.getElementById("emailerr").innerHTML=blank;
    }
    
    //*************************************
    //START SUBJECT VALIDATION (subjecterr)
    //*************************************
    document.getElementById("subjecterr").innerHTML='';
    
    if(!subject.match(/\S/))
        document.getElementById("subjecterr").innerHTML=blank;
    
    //*************************************
    //START EXPLAIN VALIDATION (explainerr)
    //*************************************
    document.getElementById("explainerr").innerHTML='';
    
    if(!explain.match(/\S/))
        document.getElementById("explainerr").innerHTML=blank;
    
}


