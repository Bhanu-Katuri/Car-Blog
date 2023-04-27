var emailIDorPhno=localStorage.getItem("mailIdOrphno");
var pass=localStorage.getItem("pass");
var form=document.forms;
function passvalid()
{
    var inputTags=document.querySelectorAll("input");
    var userGivenMailorNum=inputTags[0].value;
    var userGivenpassword=inputTags[1].value;
    var borders=document.getElementsByClassName("inputdiv")
    if(emailIDorPhno!=userGivenMailorNum && pass!=userGivenpassword)
    {
        document.body.style.backgroundImage="linear-gradient(75deg,red,red)";
        borders[0].style.borderColor="red";
        borders[1].style.borderColor="red";
        document.getElementById("status").innerHTML="UserId and password is Wrong";
    }
    else if(emailIDorPhno==userGivenMailorNum && pass!=userGivenpassword)
    {
        document.body.style.backgroundImage="linear-gradient(75deg,rgb(193,0,97),red)";
        borders[0].style.borderColor="royalblue";
        borders[1].style.borderColor="red";
        document.getElementById("status").innerHTML="Password is wrong";
    }
    else if(emailIDorPhno!=userGivenMailorNum && pass==userGivenpassword)
    {
        document.body.style.backgroundImage="linear-gradient(75deg,red,purple)";
        borders[0].style.borderColor="red";
        borders[1].style.borderColor="royalblue";
        document.getElementById("status").innerHTML="EmailId or Phone Number is Wrong";
    }
    else
    {
        form[0].action="../html/home.html";
        form[0].elements[2].type="Submit";
    }
}
function passvis()
{
    form[0].elements[1].type="text";
    document.getElementById("passVis").style.transition="transform 0.3s";
    document.getElementById("passVis").src="../Assert/panda5.png";
    document.getElementById("passVis").style.transform="rotateY(180deg)";
}
function passHid()
{
    form[0].elements[1].type="password";
    document.getElementById("passVis").style.transition="transform 0.3s";
    document.getElementById("passVis").style.transform="rotateY(0deg)";
    document.getElementById("passVis").src="../Assert/panda.jpeg";
}
function bigButton()
{
    form[0].elements[2].style.transform="scale(1.2)";
    form[0].elements[2].style.backgroundColor="purple";
}
function smallButton()
{
    form[0].elements[2].style.transform="scale(1)";
    form[0].elements[2].style.backgroundColor="transparent"
}