import React, { useState, useEffect } from "react";
import userContext from "./UserContext.js";


export default function BlogDetails() {
    const id = React.useContext(userContext);
    const [Publications, setPublications] = React.useState({});

    React.useEffect(() => {        
        async function CreationBlog(){
            fetch(`http://localhost:3001/api/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then(response => response.json())
            .then(json => setPublications(json))
            .catch(err => console.log(err));
        }
        CreationBlog();
    },[id]);

    return (
        < > 
            <div>     
                <img src="image/planete.png" className="img-fluid mx-auto d-block" width="210" height="172" />
                <h1 className="display-4">{Publications.titre}</h1>
                <div id="texting"> {Publications.contenu}</div>
            </div>          
        </>
    )
}