import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Learn with Nipun</h1>

      <button onClick={() => navigate("/student-login")}>
        Student Login
      </button>

      <br /><br />

      <button onClick={() => navigate("/teacher-login")}>
        Teacher Login
      </button>
    </div>
  );
}

export default Home;
