function parseCookie() {
    var cookieObj = {};
    var cookieAry = document.cookie.split(';');
    var cookie;
    console.log(cookieAry)
    for (var i=0, l=cookieAry.length; i<l; ++i) {
        cookie = cookieAry[i].trim();
        cookie = cookie.split('=');
        cookieObj[cookie[0]] = cookie[1];
    }
    
    return cookieObj;
}

String.prototype.trim = function() {
    return this.replace(/(^[\s]*)|([\s]*$)/g, "");
}

function getCookieByName(name) {
    var value = parseCookie()[name];
    if (value) {
        value = decodeURIComponent(value);
    }

    return value;
}

function goToURL(url, characteristic="",page="")
{ 
    if(page)
        document.cookie= page + "=" +characteristic
    document.location.href=url
}
function goToEnd()
{
    var characteristic=""
    var testerName = document.getElementsByName("testerName")[0].value;
    characteristic+=getCookieByName('Q1')
    characteristic+=getCookieByName('Q2')
    characteristic+=getCookieByName('Q4')
    switch (characteristic){
        case '行動忠誠個人':
            document.location.href='金剛鸚鵡.html'
            break
        case '行動忠誠團隊':
            document.location.href='皇帝企鵝.html'
            break
        case '行動好奇個人':
            document.location.href='綠翅金鳩.html'
            break
        case '行動好奇團隊':
            document.location.href='鴕鳥.html'
            break
        case '步調忠誠團隊':
            document.location.href='鴿子.html'
            break
        case '步調忠誠個人':
            document.location.href='朱紅霸鶲.html'
            break
        case '步調好奇團隊':
            document.location.href='卷羽鵜鶘.html'
            break
        case '步調好奇個人':
            document.location.href='短耳鴞.html'
            break
    }
}
