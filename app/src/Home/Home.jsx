import React, { useContext, useState } from 'react'
import "./Home.css"
import { TextShow } from '../TextShow/TextShow'
import { blogPosts } from "../source"

export const Home = () => {

    const allDate = blogPosts.map((item, index) => 
        item.date.slice(0, 4)
    )
    const uniqueYears = [...new Set(allDate)];
    const [year,setyear] = useState("All")

    return (
        <div>
            <div className='year'>
                <a href="" onClick={()=>setyear("All")}>#All</a>
                {uniqueYears.map((year, index) => (
                    <a key={index} href="#" onClick={()=> {
                        setyear(year)
                    }}>#{year}</a> // 显示每个年份，并为每个年份添加唯一的 key
                ))}
            </div>
            <TextShow blogPosts={blogPosts} year={year}/>
        </div>
    )
}
