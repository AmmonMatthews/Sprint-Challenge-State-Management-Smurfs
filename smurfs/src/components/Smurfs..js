import React from "react";


const Smurfs = ({item}) => {


    return (
        <div>
            <h2>Nam {item.name}</h2>
            <p>Age {item.age}</p>
            <p>Height {item.height}</p>
        </div>
    )
}

export default Smurfs;