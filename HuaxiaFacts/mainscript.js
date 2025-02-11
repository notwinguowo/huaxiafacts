const isLogin = false

function defaultAction (){
    if (isLogin == false) {
        window.alert("記得登入喔")
    } 
    
    else {
        window.alert("歡迎回來")
    }
}

function cookielol() {
var loginUSN = Cookies.get('username')

if (loginUSN) {
    console.log("Logged In")
}
else {
    let option = prompt("Not logged in, create dummy account?", "yes")
    let rloption = option.toLowerCase()
        if (rloption == "yes"){Cookies.set("username", true, {expires:7})}else if (rloption == "no"){}
}
}

function windowopen() {
    window.open("localhost:5501/gamemenu", "_blank", "popup=yes");
}