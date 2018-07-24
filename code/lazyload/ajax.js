var xmlhttprequest = new XMLHttpRequest(); 

xmlhttprequest.onreadystatechange = function(){
    if(xmlhttprequest.readyState == 4 && xmlhttprequest.status == 200 ){
        var responseText = xmlhttprequest.responseText;  
        console.log('response test:'+responseText);
    }else{
        console.log('request faild')
    }
}

xmlhttprequest.onprogress = function(e){
    e = e || event;
    if(e.lengthComputable){
        console.log("received "+ e.loaded + " of "+ e.total + " bytes");
    }
}

xmlhttprequest.open("GET","http://static1-nonprod.oss-cn-beijing.aliyuncs.com/viewer/test.json",true);

xmlhttprequest.send();