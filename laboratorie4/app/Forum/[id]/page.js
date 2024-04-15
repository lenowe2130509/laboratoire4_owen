"use client";
import React, { useState, useEffect } from "react";
import BlogDetails from "./blog/BlogDetails";
import AddComment from "./blog/AddComment";
import CommentList from "./blog/CommentList";
import userContext from "./blog/UserContext.js";

export default function Forum({params}) {
    return (
        <userContext.Provider value={params.id}>
            <BlogDetails />
            <AddComment />
            <CommentList />
        </userContext.Provider>
    )
}