// initial slick-grid demo data
var rowSet={
    'A':[
        {
            question: "A:B",
            Yes: "",
            No:"",
            NA:"",
            Comments:""

        }, 
        {
            question: "C:D",
            Yes:"",
            No:"",
            NA:"",
            Comments:""
        },

         {
            question: "A1:B1",
            Yes:"",
            No:"",
            NA:"",
            Comments:""
        },
        ],

     'B':[
        {
            question: "E:F",
            Yes: "",
            No:"",
            NA:"",
            Comments:""

        }, 
        {
            question: "G:H",
            Yes:"",
            No:"",
            NA:"",
            Comments:""
        },
        .
      
        {
            question: "B1:C1",
            Yes:"",
            No:"",
            NA:"",
            Comments:""
        }

        ],

       'C':[
        {
            question: "I",
            Yes: "",
            No:"",
            NA:"",
            Comments:""

        }, 
        {
            question: "J",
            Yes:"",
            No:"",
            NA:"",
            Comments:""
        },
      
        {
            question: "K",
            Yes:"",
            No:"",
            NA:"",
            Comments:""
        }

        ],

};


var loginDiv=document.getElementById("s3dbLogin");
var formDiv=document.getElementsByClassName('container')[0]
document.body.insertBefore(loginDiv,formDiv);
$('<div id="questionsDiv" style="height: 500px; overflow:scroll"></div>').insertAfter('#form_title');


// defining slick-grid columns
var columns = [
    {
        name: "question",
        field: "question",
        id: "question",  
        
        editor: Slick.Editors.Text
        
    }, 
    {
        name: "Yes",
        field: "Yes", 
        id: "Yes",
        editor: Slick.Editors.Text
      
    },

    {
        name: "No",
        field: "No", 
        id: "No",
        editor: Slick.Editors.Text
        
    },

     {
        name: "NA",
        field: "NA", 
        id: "NA",
        editor: Slick.Editors.Text
      
    },

      {
        name: "Comments",
        field: "Comments", 
        editor: Slick.Editors.Text
        
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
        question: "C:D",
        Yes: "",
        No:"",
        NA:"",
        Comments:""
    },

    {
        question: "A1:B1",
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