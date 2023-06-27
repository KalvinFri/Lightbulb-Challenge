// Setting Value
let lightOn = false

// Clicky Thingy (On)
function lightToggle() {
    if (lightOn == false) {
    lightOn = true
document.getElementById("OnBulb").style.visibility = "visible"
document.getElementById("OffBulb").style.visibility = "hidden"
return
} 

// Clicky Thingy (Off)
 if (lightOn == true) {
     lightOn = false
document.getElementById("OnBulb").style.visibility = "hidden"
document.getElementById("OffBulb").style.visibility = "visible"
return
}
}