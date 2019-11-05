let btn = document.getElementById('subm-1');
btn.onclick = function(){
    $.ajax({
        type:"GET",
        url: "",
        success: function(){
            let ansver = document.getElementById('ansver');
            ansver.style.removeProperty('display');
            ansver.style.setProperty('display', 'block');
        }
    });
};
let btn2 = document.getElementById('subm-2');
btn2.onclick = btn.onclick;
