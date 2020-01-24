import React, {useEffect} from "react";
import { connect } from "react-redux";
import Smurfs from "./Smurfs.";
import { fetchingSmurfs } from "../actions";



const SmurfsList = props => {


    return(
        <div>
            <h2>Smurf Family</h2>
            <button onClick={props.fetchingSmurfs}>Retrieve Family</button>
            
            {!props.isLoading && props.smurfs && 
                <div className="smurfs">
                    {props.smurfs.map(item => {
                   return(  <Smurfs key={item.id} item={item} />)
                })}
                </div>
            }
            
        </div>
    )
}


const mapStateToProps = state => {
    console.log(state)
    return {
        isLoading: state.isLoading,
        smurfs: state.smurfs, 
        error: state.error,
    }

}


export default connect(mapStateToProps, { fetchingSmurfs })(SmurfsList);

