// function redirect(url){
//     if(url !== ''){
//         window.location=url;
//     }
// }
function openMenu(){
    document.getElementById("navMenu").style.width="120px";
}
function closeMenu(){
    document.getElementById("navMenu").style.width="0px";
}
window.addEventListener("mouseup",function(event){
    let box=this.document.getElementById("navMenu");
    if(event.target !==box){
        box.style.width="0px";
    }
})
