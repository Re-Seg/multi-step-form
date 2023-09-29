var nextStep1 = document.getElementById("nextStep1");
var nextStep2 = document.getElementById("nextStep2");
var nextStep3 = document.getElementById("nextStep3");
var confirm_ = document.getElementById("confirm");
var goBack = document.getElementById('goBack');
var dyn1 = document.getElementById('dyn1');
var dyn2 = document.getElementById('dyn2');
var dyn3 = document.getElementById('dyn3');
var price1 = document.getElementById('price1');
var price2 = document.getElementById('price2');
var price3 = document.getElementById('price3');
var p = 0;
var piece = false;
var c1 = true;
var c2 = false;
var c3 = false;
var _c1 = false;
var _c2 = true;
var body = document.querySelector('body');
var cookies = document.cookie;
if (nextStep1) {
    nextStep1.addEventListener('click', Step1);
    function Step1() {
        var name_ = document.querySelector("#name");
        var email = document.querySelector("#email");
        var tel = document.querySelector("#number");
        var nAlert = document.getElementById('n-alert');
        var eAlert = document.getElementById('e-alert');
        var tAlert = document.getElementById('t-alert');
        var all = /./;
        var Tel = /(\d){10,}/;
        var word = /(\w){2,}/;
        var mail = /[A-ZÀÂÁÃÄÅÆĀĂĄÉÈÊËĒĖĘĚĔÛÙÚÜŲŰŮŪÎÏÌÍĪĮİÔŒÒÓÕÖØŌŐÇĆČŹŹŽÝŔŘĢĞĎĐŚŠŞŤȚŢĹĻĽŁÑŃŅŇa-zàâáãäåæāăąéèêëēėęěĕûùúüųűůūîïìíīįiôœòóõöøōőçćčźźžýŕřģğďđśšşťțţĺļľłñńņň0-9.](=?(@))/;
        if ((all.test(email.value) == false) || (all.test(name_.value) == false) || (all.test(tel.value) == false)) {
            if (all.test(email.value) == false) {
                eAlert.innerHTML = 'This flied is requided';
                email.style.borderColor = 'hsl(354, 84%, 57%)';
            }
            if (all.test(name_.value) == false) {
                nAlert.innerHTML = 'This flied is requided';
                name_.style.borderColor = 'hsl(354, 84%, 57%)';
            }
            if (all.test(tel.value) == false) {
                tAlert.innerHTML = 'This flied is requided';
                tel.style.borderColor = 'hsl(354, 84%, 57%)';
            }
        }
        else if ((mail.test(email.value) == false) || (word.test(name_.value) == false) || (Tel.test(tel.value) == false)) {
            if (mail.test(email.value) == false) {
                eAlert.innerHTML = 'Fill in the field correctly';
                email.style.borderColor = 'hsl(354, 84%, 57%)';
            }
            if (word.test(name_.value) == false) {
                nAlert.innerHTML = 'Fill in the field correctly';
                name_.style.borderColor = 'hsl(354, 84%, 57%)';
            }
            if (Tel.test(tel.value) == false) {
                tAlert.innerHTML = 'Fill in the field correctly';
                tel.style.borderColor = 'hsl(354, 84%, 57%)';
            }
        }
        else {
            location.assign("step2.html");
        }
    }
}
if (nextStep2) {
    var free1_1 = document.querySelector(' #free1');
    var free2_1 = document.querySelector(' #free2');
    var free3_1 = document.querySelector(' #free3');
    var remoteControl = document.getElementById('remote-control');
    var button_1 = document.getElementById('button');
    var monthly_1 = document.getElementById('monthly');
    var yearly_1 = document.getElementById('yearly');
    (function () {
        document.cookie = "piece=false; path=/mydir;samesite=lax";
        document.cookie = "p=9; path=/;samesite=lax";
        return cookies = document.cookie;
    })();
    nextStep2.addEventListener('click', Step2);
    function Step2() {
        //alert(cookies)
        //alert(piece)
        location.assign("step3.html");
    }
    monthly_1.addEventListener('click', Monthly);
    function Monthly() {
        price1.innerHTML = '$9/mo';
        price2.innerHTML = '$12/mo';
        price3.innerHTML = '$15/mo';
        button_1.style.transform = 'translatex(0px)';
        free1_1.style.display = 'none';
        free2_1.style.display = 'none';
        free3_1.style.display = 'none';
        yearly_1.style.color = 'hsl(229, 24%, 87%)';
        monthly_1.style.color = 'hsl(213, 96%, 18%)';
        _c1 = false;
        _c2 = true;
        piece = false;
        document.cookie = "piece=false; path=/;samesite=lax";
        document.cookie = "p=9; path=/;samesite=lax";
        return cookies = document.cookie;
    }
    yearly_1.addEventListener('click', Yearly);
    function Yearly() {
        price1.innerHTML = '$90/yr';
        price2.innerHTML = '$120/yr';
        price3.innerHTML = '$150/yr';
        button_1.style.transform = 'translatex(14px)';
        free1_1.style.display = 'inline';
        free2_1.style.display = 'inline';
        free3_1.style.display = 'inline';
        monthly_1.style.color = 'hsl(229, 24%, 87%)';
        yearly_1.style.color = 'hsl(213, 96%, 18%)';
        _c1 = true;
        _c2 = false;
        piece = true;
        document.cookie = "piece=true; path=/;samesite=lax";
        document.cookie = "p=90; path=/;samesite=lax";
        return cookies = document.cookie;
    }
    remoteControl.addEventListener('click', Control);
    function Control() {
        if (piece == true) {
            Monthly();
            piece = false;
        }
        else {
            Yearly();
            piece = true;
        }
    }
    function none() {
        dyn1.style.background = 'hsl(231, 100%, 99%)';
        dyn1.style.border = '1px solid hsl(229, 24%, 87%)';
        dyn2.style.background = 'hsl(231, 100%, 99%)';
        dyn2.style.border = '1px solid hsl(229, 24%, 87%)';
        dyn3.style.background = 'hsl(231, 100%, 99%)';
        dyn3.style.border = '1px solid hsl(229, 24%, 87%)';
        p = 0;
        c1 = false;
        c2 = false;
        c3 = false;
    }
    dyn1.addEventListener('click', Dyn1);
    function Dyn1() {
        none();
        dyn1.style.background = 'hsl(217, 100%, 97%)';
        dyn1.style.border = '1px solid hsl(213, 96%, 18%)';
        c1 = true;
        //alert(piece)
        if (piece == true) {
            p = 90;
            document.cookie = "p=90; path=/;samesite=lax";
            return cookies = document.cookie;
        }
        else {
            p = 9;
            document.cookie = "p=9; path=/;samesite=lax";
            return cookies = document.cookie;
        }
    }
    dyn2.addEventListener('click', Dyn2);
    function Dyn2() {
        none();
        dyn2.style.background = 'hsl(217, 100%, 97%)';
        dyn2.style.border = '1px solid hsl(213, 96%, 18%)';
        c2 = true;
        if (piece == true) {
            p = 120;
            document.cookie = "p=120; path=/;samesite=lax";
            return cookies = document.cookie;
        }
        else {
            p = 12;
            document.cookie = "p=12; path=/;samesite=lax";
            return cookies = document.cookie;
        }
    }
    dyn3.addEventListener('click', Dyn3);
    function Dyn3() {
        none();
        dyn3.style.background = 'hsl(217, 100%, 97%)';
        dyn3.style.border = '1px solid hsl(213, 96%, 18%)';
        c3 = true;
        if (piece == true) {
            p = 150;
            document.cookie = "p=150; path=/;samesite=lax";
            return cookies = document.cookie;
        }
        else {
            p = 15;
            document.cookie = "p=15; path=/;samesite=lax";
            return cookies = document.cookie;
        }
    }
    dyn1.addEventListener('mousemove', move1);
    function move1() {
        dyn1.style.border = '1px solid hsl(213, 96%, 18%)';
    }
    dyn1.addEventListener('mouseout', out1);
    function out1() {
        if (c1 == true) {
            dyn1.style.border = '1px solid hsl(213, 96%, 18%)';
        }
        else {
            dyn1.style.border = '1px solid hsl(229, 24%, 87%)';
        }
    }
    dyn2.addEventListener('mousemove', move2);
    function move2() {
        dyn2.style.border = '1px solid hsl(213, 96%, 18%)';
    }
    dyn2.addEventListener('mouseout', out2);
    function out2() {
        if (c2 == true) {
            dyn2.style.border = '1px solid hsl(213, 96%, 18%)';
        }
        else {
            dyn2.style.border = '1px solid hsl(229, 24%, 87%)';
        }
    }
    dyn3.addEventListener('mousemove', move3);
    function move3() {
        dyn3.style.border = '1px solid hsl(213, 96%, 18%)';
    }
    dyn3.addEventListener('mouseout', out3);
    function out3() {
        if (c3 == true) {
            dyn3.style.border = '1px solid hsl(213, 96%, 18%)';
        }
        else {
            dyn3.style.border = '1px solid hsl(229, 24%, 87%)';
        }
    }
    yearly_1.addEventListener('mousemove', _move1);
    function _move1() {
        yearly_1.style.color = 'hsl(213, 96%, 18%)';
    }
    yearly_1.addEventListener('mouseout', _out1);
    function _out1() {
        if (_c1 == true) {
            yearly_1.style.color = 'hsl(213, 96%, 18%)';
        }
        else {
            yearly_1.style.color = 'hsl(229, 24%, 87%)';
        }
        //alert(piece)
        //var cookies =
    }
    monthly_1.addEventListener('mousemove', _move2);
    function _move2() {
        monthly_1.style.color = 'hsl(213, 96%, 18%)';
    }
    monthly_1.addEventListener('mouseout', _out2);
    function _out2() {
        if (_c2 == true) {
            monthly_1.style.color = 'hsl(213, 96%, 18%)';
        }
        else {
            monthly_1.style.color = 'hsl(229, 24%, 87%)';
        }
        //alert(piece)
    }
    var c = document.cookie.split(';');
}
if (nextStep3) {
    var online = document.getElementById('online');
    var larger = document.getElementById('larger');
    var customizable = document.getElementById('customizable');
    var service = document.getElementById('service');
    var storage = document.getElementById('storage');
    var profile = document.getElementById('profile');
    var switch1 = false;
    var switch2 = false;
    var switch3 = false;
    var c = document.cookie.split(';');
    nextStep3.addEventListener('click', Step3);
    function Step3() {
        location.assign("step4.html");
    }
    if (c[0] == "piece=true") {
        piece = true;
    }
    else {
        piece = false;
    }
    if (piece == true) {
        price1.innerHTML = '$10/yr';
        price2.innerHTML = '$20/yr';
        price3.innerHTML = '$20/yr';
    }
    else {
        price1.innerHTML = '$1/mo';
        price2.innerHTML = '$2/mo';
        price3.innerHTML = '$2/mo';
    }
    (function () {
        document.cookie = 'p1=0; path=/;samesite=lax';
        document.cookie = 'p2=0; path=/;samesite=lax';
        document.cookie = 'p3=0; path=/;samesite=lax';
        return cookies = document.cookie;
    })();
    online.addEventListener('click', Online);
    //service.addEventListener('click', Online)
    function Online() {
        if (switch1 == true) {
            switch1 = false;
            this.style.backgroundColor = 'hsl(217, 100%, 97%)';
            if (piece == true) {
                document.cookie = 'p1=10; path=/;samesite=lax';
                return cookies = document.cookie;
            }
            else {
                document.cookie = 'p1=1; path=/;samesite=lax';
                return cookies = document.cookie;
            }
        }
        else {
            switch1 = true;
            this.style.backgroundColor = 'hsl(231, 100%, 99%)';
            document.cookie = 'p1=0; path=/;samesite=lax';
            return cookies = document.cookie;
        }
    }
    online.addEventListener('mousemove', mouse);
    //service.addEventListener('mousemove', mouse)
    function mouse() {
        this.style.backgroundColor = 'hsl(217, 100%, 97%)';
    }
    online.addEventListener('mouseout', mouseOut1);
    //service.addEventListener('mouseout', mouseOut1)
    function mouseOut1() {
        if (switch1 == true) {
            this.style.backgroundColor = 'hsl(217, 100%, 97%)';
        }
        else {
            this.style.backgroundColor = 'hsl(231, 100%, 99%)';
        }
    }
    customizable.addEventListener('click', Customizable);
    //profile.addEventListener('click', Customizable)
    function Customizable() {
        if (switch3 == true) {
            switch3 = false;
            this.style.backgroundColor = 'hsl(217, 100%, 97%)';
            if (piece == true) {
                document.cookie = 'p3=20; path=/;samesite=lax';
                return cookies = document.cookie;
            }
            else {
                document.cookie = 'p3=2; path=/;samesite=lax';
                return cookies = document.cookie;
            }
        }
        else {
            switch3 = true;
            this.style.backgroundColor = 'hsl(231, 100%, 99%)';
            document.cookie = 'p3=0; path=/;samesite=lax';
            return cookies = document.cookie;
        }
    }
    customizable.addEventListener('mousemove', mouse);
    //profile.addEventListener('mousemove', mouse)
    customizable.addEventListener('mouseout', mouseOut3);
    //profile.addEventListener('mouseout', mouseOut3)
    function mouseOut3() {
        if (switch3 == true) {
            this.style.backgroundColor = 'hsl(217, 100%, 97%)';
        }
        else {
            this.style.backgroundColor = 'hsl(231, 100%, 99%)';
        }
    }
    larger.addEventListener('click', Larger);
    //storage.addEventListener('click', Larger)
    function Larger() {
        if (switch2 == true) {
            this.style.backgroundColor = 'hsl(217, 100%, 97%)';
            switch2 = false;
            if (piece == true) {
                document.cookie = 'p2=20;path=/;samesite=lax';
                return cookies = document.cookie;
            }
            else {
                document.cookie = 'p2=2;path=/;samesite=lax';
                return cookies = document.cookie;
            }
        }
        else {
            this.style.backgroundColor = 'hsl(231, 100%, 99%)';
            switch2 = true;
            document.cookie = 'p2=0; path=/;samesite=lax';
            return cookies = document.cookie;
        }
    }
    larger.addEventListener('mousemove', mouse);
    //storage.addEventListener('mousemove', mouse)
    larger.addEventListener('mouseout', mouseOut2);
    //storage.addEventListener('mouseout', mouseOut2)
    function mouseOut2() {
        if (switch2 == true) {
            this.style.backgroundColor = 'hsl(217, 100%, 97%)';
        }
        else {
            this.style.backgroundColor = 'hsl(231, 100%, 99%)';
        }
    }
    //alert(cookies)
}
if (confirm_) {
    var _year = document.getElementsByClassName('_year');
    var year_ = document.getElementsByClassName('year_');
    var _month = document.getElementsByClassName('_month');
    var month_ = document.getElementsByClassName('month_');
    var a1 = 0;
    var a2 = 0;
    var c = document.cookie.split(';');
    var p = 0;
    var p1 = 0;
    var p2 = 0;
    var p3 = 0;
    var s_total = document.getElementsByClassName('s-total');
    var s_plan = document.getElementsByClassName('s-plan');
    var online_ = document.getElementById('online_');
    var larger_ = document.getElementById('larger_');
    var customizable_ = document.getElementById('customizable_');
    //alert(c)
    eval(c[1]);
    eval(c[2]);
    eval(c[3]);
    eval(c[4]);
    //alert(p +'\n' +p1 +'\n' +p2 +'\n' +p3)
    var i = 0;
    var i1 = 0;
    var s = p + p1 + p2 + p3;
    if (p1 == 0) {
        online_.style.display = 'none';
    }
    else {
        online_.style.display = 'flex';
    }
    if (p2 == 0) {
        larger_.style.display = 'none';
    }
    else {
        larger_.style.display = 'flex';
    }
    if (p3 == 0) {
        customizable_.style.display = 'none';
    }
    else {
        customizable_.style.display = 'flex';
    }
    //alert(s_plan.item(0))
    while (i < s_total.length) {
        s_total.item(i).innerHTML = s.toString();
        i++;
    }
    while (i1 < s_plan.length) {
        if (p == 0) {
        }
        else {
            s_plan.item(i1).innerHTML = p.toString();
        }
        i1++;
    }
    confirm_.addEventListener('click', Step4);
    function Step4() {
        location.assign("Thank_you.html");
    }
    if (c[0] == "piece=true") {
        piece = true;
    }
    else {
        piece = false;
    }
    if (piece == true) {
        a1 = 0;
        a2 = 0;
        while (a1 < _year.length) {
            _year.item(a1).style.display = 'inline';
            _month.item(a1).style.display = 'none';
            a1++;
        }
        while (a2 < year_.length) {
            year_.item(a2).style.display = 'inline';
            month_.item(a2).style.display = 'none';
            a2++;
        }
    }
    else {
        a1 = 0;
        a2 = 0;
        while (a1 < _year.length) {
            _year.item(a1).style.display = 'none';
            _month.item(a1).style.display = 'inline';
            a1++;
        }
        while (a2 < year_.length) {
            year_.item(a2).style.display = 'none';
            month_.item(a2).style.display = 'inline';
            a2++;
        }
    }
}
if (goBack) {
    goBack.addEventListener('click', Back);
    function Back() {
        history.back();
    }
}
