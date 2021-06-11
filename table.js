var d = document;

d.getElementById('logout').addEventListener('click', logOutFunc);

window.onload = function(){
    getData();
    getActiveUsers();
}

setInterval(function(){
    getActiveUsers();
}, 3000);

function printUSN(usn){
    console.log("usn here "+usn);
    d.getElementById("chat").style.display = "block";
    d.getElementById("name-header").innerHTML = usn;
}

function getActiveUsers(){
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "getActiveUsers.php", true);

    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            d.getElementById("user-panel").innerHTML = this.responseText;
        }
    }
    xhr.send();
}

function getData(){                                             //loads table at the start
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "getData.php", true);

    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            d.getElementById("table").innerHTML = this.responseText;
        }
    }
    xhr.send();
}

function hover(songCode){
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "onHover.php?songCode="+songCode, true);

    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            d.getElementById("modal").style.display = "block";      //shows the modal when hovering a tr
            d.getElementById("modal").innerHTML = this.responseText;
        }
    }
    xhr.send();
}

function hoverStop(){
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "#", true);

    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            d.getElementById("modal").style.display = "none";   //hides the modal when not hovering a tr
            d.getElementById("modal").innerHTML = "";
        }
    }
    xhr.send();
}

let modal = d.getElementById("modal");

const onMouseMove = (e) =>{
    var x = e.pageX + 10;        //inusad lang para nakaharang sa cursor
    var y = e.pageY - 120;        //pag walaito di gagana yung hover
    modal.style.left = x + "px";
    modal.style.top = y + "px";
}
d.addEventListener("mousemove", onMouseMove);

function logOutFunc(){

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "logout.php", true);

    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
            location.replace('index.php');
        }
    }
    xhr.send();
}


