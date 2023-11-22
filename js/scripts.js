

$("#num-19").on("click", function () {
    // all modifications with JavaScript
    $(this).append("<h2>World<br>Toilet Day</h2>");
    $(this).css("background-image", "url(imgs/wtd.webp)");
    $(this).css("background-size", "cover");
    $(this).css("color", "white");
    $(this).css("text-shadow", "1px 1px 2px rgba(0,0,0,0.5)");
    $(this).unbind("click");
    $("#num-19 .open").show()
})

$("#num-20").on("click", function () {
    // content modifications with JavaScript and design changes in CSS
    $("#num-20").append("<h2>World<br> Children's <br> Day</h2>");
    // create class rule in CSS to add/scale background image
    $("#num-20").addClass("child");
    $(this).unbind("click");
    $("#num-20 .open").show()
})

$("#num-21").on("click", function () {
    // same as above
    $("#num-21").append("<h2>World Television Day</h2>")
    $("#num-21").addClass("tv");
    $(this).unbind("click");
    $("#num-21 .open").show()
})

$("#num-25").on("click", function () {
    // Adding an anchor tag with a link to the UN website
    $("#num-25").append("<h2>International Day for the Elimination of Violence against Women</h2>")
    $("#num-25").append("<a href='https://www.un.org/en/observances/ending-violence-against-women-day'>Learn More</a>")
    $("#num-25").css("background", "url('imgs/no-excuse.png')");
    $(this).unbind("click");
    $("#num-25 .open").show()
})

$("#num-26").on("click", function () {
    // Example with <img> tag being added 
    $("#num-26").prepend("<img src='imgs/bus.png' class='drive'>")
    $("#num-26").append("<h2>World Sustainable Transport Day</h2>")
    $("#num-26").css("background", "#B7E5E5");
    $(this).unbind("click");
    $("#num-26 .open").show()
})

$("#num-22, #num-23, #num-24").on("click", function () {
    $(this).append("<h2>no special days on this date</h2>")
    $(this).unbind("click");
})

$(".box").prepend('<span class="material-symbols-outlined open">open_in_full</span>')
$(".open").hide()

var openBox = false;
$(".open").on("click", function () {
    if (openBox == false) {
        $(".box").hide()
        $(this).parent().css("transform", "scale(1.5)")
        $(this).parent().fadeIn()
        $(this).text('close')
        openBox = true;
    } else if (openBox == true) {
        console.log("closing")
        $(this).parent().css("transform", "scale(1)")
        $(".box").fadeIn();
        $(this).text('open_in_full')
        openBox = false;
    }
})