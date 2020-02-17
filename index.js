
document.getElementById('send').addEventListener('click',function(e){
    let myform=document.querySelectorAll(".input")
    let inputname=document.getElementById('fname')
    let regexname= /^[a-zA-Z-\s]+$/ 
    
    var email=document.getElementById('email')   
    let regexemail =  /^([a-z\d\.-]{3,})@([a-z]+)\.([a-z]{2,6})$/
  
    let pass=document.getElementById('pws')
    let regpasword=/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]){9,}/ 
   
    let commet=document.getElementById('commentaire')
    
    for(let i=0;i<myform.length;i++)
    {
        if(myform[i].value.trim==""){
            window.alert("One of the inputs is empty")
            
        }
    }
       
     if(regexname.test(inputname.value)==false){
         window.alert("le nom doit comporter des lettre,de tirets uniquement")
    }else if(regexemail.test(email.value)==false){
         window.alert('Doesnt have a valid e-mail adress')    
    }else  if(regpasword.test(pass.value)==false){
        window.alert("The password must be a combination of charatacters , numbers and at least a capital letter")
    }
    else{
        window.alert('thank you!')
    }
})
document.getElementById('reset').addEventListener('click',function(e){
    let input=document.getElementsByClassName('input')
    for(let i=0;i<input.length; i++)
        input[i].value=''
})
