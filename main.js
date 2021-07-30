var mousevent="empty"
var lastpositionofx,lastpositionofy
var width=screen.width
var height=screen.height
newwidth=width-70
newheight=height-300
canvas=document.getElementById("mycanvas")
ctx=canvas.getContext("2d")
color="black"
widthofline=1
if(width<992){
    document.getElementById("mycanvas").width=newwidth
    document.getElementById("mycanvas").height=newheight
    document.body.style.overflow="hidden"
    
}
canvas.addEventListener("touchstart",mytouchstart)
function mytouchstart(e){
    color=document.getElementById("color").value
    widthofline=document.getElementById("widthofline").value
    lastpositionofx=e.touches[0].clientX-canvas.offsetLeft
    lastpositionofy=e.touches[0].clientY-canvas.offsetTop

}
canvas.addEventListener("touchmove",mytouchmove)
function mytouchmove(e){
    currentpositionoftouchx=e.touches[0].clientX-canvas.offsetLeft
    currentpositionoftouchy=e.touches[0].clientY-canvas.offsetTop
    
        ctx.beginPath()
            ctx.strokeStyle=color
            ctx.lineWidth=widthofline
            console.log("lastpositiononofXandYcoordiantes=")
            console.log("x="+lastpositionofx+"y="+lastpositionofy)
            ctx.moveTo(lastpositionofx,lastpositionofy)
            console.log("currentpostitionofXandYcoordiantes=")
            console.log("x="+currentpositionoftouchx+"y="+currentpositionoftouchy)
            ctx.lineTo(currentpositionoftouchx,currentpositionoftouchy)
            ctx.stroke()
    
        lastpositionofx=currentpositionoftouchx
        lastpositionofy=currentpositionoftouchy
    }
canvas.addEventListener("mousedown",mymousedown)
function mymousedown(e){
    color=document.getElementById("color").value
    widthofline=document.getElementById("widthofline").value
    mousevent="mousedown"

}
canvas.addEventListener("mousemove",mymousemove)
function mymousemove(e){
    currentpositionofmousex=e.clientX-canvas.offsetLeft
    currentpositionofmousey=e.clientY-canvas.offsetTop
    if(mousevent=="mousedown"){
        ctx.beginPath()
            ctx.strokeStyle=color
            ctx.lineWidth=widthofline
            console.log("lastpositiononofXandYcoordiantes=")
            console.log("x="+lastpositionofx+"y="+lastpositionofy)
            ctx.moveTo(lastpositionofx,lastpositionofy)
            console.log("currentpostitionofXandYcoordiantes=")
            console.log("x="+currentpositionofmousex+"y="+currentpositionofmousey)
            ctx.lineTo(currentpositionofmousex,currentpositionofmousey)
            ctx.stroke()
    }
        lastpositionofx=currentpositionofmousex
        lastpositionofy=currentpositionofmousey
    }
    canvas.addEventListener("mouseup",mymouseup)
function mymouseup(e){
    mousevent="mouseup"

}
canvas.addEventListener("mouseleave",mymouseleave)
function mymouseleave(e){
    mousevent="mouseleave"

}
function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height)

}
    
    

