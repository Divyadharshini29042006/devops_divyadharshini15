import React, { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmp: ""
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.email.includes("@")) newErrors.email = "Invalid email";
    if (form.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
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
      alert("login");
      setErrors({});
      setForm({ name: "", email: "", password: "",confirmp: "" });
    }
  };

  return (
    <>
      <h1>{ "Signup"} Form</h1>

      <form onSubmit={handleSubmit}>
        {!isLogin && (
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
        )}

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


        <button type="submit">Signup</button>
      </form>

      
    </>
  );
}

export default App;