(function() {

   const emailField = document.querySelector("#identifierId");
    emailField.style.outlineColor = "red"
    emailField.style.outlineWidth = "10px"
    emailField.style.outlineStyle = "solid"

    let nextField = document.querySelector("#identifierNext");

    emailField.addEventListener("keypress", function() {
        if (emailField.value.length >= 4){
            nextField.style.outlineColor = "red"
            nextField.style.outlineWidth = "10px"
            nextField.style.outlineStyle = "solid"

            emailField.style.outlineWidth = "0px"
        }
    })
   
    setInterval(function() {
        let passwordField = document.querySelector("#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input");
        if(passwordField.style.outlineColor != "red"){
            passwordField.style.outlineColor = "red"
            passwordField.style.outlineWidth = "10px"
            passwordField.style.outlineStyle = "solid"
        }
        let passwordNextField = document.querySelector("#passwordNext")
        if (passwordField.value.length >= 7){
            passwordNextField.style.outlineColor = "red"
            passwordNextField.style.outlineWidth = "10px"
            passwordNextField.style.outlineStyle = "solid"
    
            passwordField.style.outlineWidth = "0px"
        }
   }, 100);

})();


