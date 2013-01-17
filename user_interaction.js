

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
            Yes: "est",
            No:"est",
            NA:"est",
            Comments:"est"
        }
        ];
        
        slickgrid.setData(rows); // A different, empty or sorted array.
        slickgrid.updateRowCount();
        slickgrid.render();
        
    });

});

