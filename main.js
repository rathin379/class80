var names_array = [];

function submit(){
    for(var i = 1; i<=4; i++){
        var temp = document.getElementById("name_of_the_student_"+i).value;
        names_array.push(temp);
    }

    console.log(names_array)

    var names_display = [];
    var length = names_array.length;

    for(var i = 0; i<4; i++){
        names_display.push("<h2> Name of the Student: "+names_array[i]+"</h2>");
    }

    console.log(names_display)

    document.getElementById("display_name_with_commas").innerHTML = names_display;

    var remove = names_display.join(" ");
    document.getElementById("display_name_without_commas").innerHTML = remove;
}