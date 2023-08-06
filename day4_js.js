//event listener 寫在JS裡

// var button = document.getElementById("btn");
// var face = document.getElementById("face");
// var count_click = 0; 
// console.log(button);

// function handle_click(element){
//     count_click++;
//     if(count_click==1){
//         element.innerText = "還真的按？";
//         face.style.left = "-537px";
//         face.style.top = "-213px";
//     }
//     else if(count_click==2){
//         element.innerText = "別再按了！";
//         face.style.left = "-751px";
//         face.style.top = "-621px";
//     }
//     else if(count_click==3){
//         element.innerText = "你完蛋了";
//         face.style.left = "-967px";
//         face.style.top = "-621px";
//         document.getElementById("wrap").style.backgroundColor = "black";
//         button.style.backgroundColor = "red";
//         button.style.color = "white";
//     }
//     else{
//         close();
//     }
//     console.log(count_click);
    
// }

var face = document.getElementById("face");
var count_click = 0; 
var button = document.getElementById("btn");
button.addEventListener("click",function(){
    count_click++;
    if(count_click==1){
        this.innerText = "還真的按？";
        face.style.left = "-537px";
        face.style.top = "-213px";
    }
    else if(count_click==2){
        this.innerText = "別再按了！";
        face.style.left = "-751px";
        face.style.top = "-621px";
    }
    else if(count_click==3){
        this.innerText = "你完蛋了";
        face.style.left = "-967px";
        face.style.top = "-621px";
        document.getElementById("wrap").style.backgroundColor = "black";
        button.style.backgroundColor = "red";
        button.style.color = "white";
    }
    else{
        close();
    }
})
