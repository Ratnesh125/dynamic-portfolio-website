import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from './ProjectCard';

export default function Projects() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/project")
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div>
            <div style={{ color: "white", display: "flex", justifyContent: "center", fontSize: 60, marginTop: 30 }}>Projects</div>
            {data.map((item, index) => (
                <ProjectCard key={index} item={item} />
            ))}
        </div>
    );
}
