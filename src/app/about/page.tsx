import { console } from 'inspector';
import { resolve } from 'path';
import React from 'react'
const url = "https://jsonplaceholder.typicode.com/todos";

const fetchTodos = async () => {
    await new Promise((resolve)=>setInterval(resolve,1000))


    const res = await fetch(url)
    const data = await res.json()
    console.log(data)

    return data
};

const AboutPage = async () => {
    //Js
    const data = await fetchTodos();
    console.log(data)

    return (
        <div>
            AboutPage

            {
                data.map((item: { id: React.Key | null | undefined; title: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }) => (
                    <li key={item.id}>{item.title}</li>
                ))
            }

            {/* {
                data.map((item, index) => {
                    return <li key={index}>{item.title}</li>
                })
            } */}
        </div>
    )
}

export default AboutPage;
