// nav menu style
var nav = $("#navbarSupportedContent");
var btn = $(".custom_menu-btn");
// btn.click
btn.click(function (e) {

    e.preventDefault();
    nav.toggleClass("lg_nav-toggle");
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style")
});


function getCurrentYear() {
    var d = new Date();
    var currentYear = d.getFullYear()

    $("#displayDate").html(currentYear);
}

getCurrentYear();
/* const extraDoctors = [
    { name: "Dr. rahul", specialty: "Orthopedic", experience: "12 Years", image: "" },
    { name: "Dr. ritu", specialty: "Pediatrician", experience: "9 Years", image: "doctor5.jpg" }
]; */
