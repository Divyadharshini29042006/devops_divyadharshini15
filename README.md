# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

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
      alert(isLogin ? "Login successful " : "Signup successful ");
      setErrors({});
      setForm({ name: "", email: "", password: "",confirmp: "" });
    }
  };

  return (
    <>
      <h1>{isLogin ? "Login" : "Signup"} Form</h1>

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


        <button type="submit">{isLogin ? "Login" : "Signup"}</button>
      </form>

      <p>
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button type="button" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Signup" : "Login"}
        </button>
      </p>
    </>
  );
}

export default App;