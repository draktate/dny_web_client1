import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";
import { SearchContext } from "../../context/SearchContext";


const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined
  });

  const searchContextValues  = useContext(SearchContext);
  const { loading, error, dispatch } = useContext(AuthContext);
  //const { data, loading, error } = useFetch(`${searchContextValues.api_redirect}/hotels/find/${id}`);


  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    console.log("Trying to login to ");
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      console.log("credentials:", credentials)

      console.log("Trying to login to ", `${searchContextValues.api_redirect}/auth/login`)
      const res = await axios.post(`${searchContextValues.api_redirect}/auth/login`, credentials);
      console.log(res)

      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      //this.context.router.history.goBack;
      //this.goBack()
      navigate(-1)

  
  
    } catch (err) {

      console.log("response:", err)
      //dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }


  };


  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button disabled={loading} onClick={handleClick} className="lButton">
          Login
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;
