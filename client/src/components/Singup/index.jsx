import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Signup = () => {
	const [data, setData] = useState({
		name: "",
		email: "",
		phone: "",
		password: "",
		Cpassword: "",
	});
	const [error, setError] = useState("");
	const [formError, setformError] = useState({});
    const [isSubmit, setisSubmit] = useState(false);
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setformError(validate(data))
        setisSubmit(true)
        if(Object.keys(formError).length === 0 && isSubmit){
		try {
			const url = "/api/users";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	}
	};

    const validate = (values) => {
        const errors = {}
        const exp = /^[A-Za-z0-9]$/
        const exp1 = /^[a-zA-Z0-9]*$/gm
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (values.phone.length !== 10) {
            errors.phone = "Mobile  must be 10 number";
        }

       if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if(values.password.length !== 10){
            errors.password = "must be 10 digit"
        }

		if(values.Cpassword!== values.password){
            errors.Cpassword = "Cpassword Not Match"
        }
        return errors;
    }

	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Sign in
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="Name"
							name="name"
							onChange={handleChange}
							value={data.name}
							required
							className={styles.input}
						/>
						<input
							type="number"
							placeholder="phone"
							name="phone"
							onChange={handleChange}
							value={data.phone}
							required
							className={styles.input}
						/>
						<p style={{color: 'red'}}>{formError.phone}</p>

						<input
							type="string"
							placeholder="email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<p style={{color: 'red'}}>{formError.email}</p>

						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						<p style={{color: 'red'}}>{formError.password}</p>

						<input
							type="password"
							placeholder="Confirm Password"
							name="Cpassword"
							onChange={handleChange}
							value={data.Cpassword}
							required
							className={styles.input}
						/>
						<p style={{color: 'red'}}>{formError.Cpassword}</p>
						
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sign Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;
