import React, { useState } from "react";
import { add_Smurf } from "../actions/index";
import { connect } from "react-redux";

const AddSmurf = (props) =>{
    const [smurf, setSmurf] = useState({name:"", age:"", height:""})
    
    const handleChange = e =>{
        
        setSmurf({...smurf, name: e.target.value, height: e.target.vaule, age: e.target.value})
    }

    const handleSubmit= event => {
        event.preventDefault();
        props.add_Smurf(smurf);
        setSmurf({
            name: "",
            age: "",
            height: ""
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <label id="nname"> Name </label>
               
                <input 
                maxLength= "20"
                id="nname"
                name= "name"
                type="text"
                placeholder="name"
                value={smurf.name}
                onChange={handleChange}
                />

            
           <label>
                height
                <input
                id="heigh"
                name="height"
                label="height"
                type="text"
                placeholder="height"
                value={smurf.height}
                onChange={handleChange}
                />

           </label>
            <label>
                Age
            <input
            id="ag"
            name="age"
            label="age"
            type="text"
            placeholder="Age"
            value={smurf.age}
            onChange={handleChange}
            />
            </label>
            <button onClick={handleSubmit}>Add to Family</button>
        </form>
    )
}

export default connect(
    null, 
    { add_Smurf }
)(AddSmurf);