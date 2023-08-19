import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

export default function ProjectCard(props) {
    const data = props.item;
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-around", margin: 30, flexWrap: "wrap" }}>
                <Card style={{ display: 'flex', height: 300, width: 550 }}>
                    <img src={data.imageLink} width="250" height="250" style={{ margin: 25 }} />
                    <div style={{ margin: 50 }}>
                        <div style={{ fontSize: 20 }} >{data.text}
                        </div>
                        <br />
                        <div>
                            <Button variant="contained">Live Link</Button>
                        </div>
                        <div style={{ marginTop: 10 }}>
                            <Button variant="contained">Source Code</Button>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}