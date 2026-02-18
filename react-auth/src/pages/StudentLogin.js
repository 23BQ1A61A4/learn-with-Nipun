import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

function StudentLogin() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Student Login</h2>

      <GoogleLogin
        onSuccess={(credentialResponse) => {
          const user = jwtDecode(credentialResponse.credential);
          console.log(user);
          alert("Student Login Successful");
        }}
        onError={() => {
          alert("Login Failed");
        }}
      />

      <br /><br />

      <h3>Or Sign Up</h3>

      <GoogleLogin
        onSuccess={(credentialResponse) => {
          const user = jwtDecode(credentialResponse.credential);
          console.log(user);
          alert("Student Signup Successful");
          navigate("/");
        }}
        onError={() => {
          alert("Signup Failed");
        }}
        text="signup_with"
      />
    </div>
  );
}

export default StudentLogin;
