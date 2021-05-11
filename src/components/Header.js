import { useState ,useContext} from "react";
import { Link } from "react-router-dom";
import logo from "../images/primetek.png";
import {userContext} from "../contexts/userContext"
import { AiFillCloseCircle } from "react-icons/all";
import {
  Container,
  Modal,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
} from "reactstrap";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import CloseBtn from "./CloseBtn";


const Header = () => {

  const {userdata} =useContext(userContext)
  const [showlogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const toggleShowLogin = () => setShowLogin(!showlogin);
  const toggleShowSignUp = () => setShowSignUp(!showSignUp);

  return (
    <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Container>
        <NavbarBrand>
          <Link to="/">
            <img style={{ width: 150, height: 50 }} src={logo} alt="PRIMETEK" />
          </Link>
        </NavbarBrand>
        <Nav className="navbar-nav">
          <NavItem>
            <Link to="/" className="nav-link">
              <NavLink>Home</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/products" className="nav-link">
              <NavLink>phones</NavLink>
            </Link>
          </NavItem>
          {!Object.keys(userdata).length>0 &&
          <>
          <NavItem>
            <Link className="nav-link">
              <NavLink onClick={toggleShowSignUp} as="button">
                sign up
              </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link">
              <NavLink onClick={toggleShowLogin}>sign in</NavLink>
            </Link>
          </NavItem>
          </>}
          <NavItem>
            <Link className="nav-link">
              <NavLink>contact</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link">
              <NavLink>About</NavLink>
            </Link>
          </NavItem>
        </Nav>
      </Container>
      {/* modal is down */}
      <Modal isOpen={showSignUp} onDoubleClick={toggleShowSignUp}>
        <CloseBtn>
          <h3>Register new account here</h3>
          <AiFillCloseCircle onClick={toggleShowSignUp} size={40} />
        </CloseBtn>
        <SignUp />
      </Modal>
      <Modal isOpen={showlogin} onDoubleClick={toggleShowLogin}>
        <CloseBtn>
          <h3>LOGIN HERE</h3>
          <AiFillCloseCircle onClick={toggleShowLogin} size={40} />
        </CloseBtn>
        <SignIn />
      </Modal>
    </Navbar>
  );
};

export default Header;
