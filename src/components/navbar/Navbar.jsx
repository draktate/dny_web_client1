import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Book4Me.com</span>
        </Link>
        {user ? <div className="navItems"> {user.username}  
                <button className="navButton" onClick={()=>{       dispatch({ type: "LOGOUT", payload: null });
}}> Logout </button>  </div>: (
          <div className="navItems">
            <button className="navButton" onClick={()=>{navigate("/register");}} >Register</button>
            <button className="navButton"  onClick={()=>{navigate("/login");}} >Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
