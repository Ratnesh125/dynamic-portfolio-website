import { SkillsData } from "./Data"

export default function Skills() {
    const data = SkillsData;
    const data1 = data[0];
    const data2 = data[1];
    return (
        <div style={{ color: "white", display: "flex", justifyContent: "space-around", marginTop: 50, marginBottom: 150 }}>
            <div style={{ color: "white", display: "flex", justifyContent: "center", fontSize: 60, marginTop: 100 }}>Skills</div>

            <div style={{ fontSize: 25 }}>
                <div style={{ marginBottom: 20, fontSize: 40 }}>
                    {data1.text}
                </div>
                {data1.list.map((item) => {
                    return (
                        <div>{item.name}</div>
                    )
                })}
            </div>

            <div style={{ fontSize: 25 }}>
                <div style={{ marginBottom: 20, fontSize: 40 }}>
                    {data2.text}
                </div>
                {data2.list.map((item) => {
                    return (
                        <div>{item.name}</div>
                    )
                })}
            </div>
        </div>
    )
}