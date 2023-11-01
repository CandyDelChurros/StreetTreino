function aki(){
    document.getElementById('aki').style.background = 'url(../img/bg_aki.jpg)';
    document.getElementById('aki-status').style.visibility = 'visible';
    document.getElementById("aki-status-mid").style.visibility = 'visible';
    document.getElementById("aki-status-bot").style.visibility = 'visible';
    document.getElementById("aki").onmouseenter = function(){
        this.style.background = 'url(../img/bg_aki.jpg)';
    }
    document.getElementById("aki").onmouseleave = function(){
        this.style.background = 'url(../img/bg_aki.jpg)';
    }
    const passion = document.querySelector('audio')
    passion.play()
}

function desaperecer(){
    document.getElementById('aki').style.background = 'url(../img/aki-hover.png)';
    document.getElementById('aki').style.backgroundSize = '68rem';
    document.getElementById('aki').style.backgroundPosition = 'center';
    document.getElementById("aki-status").style.visibility = 'hidden';
    document.getElementById("aki-status-mid").style.visibility = 'hidden';
    document.getElementById("aki-status-bot").style.visibility = 'hidden';
    document.getElementById("aki").onmouseenter = function(){
        this.style.background = 'url(../img/aki.jpg)';
        document.getElementById('aki').style.backgroundSize = '68rem';
        document.getElementById('aki').style.backgroundPosition = 'center';
    };
    document.getElementById("aki").onmouseleave = function(){
        this.style.background = "url(../img/aki-hover.png)";
        document.getElementById('aki').style.backgroundSize = '68rem';
        document.getElementById('aki').style.backgroundPosition = 'center';
    };
}

