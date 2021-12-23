import {Navbar,Container,Nav} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { lougout } from '../Redux/Actions/userActions'

function Header() {
    const {userInfo} = useSelector(state => state.loginDetails)
    const dispatch = useDispatch()
    const handleLougOut=()=>{
        dispatch(lougout())
    }
    return (
        
        <>
             <Navbar bg="primary" variant="dark">
                <Container>
                <LinkContainer to='/' >
                    <Navbar.Brand >Navbar</Navbar.Brand>
                </LinkContainer>
                <Nav className="me-auto">
                <LinkContainer to='/'>
                    <Nav.Link >Home</Nav.Link>
                </LinkContainer>
                {userInfo ? 
                <LinkContainer to={`/profile/${userInfo.userId}`}>
                <Nav.Link >Profile</Nav.Link>
                </LinkContainer>
                
                    :
                <LinkContainer to='/login'>
                <Nav.Link >Login</Nav.Link>
                </LinkContainer>
            }

{              userInfo ? 
                <Nav.Link ><button onClick={handleLougOut}>Log out</button></Nav.Link>

                :
                <LinkContainer to='/signup'>
                <Nav.Link >Sign Up</Nav.Link>
                </LinkContainer>}
                </Nav>
                </Container>
            </Navbar> 
        </>
    )
}

export default Header
