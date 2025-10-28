import React, { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmp: "",
    otp:""
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.email.includes("@")) newErrors.email = "Invalid email";
    if (form.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";
    if (form.confirmp !== form.password)
        newErrors.confirmp = "Password should be same as like the password"
    if (!isLogin && form.name.trim() === "")
      newErrors.name = "Name is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert(isLogin ? "Login successful " : "Signup successful ");
      setErrors({});
      setForm({ name: "", email: "", password: "",confirmp: "",otp:"" });
    }
  };

  return (
    <>
      <h1>{isLogin ? "Login" : "Signup"} Form</h1>

      <form onSubmit={handleSubmit}>
       
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && <p>{errors.name}</p>}
          </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Confirm Password"
            value={form.confirmp}
            onChange={handleChange}
          />
          {errors.confirmp && <p>{errors.confirmp}</p>}
        </div>
        <div>
          <input type="text" name ="OTP" placeholder="OTP" />
        </div>


        <button type="submit">{isLogin ? "Login" : "Signup"}</button>
      </form>

      
    </>
  );
}

export default App;