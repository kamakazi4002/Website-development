function passcheck() { //This declares the fucntion to check if the password is correct 


    //sets password
    var code = "Password1";


    //Captures password input from the user, using the textbox in the form
    var input = document.getElementById("userpass").value;


    if (input == code) {
        //Send user to admin page
        document.getElementById("adminlogin").action = "sysadmin.html";

    } else {
        document.getElementById("adminlogin").action = "notadmin.html";
        //tell user incorrect password, send to invalid page

    }
}
