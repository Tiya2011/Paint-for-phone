
var last_position_x, last_position_y;
color="black";
 width_of_line=1;
 canvas=document.getElementById("mycanvas");
 ctx=canvas.getContext("2d");
 var width=screen.width;
 var new_width=screen.width-70;
 var new_height=screen.height-300;
 if(width<992){
     document.getElementById("mycanvas").width=new_width;
     document.getElementById("mycanvas").height=new_height;
     document.body.style.overflow="hidden";
 }
 canvas.addEventListener("touchstart", my_touchstart);
 function my_touchstart(e)
{
    console.log ("my_touchstart")
    last_position_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_y=e.touches[0].clientY-canvas.offsetTop;

}


canvas.addEventListener("touchmove", my_touchmove);
 function my_touchmove(e)
{
    console.log ("my_touchmove")
    current_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
    current_position_of_y=e.touches[0].clientY-canvas.offsetTop;
    
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        console.log("last position of x and y coordinates=")
        console.log("x="+current_position_of_x+"y="+current_position_of_y);
        ctx.moveTo(last_position_x,last_position_y);
        console.log("current position of x and y coordinates=")
        console.log("x="+last_position_x+"y="+last_position_y);
        ctx.lineTo(current_position_of_x,current_position_of_y);
        ctx.stroke();
    
    last_position_x=current_position_of_x;
    last_position_y=current_position_of_y;
    
}