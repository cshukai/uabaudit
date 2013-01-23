
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
        question: "E",
        Yes: "",
        No:"",
        NA:"",
        Comments:""

    }, 
    {
        question: "F",
        Yes: "",
        No:"",
        NA:"",
        Comments:""
    },

    {
        question: "G",
        Yes: "",
        No:"",
        NA:"",
        Comments:""

    }, 
    {
        question: "H",
        Yes: "",
        No:"",
        NA:"",
        Comments:""
    }
];

var options={
	enableColumnReorder:false,
	enableCellNavigation: true,
     editable:true,
     forceFitColumns:true
};


var slickgrid = new Slick.Grid("#questionsDiv", rows, columns,options);


slickgrid.setCellCssStyles("question_highlight", {
   0: {
        question: "question_highlight"
       
       },

   2: {
         question: "question_highlight"
       }
});


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