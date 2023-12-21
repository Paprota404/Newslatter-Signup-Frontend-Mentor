//if form invalid to zrob diva


console.log("yes")


function checkForm(event){
   console.log("yes");
   
   let form = document.getElementById("emai");
    console.log(form);
    console.log(event.target.elements.email.value)
    let input = event.target.elements.email.value
    if(input.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        //Popup
        console.log("GOOD");
        let container = document.querySelector(".container");
        container.style.display = "none";
        let imgmobile = document.getElementById("mobile");
        imgmobile.style.display = "none";
        let success = document.getElementById("success");
        success.style.display = "block";
    }
    else{
        console.log("bad");
        document.getElementById('valid').style.float = 'right';
        document.getElementById('valid').style.color = 'hsl(4, 100%, 67%)';
        document.getElementById('email').style.backgroundColor = "hsl(4, 100%, 67%)"
        if(!document.getElementById('valid').textContent){
        document.getElementById('valid').textContent += 'Valid Email Required';
        }
    }

}

///^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ e-mail



