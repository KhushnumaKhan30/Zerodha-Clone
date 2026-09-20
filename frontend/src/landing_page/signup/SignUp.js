
import { useState } from "react";
import axios from "axios";
import "./SignUp.css";

function SignUp() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "https://zerodha-clone-backend-tftb.onrender.com/signup",
                formData,
                {
                    withCredentials: true,
                }
            );

            console.log(response.data);
            alert(response.data.message);

            if (response.data.success) {
            window.location.href = "http://localhost:3001";
        }
       

        } catch (error) {
            console.log(error.response?.data || error.message);
        }
    };

    return (
        <div className="signup-page">

            <div className="signup-box">

                <h2>Sign up</h2>

                <p className="signup-subtitle">
                    Create your Zerodha account
                </p>

                <form onSubmit={handleSubmit}>

                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />

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

                    <button type="submit">
                        Sign Up
                    </button>

                </form>

                <p className="login-text">
                    Already have an account?
                    <a href="/login"> Login</a>
                </p>

            </div>

        </div>
    );
}

export default SignUp;