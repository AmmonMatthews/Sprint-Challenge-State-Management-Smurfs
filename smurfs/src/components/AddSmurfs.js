import React, { useState } from "react";
import { add_Smurf } from "../actions/index";
import { connect } from "react-redux";

const AddSmurf = (props) =>{
    const [smurf, setSmurf] = useState({name:"", age:"", height:""})
    // const smurfsFam = props.smurfs
    const handleChange = e =>{
        console.log(e.target.name)
        setSmurf({...smurf, [e.target.name]: e.target.value})
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
               
               <label id="name"> Name</label>
                <input
                    id="name"    
                    name="name"
                    type="text"
                    placeholder="name"
                    value={smurf.name}
                    onChange={handleChange}
                />
            
            <label id="height"> height</label>
                <input
                id="height"
                name="height"
                type="text"
                placeholder="height"
                value={smurf.height}
                onChange={handleChange}
                />

           
            <label id="age">Age</label>
            <input
            id="age"
            name="age"
            type="text"
            placeholder="Age"
            value={smurf.age}
            onChange={handleChange}
            />
            <button onClick={handleSubmit}>Add to Family</button>
        </form>
    )
}

// const mapStateToProps = state => {
//     return{
//         isLoading: state.addSmurfReducer.isFetching,
//         smurfs: state.addSmurfReducer.smurfs,
//         error: state.addSmurfReducer.error
//     }

// }

export default connect(
    null, 
    { add_Smurf }
)(AddSmurf);