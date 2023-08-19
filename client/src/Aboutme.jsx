import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { aboutmeData } from './Data';
export default function Aboutme() {
    const data = aboutmeData[0];
    return (
        <div>
            <Card variant="outlined" style={{ backgroundColor: "black", height: 580 }}>
                <div style={{ display: "flex", justifyContent: "center", fontSize: 60, marginTop: 30 }}>{data.heading}</div>
                <div style={{ display: "flex", justifyContent: "space-around", margin: 30 }}>
                    <Card style={{ display: 'flex', height: 400, width: 900 }}>
                        <img src={data.imageLink} width="350" height="350" style={{ margin: 25 }} />
                        <div style={{ margin: 50 }}>
                            <div style={{ fontSize: 20 }} >{data.text}</div>
                            <br />
                            <div>
                                <Button variant="contained">{data.buttonText}</Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </Card>
        </div>
    )
}