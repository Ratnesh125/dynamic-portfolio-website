import ProjectCard from "./ProjectCard"
import { ProjectData } from './Data';

export default function Projects() {
    const data = ProjectData;
    return (
        <div>
            <div style={{ color: "white", display: "flex", justifyContent: "center", fontSize: 60, marginTop: 30 }}>Projects</div>
            {data.map((item, index) => (
                <ProjectCard key={index} item={item} />
            ))}
        </div>
    )
}