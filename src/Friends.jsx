

import { useEffect, useState } from "react";
import Friend from "./Friend";

export default function()
{
    const [user,setUser]=useState([]);

    useEffect(()=>{

       fetch('https://jsonplaceholder.typicode.com/users')
       .then(res =>res.json())
       .then(data=> setUser(data))


    },[])

    return(

        <div>
            <h2>NewUser:{user.length}</h2>
            {
                user.map(data=><Friend friend={data}></Friend>)
            }
        </div>
    )
}