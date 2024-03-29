import React, { useEffect, useState } from "react";
import "./country.css";
import "../singleCountry.css";
import Pagination from "../pagination";
import Countrylist from "../countryList/countryList";
import { toHaveFormValues } from "@testing-library/jest-dom/dist/matchers";
// import Singlecountry from "./singlecountry";

var Country = () => {

    const [country, setcountry] = useState([]);
    const [loading, setloading] = useState(false);
    const [del, setDel] = useState(false);
    const [currentpage, setcurrentpage] = useState(1);
    const [postperpage] = useState(20);
    const [inputcountry, setinputcountry] = useState({ name: "" });
    const [newname, setnewname] = useState([{
        name: "india",
        capital: "",
        region: "",
        subregion: "",
        population: "",
        demonym: "",
        currencies: [{ name: "" }]
    }]);

    // for fetching the country data from api 
    const getcountries = async () => {
        setloading(true);
        var res = await fetch("http://localhost:8080/list");
        setcountry(await res.json());
        setloading(false);
    }

    useEffect(() => {
        getcountries();
    }, [])

    //getting current page and data of perticular page for pagination 
    const indexoflastpage = currentpage * postperpage;
    const indexoffirstpost = indexoflastpage - postperpage;
    const currentpost = country.slice(indexoffirstpost, indexoflastpage);

    var paginate = (pagenumber) => setcurrentpage(pagenumber)

    // for sorting the data 
    const handlesortmethod = () => {

        const newData = [...country];

        const result = document.getElementById("selectsort").value;
        console.log('result', result)
        if (result === "low") {
            newData.sort((a, b) => {
                return a.population - b.population
            })
            setcountry(newData)
        }
        else if (result === "high") {
            newData.sort((a, b) => {
                return b.population - a.population
            })
            setcountry(newData)
        } 
        

    }

    // these is for handle filter method 
    const handlefiltermethod = () => {
        let newData = [...country];

        const res = document.getElementById("selectfilter").value;
        if (res === "AtoZ") {
        
            newData.sort((a, b) => {
               return a.country.localeCompare(b.country)
            })

            setcountry(newData)
        }
        else if (res === "ZtoA") {
            newData.sort((a, b) => {
                return b.country.localeCompare(a.country)
            })

            setcountry(newData)
        }
    }

    // thse is for handle the input country 
    const handlechange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setinputcountry({ ...inputcountry, [name]: value });
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        const newcountry = { ...inputcountry };
        const result = country.filter(obj => {
            return obj.name === newcountry.name;
        })
        if (result.length === 0) {
            window.alert("Invalid country name, Find country from country list button");
        }
        else {
            setnewname(result);
            document.getElementById("model").style.visibility = "visible";
            // thse is for hide the county lis model 
            document.getElementById("listmodel").style.visibility = "hidden";

        }
    }

    const handleclose = () => {
        document.getElementById("model").style.visibility = "hidden";
    }

    const handleDelete = (data, id) => {

        const newData = [...country];
        newData.splice(id, 1);

        setcountry(newData);

        if (del === false) {
            setDel(true);

        } else {
            setDel(false);

        }

    }

    if (loading) {
        return <h2>Loading...</h2>
    }
    return (
        <div>
            <div id="container">
                {/* these div for upper navbar */}
                <div id="searchbar">
                    <Countrylist country={country} />
                    <form onSubmit={handlesubmit} id="searchform">
                        {/* <div id="searchdiv"> */}
                        <input type="text" onChange={handlechange} value={inputcountry.name} name="name" id="search-input" placeholder="Enter Country"></input>
                        <button id="search-btn" type="submit">Search</button>
                        {/* </div> */}
                    </form>
                    {/* these is for sorting method by population */}
                    <select id="selectsort" onChange={handlesortmethod}>
                        <option >Sort Population</option>
                        <option value={"low"}>Low to High</option>
                        <option value={"high"}>High to Low</option>
                    </select>
                    {/* these is for filter method for name ascending and descending  */}
                    <select id="selectfilter" onChange={handlefiltermethod}>
                        <option >Filter</option>
                        <option value={"AtoZ"}>A to Z</option>
                        <option value={"ZtoA"}>Z to A</option>
                    </select>
                </div>
                {/* these div is for country display  */}
                <div id="countrydisplay">
                    {
                        currentpost.map((data, id) => {
                            return (
                                <div id="country-card" key={data.id}>
                                    <h5 id="countryname">{data.country}</h5>
                                    <p id="capital">Capital: {data.city}</p>
                                    <p id="population">Population: {data.population}</p>
                                    <button className="delete_country" onClick={() => handleDelete(data, id)}> Delete</button>
                                </div>
                            )
                        })
                    }


                </div>
                {/* for pagination buttons  */}
                <Pagination postperpage={postperpage} totalpost={country.length} paginate={paginate} />

            </div>

            {/* these is for pop up model after search input  */}
            <>
                <div id="model">
                    <div id="close" onClick={handleclose}>Close</div>
                    <div id="upperdiv">
                        <h1>{newname[0].name}</h1>
                    </div>
                    <div id="middlediv">
                        <div id="modelflag">
                            {/* <img src={newname[0].flag} width ="100%" height="100%" alt="flag"></img> */}
                        </div>
                        <div id="modelmap">
                            <iframe
                                src={`https://maps.google.com/maps?q=${newname[0].name}&t=&z=5&ie=UTF8&iwloc=&output=embed`}
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                style={{ border: 1 }}
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                                title="country"
                            />
                        </div>
                    </div>
                    <div id="lowerdiv">
                        <div className="infocard" id="info1">
                            <h6>Capital</h6>
                            <h6>{newname[0].capital}</h6>
                        </div>
                        <div className="infocard" id="info2">
                            <h6>Region</h6>
                            <h6>{newname[0].region}</h6>
                        </div>
                        <div className="infocard" id="info3">
                            <h6>Subregion</h6>
                            <h6>{newname[0].subregion}</h6>
                        </div>
                        <div className="infocard" id="info4">
                            <h6>Population</h6>
                            <h6>{newname[0].population}</h6>
                        </div>
                        <div className="infocard" id="info5">
                            <h6>Demonym</h6>
                            <h6>{newname[0].demonym}</h6>
                        </div>
                        <div className="infocard" id="info6">
                            <h6>Currency</h6>
                            <h6>{newname[0].currencies[0].name}</h6>
                        </div>
                    </div>
                </div>
            </>
        </div>

    )
}

export default Country;