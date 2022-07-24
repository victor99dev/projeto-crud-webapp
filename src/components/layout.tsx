import { Container } from "semantic-ui-react"
import Navbar from "./Navbar"

export default function Layout({children} : {children: JSX.Element | JSX.Element []}) {
    return (
        <div>
            <Navbar/>
            <main style={{background: '#DCDCDC'}}>
                <Container style ={{paddingTop: '3rem', height: '150vh'}}>
                    {children}
                </Container>
            </main>
        </div>
    )
}