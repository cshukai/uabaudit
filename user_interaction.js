

$(document).ready(function() {
    var deployment="http://204.232.200.16/uabs3db";
 
    $("#formSelector").on('change' ,function(){

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
            Yes:"",
            No:"",
            NA:"",
            Comments:""
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


    $('[name=loginButton]').click(function(){
        
        var username=document.getElementsByName('usrname')[0].value;
        var password=document.getElementsByName('password')[0].value;
        
        s3dbc.setDeployment(deployment);
        s3dbc.setJSONP(false);        
        s3dbc.login(username, password, function(err,key){
               if(err!==null){
                  alert(err);
               }
               console.log(key);
        });

    });

});

