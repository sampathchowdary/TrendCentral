import React, { useEffect, useState } from 'react';

const ConditionalRendering:React.FC = () => {
    const [data,setData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            setData(data)
            setIsLoading(false)
        })
    },[])
    console.log(data)
    return(
        <div>
            {isLoading ? (<span> API Loading </span>) :
                (<div>
                    <h3> API Data</h3>
                    <ul>
                        {data?.slice(0,5).map((item: any) => (
                            <li key={item.id}>{item.id}: {item.title}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default ConditionalRendering;