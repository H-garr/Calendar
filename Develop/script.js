var container = $(".container");
var timearray = ["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"]
var timer = setInterval(displayTime,1000)
function displayTime(){
    $("#currentDay").text(moment())
}
// kept 24 hour so i was able to string it easier
function onSiteLoaded(){
    // start the loop

    var currentTime = moment().hour();
    for (i=9; i<18; i++){
        $("#testarea-" + i).val(localStorage.getItem(i))
        // if statements for the color of the box 
        if (i < currentTime){
            $("#testarea-" + i).addClass("past");
        }
            else if (i === currentTime){
                $("#testarea-" + i).addClass("present");
            }
            else if (i > currentTime){
                $("#testarea-" + i).addClass("future");
            }
            // end of if statements
    };
};
function save(event) {
    var userinfo = $(this).attr("id").split("-")[1];
    var userdata = $("#testarea-" + userinfo).val();
    console.log(userinfo,userdata);
    localStorage.setItem(userinfo, userdata);
};
window.onLoad = onSiteLoaded();
$(".saveBtn").on("click", save);