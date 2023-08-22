import Button from '@mui/material/Button';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Portfolio() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/portfolio/64e1b2bffcf3ad5d4ecd2189")
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);
    return (
        <div >
            <div style={{ height: 600 }}>
                <div style={{ color: "white", display: "flex", justifyContent: "flex-start" }}>
                    <div style={{ marginLeft: 100, marginTop: 100 }}>
                        <div style={{ fontSize: 50 }} >{data.greet}</div>
                        <div style={{ fontSize: 110 }} >{data.name}</div>
                        <div style={{ fontSize: 30 }} >{data.role}</div>
                        <div style={{ marginTop: 10 }}>
                            <Button variant="text" size="large" style={{ color: "black" }} ><img src={data.githubLogo} width="50" height="50" />
                            </Button>
                            <Button variant="text" size="large" style={{ color: "black" }} ><img src={data.linkedinLogo} width="50" height="50" />
                            </Button>
                            <Button variant="text" size="large" style={{ color: "black" }} ><img src={data.leetcodeLogo} width="50" height="50" />
                            </Button>
                            <Button variant="text" size="large" style={{ color: "black" }} ><img src={data.gmailLogo} width="50" height="50" />
                            </Button>
                        </div>
                    </div>
                    <div style={{ marginTop: 100, marginLeft: 70 }}>
                        <img src={data.imageLink} width="300" height="300" />
                    </div>
                </div>
            </div>
        </div>
    )
}