
var loginDiv=document.getElementById("s3dbLogin");
var formDiv=document.getElementsByClassName('container')[0]
document.body.insertBefore(loginDiv,formDiv);

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

document.body.appendChild(formSelector);

