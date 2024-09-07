let form=document.querySelector("form");
let success_msg=document.querySelector(".success-msg");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let firstName=document.querySelector("#input-firstname");
    let lastName=document.querySelector("#input-lastname");
    let email=document.querySelector("#email");
    let quiry=document.querySelector('input[name=option]').checked;
    console.log(quiry)
    let msgs=document.querySelector("#messages");
    let consent=document.querySelector("#chk-box").checked;
    console.log(firstName);
    // console.log("form submitted")
    // console.log(quiry)
    let isValid=true;

    if(firstName.value===""){
        isValid=false;
        let p=document.querySelector(".firstname-alert");
            p.style.display="block";
           firstName.classList.add("red-border");
    }

    if(lastName.value===""){
        isValid=false
        let p=document.querySelector(".lastname-alert");
        p.style.display="block";
       lastName.classList.add("red-border");
    }
    let mail=email.value;
   if(mail===""){
    isValid=false
    let p=document.querySelector(".email-alert");
    p.style.display="block";
     email.classList.add("red-border");
   } else if(isValidEmail(mail)==false){
    isValid=false
    let p=document.querySelector(".email-alert");
    p.style.display="block";
     email.classList.add("red-border");
   }
    
   if(!quiry){
    isValid=false;
    let p=document.querySelector(".radio-alert");
    p.style.display="block";
    //  email.classList.add("red-border");
   }



   if(msgs.value===""){
    isValid=false
    let p=document.querySelector(".message-alert");
    p.style.display="block";
     msgs.classList.add("red-border");
    }
    if(!consent){
        isValid=false;
        let p=document.querySelector(".consent-alert");
        p.style.display="block";
        
    }

    if(isValid){
      form.reset();
      success_msg.style.display="block";
      console.log("form submitted");

    }
});


function isValidEmail(email){
  let  validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ;
  return validRegex.test(email);
}
// console.log(isValidEmail(email))
