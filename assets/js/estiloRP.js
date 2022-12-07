var input_pass=document.querySelector("#passcode");
var eye_pass=document.querySelector(".eyes");

eye_pass.addEventListener('click',function(){
   if(input_pass.type=="password"){
       input_pass.type="text";
       eye_pass.classList.remove('fa-eye-slash');
       eye_pass.classList.add('fa-eye');
      input_pass.classList.add('warning');
   }
   else{
        input_pass.type="password";
       eye_pass.classList.remove('fa-eye');
       eye_pass.classList.add('fa-eye-slash');
      input_pass.classList.remove('warning');
   }
}); 

var confirm_input_pass=document.querySelector("#confirm_passcode");
var confirm_eye_pass=document.querySelector(".confirm_eyes");

confirm_eye_pass.addEventListener('click',function(){
   if(confirm_input_pass.type=="password"){
       confirm_input_pass.type="text";
       confirm_eye_pass.classList.remove('fa-eye-slash');
       confirm_eye_pass.classList.add('fa-eye');
      confirm_input_pass.classList.add('warning');
   }
   else{
        confirm_input_pass.type="password";
       confirm_eye_pass.classList.remove('fa-eye');
       confirm_eye_pass.classList.add('fa-eye-slash');
      confirm_input_pass.classList.remove('warning');
   }
});

var next_button= document.querySelectorAll(".next-btn");
var previous_button= document.querySelectorAll(".prev-btn");
var submit_button= document.querySelectorAll(".submit");
var main_div= document.querySelectorAll(".main");


let formnum = 0;
next_button.forEach(function(btn){
    btn.addEventListener('click',function(){
        if(!validate_form()){
          return false; 
        } 
        formnum++;
        updateform();
        
    });
      
   });
   
previous_button.forEach(function(btn){
    
    btn.addEventListener('click',function(){
        // if(!validate_form()) return false;
        formnum--;
       updateform();
    });
      
   }); 
   
   
submit_button.forEach(function(butn){
     butn.addEventListener('click',function(){
            if(!validate_form()) return false;
         var f_name = document.getElementById("f_name");
         var s_name = document.getElementById("s_name");
          formnum++;
          s_name.innerHTML = f_name.value;
            updateform();
     });
 });











function updateform(){
     main_div.forEach(function(forms){
         forms.classList.remove('active');
        });
        main_div[formnum].classList.add('active');
        
}


function validate_form(){
    
    var validate=true;
    var inputs= document.querySelectorAll(".main.active input");
    inputs.forEach(function(inpt){
         inpt.classList.remove('warning');
        if(inpt.hasAttribute("require")){
            if(inpt.value.length==0){
                validate=false;
                inpt.classList.add('warning');
            } 
        }
        
    });

    return validate;
    
}