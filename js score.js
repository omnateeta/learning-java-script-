//score jaca script file 
function total()
{
    var a=document.getElementById("phy").value
    var b=document.getElementById("chem").value
    var c=document.getElementById("math").value
    var d=document.getElementById("bio").value
    a=parseInt(a)
    b=parseInt(b)
    c=parseInt(c)
    d=parseInt(d)
    var total=a+b+c+d
    var average=total/4
   
    document.getElementById("total").innerHTML='Total is='+total
   
}
function average()
{
    var a=document.getElementById("phy").value
    var b=document.getElementById("chem").value
    var c=document.getElementById("math").value
    var d=document.getElementById("bio").value
    a=parseInt(a)
    b=parseInt(b)
    c=parseInt(c)
    d=parseInt(d)
    var total=a+b+c+d
    var average=total/4
   
    
    document.getElementById("average").innerHTML='Average is='+average
}
