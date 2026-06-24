import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import "./Login.css"

export const Login = () => {
    const {login} = useAuth()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      //Viene del context
      await login(formData.email, formData.password);
      console.log("Login exitoso");
      navigate("/admin", { replace: true });  // Redirige a la página de administración después del login exitoso


    } catch (error) {
      console.error(error);
      alert("Error al iniciar sesión");
    }

  }
   return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2>Iniciar Sesión</h2>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Login</button>
    </form>
  );

}