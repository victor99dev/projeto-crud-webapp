import {Button, Container, Menu} from 'semantic-ui-react'
import Image from 'next/image'
import {useRouter} from 'next/router'

export default function Navbar () {
    
    const router = useRouter ();

    return (
        <Menu 
            inverted 
            attached
            style={{padding: '1.5rem'}}
            color= 'blue'
        > 
                <Container>
                    <Menu.Item onClick={() => router.push('/')}>
                        <Image 
                            src='https://seeklogo.com/images/S/snoopy-dog-and-house-cartoon-logo-CCF69B5E77-seeklogo.com.png'
                            width={50}
                            height={50}
                            alt='Logo'
                            />
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Button onClick={() => router.push('/tasks/new')}>
                                Novo Cadastro
                            </Button>
                        </Menu.Item>
                    </Menu.Menu>              
            
                </Container>
            </Menu>
    )
}