import React from "react";
import { Link, Redirect } from "react-router-dom";

function DogDetails({dog}) {
    return(
        <div>
        <h1>{dog.name}</h1>
        </div>
    )
}

export default DogDetails;