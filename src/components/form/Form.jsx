import { useState } from 'react';
import { validation } from './validation';
import style from './Form.module.css';
const Form = ({ login }) => {
	const [userData, setUserData] = useState({
		email: '',
		password: '',
	});
	const [errors, setErrors] = useState({});
	const handleChange = (e) => {
		const nameProperty = e.target.name;
		const valueProperty = e.target.value;
		setErrors(validation({ ...userData, [nameProperty]: valueProperty }));
		setUserData({ ...userData, [nameProperty]: valueProperty });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		login(userData);
	};
	return (
		<div className={style.containerForm}>
			<form className={style.form}>
				<label htmlFor="">
					Email:
					<input
						type="email"
						name="email"
						value={userData.email}
						onChange={handleChange}
					/>
				</label>
				<span>{errors.email}</span>
				<label htmlFor="">
					Password:
					<input
						type="password"
						name="password"
						value={userData.password}
						onChange={handleChange}
					/>
				</label>
				<span>{errors.password}</span>
				<button type="submit" onClick={handleSubmit} className={style.btnForm}>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Form;
