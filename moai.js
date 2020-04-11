function createLink(cssURL, lnkId, charset, media) {
    var head = document.getElementsByTagName('head')[0],
        linkTag = null;
    if (!cssURL) {
        return false;
    }
    linkTag = document.createElement('link');
    linkTag.setAttribute('id', (lnkId || 'dynamic-style'));
    linkTag.setAttribute('rel', 'stylesheet');
    linkTag.setAttribute('charset', (charset || 'utf-8'));
    linkTag.setAttribute('media', (media || 'all'));
    linkTag.setAttribute('type', 'text/css');
    linkTag.href = cssURL;
    head.appendChild(linkTag);
}
function checkTime() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() +1;
    var day = now.getDate();
    console.log("当前时间",year,month,day);
    if(year==2020 && month==4 && day==4){
        console.log("加载默哀css");
        createLink("moai.css")
    }else{
        console.log("未到时间加载css");
    }
}
checkTime()
