import React from "react";
 function popup()
 {
     const close=()=>
     {
       document.querySelector(".pop-close").style.display="none";
     }
     return(
         <div class="pop-close">
    <div class="popup-header">
         <div class="popup-close" onClick={close}>&times;</div>
         <div class="popup-head">
            <h3>Are you sure want to continue?</h3>
         </div>
         <div class="popup-body">
             <p>The next page looks amazing. Hope you want to go there.!</p>
         </div>
         <div class="popup-row">
             <div class="popup-col">Cancel</div>
             <div class="popup-coll">continue</div>
         </div>
    </div>
    </div>
    );

 }
 export default popup;