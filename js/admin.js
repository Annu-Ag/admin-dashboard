//JS

var dropDownContent = document.getElementById('newDropDown');
dropDownContent.style.display = 'none';
function mouseOverToggle() {
    dropDownContent.style.display = "";
}
function mouseOutToggle() {
    dropDownContent.style.display = "none";
}


document.getElementsByClassName("items").onmouseover = function () {
    mouseOver();
}
function mouseOver() {
    document.getElementsByClassName("demo").style.color = "black";
}
//search by user name logic
function searchFunc() {
    var filter = document.getElementById('myinput').value.toUpperCase();
    var myTable = document.getElementById('myTable');
    var tr = myTable.getElementsByTagName('tr');
    for (var i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName('td')[0];
        if (td) {
            var textvalue = td.textContent || td.innerHTML;
            if (textvalue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            }
            else {
                tr[i].style.display = "none";
            }
        }
    }
}

