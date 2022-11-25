function validateForm() {
  let first_name = document.forms["registration"]["fname"].value;
  let last_name =document.forms["registration"]["lname"].value;
  let email=document.forms["registration"]["email"].value;
  let password=document.forms["registration"]["password"].value;                                                                    
  let confirm_password=document.forms["registration"]["confirmpassword"].value;

  // console.log(document.forms.value)
  
  // console.log(first_name)
  if (first_name.trim() == "") {
     alert(" First Name must be filled out");
    // document.getElementById("errfname").innerHTML="Please fill your first name"
    return false;
  }
  if (last_name.trim()==""){
    alert("Last Name must be filled out");
    return false;
  }
  if (email.trim()==""){
    alert("Email must be filled out");
    return false;
  }

  const emailIsValid = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  if (!emailIsValid(email)) {
    alert("Please enter a valid email address.");
    
    return false;
  }
  
  if (password.trim()==""){
    alert("Password must be filled out");
    return false;
  }
  if (confirm_password.trim()==""){
    alert("Please confirm your password");
    return false;
  }
  if(password != confirm_password){
    alert("Confirm password is not macthing")
    return false;
  }
  if (document.getElementById("agreed").checked == false){

    alert("please agree to the terms and conditions")
    return false;
    
  }



  console.log("first name is ",first_name);
  console.log("last name is",last_name);
  console.log("email address is",email);
  return true;
}  