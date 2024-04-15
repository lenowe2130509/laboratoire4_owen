export const dynamic = 'force-dynamic';
import React from "react";

export async function POST(request) {
    const response = await fetch('http://localhost:3000/Publications', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(await request.json()),
    })
    let blog = await response.json();
    return new Response(JSON.stringify(blog),{
        status: 200
    })
}
    
        