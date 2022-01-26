function validform() {
    var firstName = document.forms["validForm"]["fname"].value;
    var lastName = document.forms["validForm"]["lname"].value;
    var eMail = document.forms["validForm"]["email"].value;
    var telNo = document.forms["validForm"]["telno"].value;
    var staOrg = document.forms["validForm"]["staorg"].value;
    var DOB = document.forms["validForm"]["dateofbirth"].value;
    var gn = document.forms["validForm"]["gender"];


    if(firstName==""){
        alert("input first name");
        return false;
    }

    else if(lastName==""){
        alert("input last name");
        return false;
    }
    else if(eMail==""){
        alert("input email");
        return false;
    }
    
    else if(staOrg==""){
        alert("input State of Origin ");
        return false;
    }
    else if(telNo==""){
        alert("input telephone No");
        return false;
        }
    
    else if(DOB==""){
        alert("input date of birth ");
        return false;
    }
    else if ((gn[0].checked==false)&&(gn[1].checked==false)&&(gn[2].checked==false)&&(gn[3].checked==false)){
        alert("select a Gender");
        return false;
    }

    else{
        true;
    }
}
