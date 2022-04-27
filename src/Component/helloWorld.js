import React from "react";
function hello()
{
    const ff=()=>
    {
        document.querySelector(".paragraph").style.display="block";
        console.log("ss");
        console.log("Career");
    }
    return(
        <div class="header-helloworld">
        <div class="btn">
    <button onClick={ff}>
        click
    </button></div>
    <div class="paragraph"><strong>Address:</strong> 2nd Floor, Mirage Point, 34, 80 Feet Rd, 1st Block Koramangala, Koramangala, Bengaluru, Karnataka 560034<br></br>
<strong>Hours:</strong> 
Closed ⋅ Opens 11AM<br></br>
<strong>Phone: </strong>063660 04441</div>
    </div>
    );
}
export default hello;