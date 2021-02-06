var container = $(".container");
var timearray = ["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"]

// converted to 24 hour so i was able to string it easier
function onSiteLoaded(){
    // start the loop
    $("#currentDay").text(moment())
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

            // giving the divs their attrs then rewriting the local data that will be stored inside them
            // var row = $("<div>");
            //     row.attr("class","row");
            //     container.append(row)
            // var label = $("<label>");
            //     label.attr("class","col-1 time-block hour");
            //     label.text(time[i])
            //     row.append(label)
            // var textArea = $("<textarea>");
            //     textArea.attr("class", "col-10 description" + timeClass);
            //     textArea.text(localStorage.getItem("btn" + i));
            //     row.append(textArea);
            // var button = $("<button>");
            //     button.attr("class", "col-1 saveBtn fa-save fa");
            //     button.attr("id", "btn" + i);
            //     row.append(button);
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