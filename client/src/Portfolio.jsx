import Button from '@mui/material/Button';
import { PortfolioData } from './Data';

const data = PortfolioData;
export default function Portfolio() {
    return (
        <div style={{ height: 425 }}>
            <div  >
                <div style={{ marginTop: 180, color: "white", display: "flex", justifyContent: "space-around" }}>
                    <div>
                        <div style={{ fontSize: 50 }} >{data[0].greet}</div>
                        <div style={{ fontSize: 110 }} >{data[0].name}</div>
                        <div style={{ fontSize: 30 }} >{data[0].role}</div>
                        <div style={{ marginTop: 10 }}>
                            <Button variant="text" size="large" style={{ color: "black" }} ><img src={data[0].githubLogo} width="50" height="50" />
                            </Button>
                            <Button variant="text" size="large" style={{ color: "black" }} ><img src={data[0].linkedinLogo} width="50" height="50" />
                            </Button>
                            <Button variant="text" size="large" style={{ color: "black" }} ><img src={data[0].leetcodeLogo} width="50" height="50" />
                            </Button>
                            <Button variant="text" size="large" style={{ color: "black" }} ><img src={data[0].gmailLogo} width="50" height="50" />
                            </Button>
                        </div>
                    </div>
                    <div>
                        <img src={data[0].imageLink} width="350" height="350" />
                    </div>
                </div>
            </div>
        </div>
    )
}