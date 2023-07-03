function letters(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode == 32 || charCode == 46)
        return true;
    else {
        //alert("Please Enter valid input");
        return false;
    }
}
function numbers1(evt) {
    
    var charCode = (evt.which) ? evt.which : event.keyCode
    if ((charCode >= 47 && charCode <= 57)) {
            return true;
    }
    else {

        return false;
    }
}
function email() {
    var c,k=0,at=0;
    var x = document.getElementById("TextBox6");
    var val = x.value;
    //alert(cno[0]>=6)
    for (i = 0; i < val.length; i++) {
        c = val.charCodeAt(i)
        if (c == 46)
            k++;
        if (c == 64)
            at++;
    }
    if (k == 2 || at==2) {
        alert("Please Enter the Valid Valid E-Mail")
    }
    
}
function contact(evt) {
    var x = document.getElementById("TextBox5");
    var cno = x.value;
    var charCode = (evt.which) ? evt.which : event.keyCode
    if ((charCode >= 47 && charCode <= 57)) {
        
        if (cno.length <= 9) {
            if (cno.length == 1) {
                if (cno[0] >= 6) {


                    //alert("Length " + cno.length)
                    document.getElementById("TextBox5").innerHTML = "";
                    return true;

                }
                else {
                    x.value = "";
                    alert("Please Enter the Valid Contact Number")
                    return false;
                }
            }
            else {

                return true;
            }
        }
       

        else {

            return false;
        }
    }
    else {

        return false;
    }
}
function aadharno(evt) {
    var cno = document.getElementById("TextBox5").value;
    var charCode = (evt.which) ? evt.which : event.keyCode
    if ((charCode >= 47 && charCode <= 57)) {

        //alert("Please Enter valid input " + cno.length);
        if (cno.length <= 11) {
            // alert("Length " + cno.length);
            return true;

        }
        else
            return false;
    }
    else {

        return false;
    }
}

function pincode(evt) {
    var x = document.getElementById("TextBox4");
    var cno = x.value;
    var charCode = (evt.which) ? evt.which : event.keyCode
    if ((charCode >= 47 && charCode <= 57)) {

        if (cno.length <= 5) {
            if (cno.length == 1) {
                if (cno[0] == 6) {


                    //alert("Length " + cno.length)
                    document.getElementById("TextBox5").innerHTML = "";
                    return true;

                }
                else {
                    x.value = "";
                    alert("Please Enter the Valid Pincode Number")
                    return false;
                }
            }
            else {

                return true;
            }
        }


        else {

            return false;
        }
    }
    else {

        return false;
    }
}
