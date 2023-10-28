const optionselement = document.getElementById("options");
const optioniconelement = document.getElementById("optionbuttonicon");
var optionsOpen = false

$("#sendemail").click((e) => {
    let formData = {
        name: $("#contactname").val(),
        email: $("#contactemail").val(),
        description: $("#contactdescription").val(),
    }
    $.ajax({
        contentType: 'application/json',
        data: JSON.stringify(formData),
        success: function(data){
            console.log(data)
            console.log("device control succeeded");
        },
        error: function(){
            console.log("Device control failed");
        },
        processData: false,
        type: 'POST',
        url: '/contact'
    });
    // $.post( "/contact", formData);
})
$("#optionbutton").click((e) => {
    if (optionsOpen) {
        optioniconelement.setAttribute("src", "img/menu.png")
        optioniconelement.style.height = "100%"
        optionselement.style.height = "0"
        optionselement.style.overflow ="hidden";
    }else {
        optioniconelement.setAttribute("src", "img/close.png")
        optioniconelement.style.height = "60%"
        optionselement.style.height = "70%"
        optionselement.style.overflow ="auto";
        // optionselement
    }
    optionsOpen = !optionsOpen
})
$("input").focusout((e) => {
    window.scrollTo(0, 0);
})
$(".option").click((e) => {
    let to = e.target.getAttribute("to")
    let doc = document.getElementById(to)
    var top = doc.offsetTop - 70;
    $('#home').animate({scrollTop:top}, 500);
    optioniconelement.setAttribute("src", "img/menu.png")
    optioniconelement.style.height = "100%"
    optionselement.style.height = "0"
    optionselement.style.overflow ="hidden";
    optionsOpen = false
})
