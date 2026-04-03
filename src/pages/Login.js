import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";
import { toast } from "react-toastify";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(credentials);
      const { role, username } = response.data;

      // Le token est maintenant dans un cookie HTTPOnly (non accessible en JS)
      // On stocke seulement les infos non-sensibles pour l'affichage
      localStorage.setItem("username", username);
      localStorage.setItem("role", role);
      localStorage.setItem("isAuthenticated", "true");

      toast.success(`Bienvenue, ${username} !`);
      navigate("/");
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || "Erreur de connexion");
      } else {
        toast.error("Une erreur est survenue. Veuillez réessayer.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-80"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Connexion</h2>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={credentials.username}
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
          className="border border-gray-300 p-2 w-full mb-4"
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
          className="border border-gray-300 p-2 w-full mb-4"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 w-full rounded"
        >
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default Login;
