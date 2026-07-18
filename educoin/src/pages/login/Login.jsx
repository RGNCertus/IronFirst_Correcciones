import "./Login.css";
import { FaUserGraduate } from "react-icons/fa";

function Login() {
  return (
    <div className="login-container">

      <div className="login-card">

        <div className="logo">
          <FaUserGraduate />
        </div>

        <h1>EduCoin</h1>

        <p>
          Aprende educación financiera mientras juegas.
        </p>

        <input
          type="text"
          placeholder="Usuario"
        />

        <input
          type="password"
          placeholder="Contraseña"
        />

        <button>
          Iniciar Sesión
        </button>

      </div>

    </div>
  );
}

export default Login;