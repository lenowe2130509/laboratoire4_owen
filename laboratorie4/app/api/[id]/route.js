export const dynamic = 'force-dynamic';

export async function GET(request, { params }) {
    let blog = null;
    const response = await fetch(`http://localhost:3000/Publications/${params.id}`)
    blog = await response.json();
    return new Response(JSON.stringify(blog),{
        status: 200
    });

}