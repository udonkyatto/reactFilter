import React, { useState } from 'react'
import "./TextShow.css"
import { v4 as uuidv4 } from 'uuid';
export const TextShow = ({blogPosts,year}) => {

    const blogPostsWithIds = blogPosts.map(post => ({
        ...post,
        id: uuidv4()  // 为每个博客项生成唯一的 id
    }));

    const [bolgfilter, setbolgfilter] = useState(blogPostsWithIds)


    const deleteblog = (id) => {
        const newBloglist = bolgfilter.filter((item) => item.id !== id);
        setbolgfilter(newBloglist)
    }

    return (
        <div>
            {bolgfilter.map((item) => {
                if (year === "All" || item.date.slice(0, 4) == year) {
                    return (
                            <div key={item.id} className='card'>
                                <h4>{item.title}</h4>
                                <p>{item.date}</p>
                                <button onClick={() => {
                                    deleteblog(item.id)
                                }}>Delete</button>
                            </div>
                    )
                }

            })}
        </div>
    )
}
