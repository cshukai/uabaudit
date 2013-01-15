
var loginDiv=document.getElementById("s3dbLogin");
var formDiv=document.getElementsByClassName('container')[0]
document.body.insertBefore(loginDiv,formDiv);



$('<div id="questionsDiv"></div>').insertAfter('#form_title');

var columns = [
    {
        name: "Questions",
        field: "question",
        id: "question",  // In most cases field and id will have the same value.
        sortable: true
        
    }, 
    {
        name: "Yes",
        field: "Yes", // This and the following column read the same data, but can present it in a different way.
        id: "Yes",
        sortable: true
       
    },

    {
        name: "No",
        field: "No", // This and the following column read the same data, but can present it in a different way.
        id: "No",
        sortable: true
        
    },

     {
        name: "NA",
        field: "NA", // This and the following column read the same data, but can present it in a different way.
        id: "NA",
        sortable: true
      
    },

      {
        name: "Comments",
        field: "Comments", // This and the following column read the same data, but can present it in a different way.
        id: "Comments",
        sortable: true
        
    }    
];

var rows = [
    {
        question: "A:B",
        Yes: "",
        No:"",
        NA:"",
        Comments:""

    }, 
    {
        question: "C",
        Yes: "",
        No:"",
        NA:"",
        Comments:""
    }
];

var options={
	enableColumnReorder:false,
    editable:true,
    forceFitColumns:true
};
var slickgrid = new Slick.Grid("#questionsDiv", rows, columns,options);
slickgrid.setData(rows); // A different, empty or sorted array.
//slickgrid.updateRowCount();
slickgrid.render();


var formSelector=document.createElement('select');

var option=document.createElement('option');
option.value='A';
option.textContent='A';
formSelector.appendChild(option);


var option=document.createElement('option');
option.value='A';
option.textContent='A';
formSelector.appendChild(option);


var option=document.createElement('option');
option.value='B';
option.textContent='B';
formSelector.appendChild(option);

document.body.insertBefore(formSelector,document.getElementById("form_title"));