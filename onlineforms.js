
var loginDiv=document.getElementById("s3dbLogin");
var formDiv=document.getElementsByClassName('container')[0]
document.body.insertBefore(loginDiv,formDiv);



$('<div id="questionsDiv" style="height: 500px; overflow:scroll"></div>').insertAfter('#form_title');

var columns = [
    {
        name: "question",
        field: "question",
        id: "question",  // In most cases field and id will have the same value.
        // sortable: true,
        editor: Slick.Editors.Text
        
    }, 
    {
        name: "Yes",
        field: "Yes", // This and the following column read the same data, but can present it in a different way.
        id: "Yes",
        // sortable: true,
        editor: Slick.Editors.Text
       
    },

    {
        name: "No",
        field: "No", // This and the following column read the same data, but can present it in a different way.
        id: "No",
        // sortable: true,
        editor: Slick.Editors.Text
        
    },

     {
        name: "NA",
        field: "NA", // This and the following column read the same data, but can present it in a different way.
        id: "NA",
        // sortable: true,
        editor: Slick.Editors.Text
      
    },

      {
        name: "Comments",
        field: "Comments", // This and the following column read the same data, but can present it in a different way.
        id: "Comments",
        // sortable: true,
        editor: Slick.Editors.Text
        
    }    
];

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

var options={
	enableColumnReorder:false,
	enableCellNavigation: true,
     editable:true,
     forceFitColumns:true
};
var slickgrid = new Slick.Grid("#questionsDiv", rows, columns,options);
// slickgrid.setData(rows); // A different, empty or sorted array.
// slickgrid.updateRowCount();
// slickgrid.render();

  // slickgrid.onSort.subscribe(function(e, args){ // args: sort information. 

  //       var field = args.columns[0].field;

  //       rows.sort(function(a, b){
  //           var result = 
  //               a[field] > b[field] ? 1 :
  //               a[field] < b[field] ? -1 :
  //               0
  //           ; 

  //           return args.sortAsc ? result : -result;

  //       });

  //       slickgrid.setData(rows);
  //       slickgrid.updateRowCount();
  //       slickgrid.render();         
  //   });

var formSelector=document.createElement('select');
formSelector.id='formSelector';

var option=document.createElement('option');
option.value='A';
option.textContent='A';
formSelector.appendChild(option);


var option=document.createElement('option');
option.value='C';
option.textContent='C';
formSelector.appendChild(option);


var option=document.createElement('option');
option.value='B';
option.textContent='B';
formSelector.appendChild(option);

document.body.insertBefore(formSelector,document.getElementById("form_title"));