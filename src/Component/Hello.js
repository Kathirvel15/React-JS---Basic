import React from "react";
import './kathir.css'


function ab()
    {
        return( 
            <div className=" form-group">
                 <h1 className="kk">Hello World</h1>
                <div className="input-box">
                <label><strong>Name : </strong></label>
            <input className="form-control" type="text" placeholder="Name*" /></div><br></br>
            <div className="input-box">
            <label><strong>Email Id : </strong></label>
            <input className="form-control" type="text" placeholder="Email*" /></div>
            </div>
        )
    }
export default ab;