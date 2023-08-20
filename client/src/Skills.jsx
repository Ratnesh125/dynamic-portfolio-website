import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function Skills() {
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);

    useEffect(() => {

        async function fetchData() {
            const response1 = await axios.get("http://localhost:3000/skill/64e1b4adfcf3ad5d4ecd219b", null)
            const response2 = await axios.get("http://localhost:3000/skill/64e1b7ddfcf3ad5d4ecd219d", null)
            console.log(response1);
            setData1(response1.data)
            setData2(response2.data)
        }
        fetchData();
    }, []);
    return (
        <div style={{ color: "white", display: "flex", justifyContent: "space-around", marginTop: 50, marginBottom: 150 }}>
            <div style={{ color: "white", display: "flex", justifyContent: "center", fontSize: 60, marginTop: 100 }}>Skills</div>
            <div style={{ fontSize: 25 }}>
                <div style={{ marginBottom: 20, fontSize: 40 }}>
                    {data1.text}
                </div>
                {data1.list?.map((item) => {
                    return (
                        <div>{item.name}</div>
                    )
                })}
            </div>

            <div style={{ fontSize: 25 }}>
                <div style={{ marginBottom: 20, fontSize: 40 }}>
                    {data2.text}
                </div>
                {data2.list?.map((item) => {
                    return (
                        <div>{item.name}</div>
                    )
                })}
            </div>
        </div>
    )
}