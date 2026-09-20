import { useState } from "react";
import axios from "axios";
import "./Login.css";

function Login() {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    // Error message state
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        // Remove error when user starts typing again
        setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Clear previous error
        setError("");

        try {

            const response = await axios.post(
                "http://localhost:3002/login",
                formData,
                {
                    withCredentials: true,
                }
            );

            console.log(response.data);

            if (response.data.success) {
                alert(response.data.message);

                window.location.href = "http://localhost:3001";
            }

        } catch (error) {

    console.log(
        error.response?.data || error.message
    );

    const message =
        error.response?.data?.message || "Something went wrong";

    setError(message);

    alert(message);
}
    };

    return (
        <div className="login-page">

            <div className="login-box">

                <h2>Login</h2>

                <p className="login-subtitle">
                    Login to your Zerodha account
                </p>

                <form onSubmit={handleSubmit}>

                    <label>Email</label>

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label>Password</label>

                    <input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                    {/* Error message */}
                    {error && (
                        <p className="login-error">
                            {error}
                        </p>
                    )}

                    <button type="submit">
                        Login
                    </button>

                </form>

                <p className="signup-text">
                    Don't have an account?
                    <a href="/signup"> Sign up</a>
                </p>

            </div>

        </div>
    );
}

export default Login;