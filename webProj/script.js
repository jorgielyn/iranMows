function UserInfo()
{
    document.getElementById("info").style.display = "block";
    document.getElementById("slip").style.display = "none";
    document.getElementById("accSet").style.display = "none";
    document.getElementById("help").style.display = "none";
}

function PaySlip()
{
    document.getElementById("info").style.display = "none";
    document.getElementById("slip").style.display = "block";
    document.getElementById("accSet").style.display = "none";
    document.getElementById("help").style.display = "none";
    
}

function AccountStng()
{
    document.getElementById("info").style.display = "none";
    document.getElementById("slip").style.display = "none";
    document.getElementById("accSet").style.display = "block";
    document.getElementById("help").style.display = "none";
}

function Help()
{
    document.getElementById("info").style.display = "none";
    document.getElementById("slip").style.display = "none";
    document.getElementById("accSet").style.display = "none";
    document.getElementById("help").style.display = "block";
}