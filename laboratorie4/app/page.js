"use client";
import React, { useState, useEffect } from "react";
import BlogCard from "./javascript/BlogCard";

export default function Home() {

  const [publications, setPublications] = useState([]);

  useEffect(() => {
    async function CreationPublication(){
      fetch('http://localhost:3000/Publications')
      .then(response => response.json())
      .then(json => setPublications(json))
      .catch(err => console.log(err));
  }
    CreationPublication();
  }, []);

  return (
    <div className="row" id="Publications"> 
    {publications.map(publication => 
          <BlogCard key= {publication.id} {...publication} />
      )}
    </div>
)
}
