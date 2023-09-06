import React, { useEffect, useState } from "react";

function UserPage() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        (async function (){
            let response = await fetch('https://jsonplaceholder.typicode.com/posts')
            let data = await response.json();
            setPosts(data);
        })(); 
    },[])
console.log(posts);
    return (
        <div>
            {
                posts.map(post => 
                    <div key={post.id}>
                        <h1>{post.userId}</h1>
                        <h2>{post.id}</h2>
                        <p>{post.title}</p>
                        <p>{post.body}</p>
                    </div>
                    
                )
            }
        </div>
    )
}

export default UserPage