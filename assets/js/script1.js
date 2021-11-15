
var regexName=/^[a-zA-Z]+$/;
var isValidFirstName=false;
var isValidpassword=false;

function onLoad()
{
var firstNameWarning=document.getElementById(firstNameWarning);

var createWarning=document.getElementById(createWarning);
 
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
    


//Password Validation
var password=document.getElementById("password").value;
if(password==""){
    createWarning.classList.remove("warning-hide");
    createWarning.setAttribute('title','Password cannot be empty');
    isValidpassword=false;
}
else if (password.length<8) {
    createWarning.classList.remove("warning-hide");
    createWarning.setAttribute('title','Password must contain atleast 8 characters');
    isValidpassword=false;
    
} else {
    createWarning.classList.add("warning-hide");
    isValidpassword=true;
}
//on successful completion
if(isValidFirstName  && isValidpassword)
{
    firstNameWarning.classList.add("warning-hide");
    createWarning.classList.add("warning-hide");
    document.getElementById("sign-up form").reset();
    alert("Login Successfully!!");
    
}


}
