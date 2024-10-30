function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('pwd').value;
    const confirmPassword = document.getElementById('cpwd').value;
    const alertContainer = document.getElementById('alert-container');
    alertContainer.innerHTML = '';
    if(!email){
        let x=document.createElement("p");
        x.style.width="100%";
        x.style.height="30px";
        x.style.backgroundColor="#ff7f7f";
        x.style.border="none";
        x.style.borderRadius="5px";
        x.style.color="red";
        x.textContent="A placeholder for alerts";
        x.style.marginBottom="20px";
        alertContainer.appendChild(x);
    }
    if(!password){
        let x=document.createElement("p");
        x.style.width="100%";
        x.style.height="30px";
        x.style.backgroundColor="#ffffc5";
        x.style.border="none";
        x.style.borderRadius="5px";
        x.innerHTML="A placeholder for alerts";
        x.style.marginBottom="20px";
        alertContainer.appendChild(x);
    }
    if(!confirmPassword){
        let x=document.createElement("p");
        x.style.width="100%";
        x.style.height="30px";
        x.style.backgroundColor="#98fb98";
        x.style.border="none";
        x.style.borderRadius="5px";
        x.innerHTML="A placeholder for alerts";
        x.style.marginBottom="20px";
        alertContainer.appendChild(x);
    }
}