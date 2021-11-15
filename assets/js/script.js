
var regexName=/^[a-zA-Z]+$/;
var isValidFirstName=false;
var isValidLastName=false;
var regexEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var isValidEmail=false;
// var regexMobile=/^[0-9]+$/;
// var pattern1Regex=/^\d{3}-\d{3}-\d{4}$/;
// var pattern2Regex=/^\d{3}.\d{3}.\d{4}$/;
// var pattern3Regex=/^\d{3} \d{3} \d{4}$/;
var isValidMobile=false;
var strongRegex = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;
var mediumRegex = /\d+/;
var enoughRegex = /[a-z]/;
var isValidpassword=false;
var isValidcpassword=false;
 
function onLoad()
{
var firstNameWarning=document.getElementById(firstNameWarning);
var lastNameWarning=document.getElementById(lastNameWarning);
var emailWarning=document.getElementById(emailWarning);
var mobileWarning=document.getElementById(mobileWarning);
var createWarning=document.getElementById(createWarning);
 var confirmWarning=document.getElementById(confirmWarning);
}
function onSubmitClick()
{
    //First Name Validation
    var firstName=document.getElementById("firstName").value;
    if(!regexName.test(firstName) && firstName !="")
    {
        firstNameWarning.classList.remove("warning-hide");
        firstNameWarning.setAttribute('title','only alphabets are allowed');
        isValidFirstName=false;
    }
    else if(regexName.test(firstName))
    {
        firstNameWarning.classList.add("warning-hide");
        isValidFirstName=true;
    }
    else if(firstName=="")
    {
        firstNameWarning.classList.remove("warning-hide");
        firstNameWarning.setAttribute('title','First Name is required');
        isValidFirstName=false;
    }
    
//LAST name Validation
var lastName=document.getElementById("lastName").value;
if(!regexName.test(lastName) && lastName !="")
{
    lastNameWarning.classList.remove("warning-hide");
    lastNameWarning.setAttribute('title','only alphabets are allowed');
    isValidLastName=false;
}
else if(regexName.test(lastName))
{
    lastNameWarning.classList.add("warning-hide");
    isValidLastName=true;
}
else if(lastName=="")
{
    lastNameWarning.classList.remove("warning-hide");
    lastNameWarning.setAttribute('title','Last Name is required');
    isValidLastName=false;
}
//Email validation
var email=document.getElementById("email").value;
if(!regexEmail.test(email) && email !="")
{
    emailWarning.classList.remove("warning-hide");
    emailWarning.setAttribute('title','invalid e-mail address');
    isValidEmail=false;
}
else if(regexEmail.test(email))
{
    emailWarning.classList.add("warning-hide");
    isValidEmail=true;
}
else if(email=="")
{
    emailWarning.classList.remove("warning-hide");
    emailWarning.setAttribute('title','E-mail is required');
    isValidEmail=false;
}
//MObile Validation
var mobile=document.getElementById("mobile").value;
var pattern1Regex= /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

if(pattern1Regex.test(mobile))
{
    mobileWarning.classList.add("warning-hide");
    isValidMobile=true;
}

else if (!pattern1Regex.test(mobile) )
{
    mobileWarning.classList.remove("warning-hide");
    mobileWarning.setAttribute('title',"mobile number should be in either XXXXXXXXXX or XXX-XXX-XXXX or XXX.XXX.XXXX or XXX XXX XXXX formats");
    isValidMobile=false;
    
} 
else {
    
    mobileWarning.classList.remove("warning-hide");
    mobileWarning.setAttribute('title',"mobile number is required");
    isValidMobile=false;
    
}

//Password Validation


var password=document.getElementById("password").value;
var strength = document.getElementById('strength');
if(password==""){
    createWarning.classList.remove("warning-hide");
    createWarning.setAttribute('title','Password cannot be empty');
    isValidpassword=false;
}
else if(password.length<8){
    createWarning.classList.remove("warning-hide");
    createWarning.setAttribute('title','Password should contain atleast 8 characters');
    isValidpassword=false;
}
 else {
    createWarning.classList.add("warning-hide");
    isValidpassword=true;
    
     if (strongRegex.test(password)) {
        strength.innerHTML = '<span style="color:green">Strong Password!</span>';
        
    } else if (mediumRegex.test(password)) {
        strength.innerHTML = '<span style="color:orange">Medium Password!</span>';
        
    } else {
        strength.innerHTML = '<span style="color:red">Weak Password!</span>';
        
    
    }
 

}
//Password Confirmation
var confirmpassword=document.getElementById("rpassword").value;
if(password!=confirmpassword)
{
    confirmWarning.classList.remove("warning-hide");
    confirmWarning.setAttribute('title','Password mismatch');
    isValidcpassword=false;
}
else{
    confirmWarning.classList.add("warning-hide");
    isValidcpassword=true;
}
//on successful completion
if(isValidFirstName && isValidMobile && isValidcpassword  && isValidpassword)
{
    alert("Registration completed!!Go to login page");
    //strength.innerHTML="";
    document.getElementById("sign-up form").reset();
    firstNameWarning.classList.add("warning-hide");
lastNameWarning.classList.add("warning-hide");
emailWarning.classList.add("warning-hide");
 mobileWarning.classList.add("warning-hide");
createWarning.classList.add("warning-hide");
 confirmWarning.classList.add("warning-hide");
}
}
function onCancelClick()
{
firstNameWarning.classList.add("warning-hide");
lastNameWarning.classList.add("warning-hide");
emailWarning.classList.add("warning-hide");
 mobileWarning.classList.add("warning-hide");
createWarning.classList.add("warning-hide");
 confirmWarning.classList.add("warning-hide");
}

function validatePassword(){
	var password=document.getElementById("password").value;
	var strength = document.getElementById('strength');
	strength.innerHTML = '';
	isValidpassword=true;
	
	if(password.length<8){
		createWarning.classList.remove("warning-hide");
		createWarning.setAttribute('title','Password should contain atleast 8 characters');
		isValidpassword=false;
	}
	 else {
		createWarning.classList.add("warning-hide");
		isValidpassword=true;
		 if (strongRegex.test(password)) {
			strength.innerHTML = '<span style="color:green">Strong Password!</span>';
		} else if (mediumRegex.test(password)) {
			strength.innerHTML = '<span style="color:orange">Medium Password!</span>';
		} else {
			strength.innerHTML = '<span style="color:red">Weak Password!</span>';
		}
	}
}