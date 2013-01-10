//audit
//dev: https://dl-web.dropbox.com/get/http/bstation/UABaudit.html?w=09dbba7c

console.log('UAB Audit');

uabAudit={
	start:function(){
		uabAudit.msg('logging in ...','red');
		jmat.s3db.UI.login('https://uab.s3db.org/s3db',function(){
			jQuery('#login').html(jmat.s3db.info.uid.account_uname+' ('+jmat.s3db.info.uid.email+')'); // login info
			uabAudit.msg('logging in ... successful','green');
		});
	},
	msg:function(m,c){
		//clearInterval(uabAudit.msg.t);
		if(!m){m=''};
		if(!c){c='navy'};
		jQuery('#msg').html(m).css('color',c);
		if(c=='green'){
			clearInterval(uabAudit.msg.t);
			setTimeout('uabAudit.msg()',5000)
		}
		if((m.length==0)){	
			uabAudit.msg.t=setInterval(function(){uabAudit.msg(Date())},
			1000)
		}
	}
}



uabAudit.start();








