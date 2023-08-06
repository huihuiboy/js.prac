var pencil = document.getElementById("pencil");
var inputSheet = document.getElementById("inputSheet");
var sheetOpacity = document.getElementById("inputSheet").style.opacity;

pencil.addEventListener("mouseover",dGrid);
pencil.addEventListener("mouseout",dNone);
inputSheet.addEventListener("mouseover",dGrid);
inputSheet.addEventListener("mouseout",dNone);

function dGrid(){
    inputSheet.style.zIndex = "10";
    inputSheet.style.transform = "1s";
    inputSheet.style.bottom = "75px";
    inputSheet.style.opacity = "1";
}
function dNone(){
    inputSheet.style.transform = "1s";
    inputSheet.style.bottom = "0px";
    inputSheet.style.opacity = "0";
    inputSheet.style.zIndex = "-999";
}

// Blog
var feel = document.getElementById("feel");
var date_choose = document.getElementById("date_choose");
var sent = document.getElementById("sent");
var content = document.getElementById("content");
var list = document.getElementById("list");
var emoji = document.getElementById("emoji");
var test = document.getElementById("fBox");
var i = 0;

sent.addEventListener("click",addPost);
feel.addEventListener("click",function(){
    console.log(feel.value);
    console.log("YES");
})

// sent.addEventListener("click",addPost);
// if(feel.value=="angry"){
//     emoji.style.left = "-751px";
//     emoji.style.top = "-621px";
//     console.log("NO");
// };
emoji.addEventListener("click",function(){
    emoji.style.left = "-751px";
    emoji.style.top = "-621px";
})

function addPost(){
    if(feel.value=="angry"){
        emoji.style.left = "-751px";
        emoji.style.top = "-621px";
        console.log("NO");
        creatPost();
    }else{
        creatPost();
    }
    
    inputSheet.style.opacity = "0";
    date_choose.value = "";
    content.value = "";
    feel.value = "empty";
}

function creatPost(){
    i++;
    // emoji.id = "emoji"+ toString(i);
    list.innerHTML = list.innerHTML + `
        <div class="post">
            <div id="imgBox">
            <div id="fBox"><img src="/img/face.png" alt="" id="${i}"></div>
            </div>
            <div id="textBox">
            <h3 class="date">${date_choose.value}</h3>
            <p class="diary">${content.value}</p>
            </div>    
        </div>
    `;
}
