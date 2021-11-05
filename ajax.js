function generatelist()
{
    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4&&this.status==200)
        {
            var response=JSON.parse(this.responseText)
            var productlist=response.list;
            var items=""
            for(i=0;i<productlist.length;i++)
            {
                items+="<tr>";
                items+="<td>" + productlist[i].sl_no +"</td>"
                items+="<td>"+productlist[i].name+"</td>";
                items+="<td>"+productlist[i].quantity+"</td>";
                items+="<td>"+productlist[i].unit+"</td>";
                items+="<td>"+productlist[i].departments+"</td>";
                items+="<td>"+productlist[i].notes+"</td>";
                items+="</tr>"
            }
           document.getElementById("demo").innerHTML=items;
        }
    }
    xhttp.open("GET","product.json",true)
    xhttp.send();
}