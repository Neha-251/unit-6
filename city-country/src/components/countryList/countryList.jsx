import React from "react";
import "./countryList.css"

const Countrylist = ({country})=>{

    var clicked = false;
    const handlelist = ()=>{
        if(clicked === false)
        {
            document.getElementById("listmodel").style.visibility = "visible";
            // these is for hide the country details model 
            document.getElementById("model").style.visibility = "hidden";
            clicked = true;
        }    
        else{
            document.getElementById("listmodel").style.visibility = "hidden";
            clicked = false;
        }
    }
    
    return(
        <div>
            <button id ="listbutton" onClick={handlelist}>Country List</button>
            <div id="listmodel">
                <p id = "note">Only copy name and paste to input bar</p>
                {
                    country.map((data)=>{
                        return(
                            <div id="nameofcountrydiv" key={data.id}>
                            <p id="nameofcountry">{data.country}</p>
                            </div>
                        )

                    })
                }
                
            </div>
        </div>
    )
}

export default Countrylist;