

$(document).ready(function() {

    $("#formSelector").on('change' ,function(){

        var rows = [
        {
            question: "A:B",
            Yes: "test",
            No:"test",
            NA:"test",
            Comments:"test"

        }, 
        {
            question: "C:D",
            Yes:"est",
            No:"est",
            NA:"est",
            Comments:"est"
        }
        ];

        slickgrid.setData(rows);
        slickgrid.updateRowCount();
        slickgrid.render();

        var selectionBox=document.getElementsByTagName("select")[0];
        var currentOptionValue=selectionBox.options[selectionBox.selectedIndex].value;
        var formHeaderTag=document.getElementsByClassName('form_title')[0];
        formHeaderTag.firstElementChild.innerText="Form "+currentOptionValue;

    });

});

