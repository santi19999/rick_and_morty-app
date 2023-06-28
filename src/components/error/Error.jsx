import style from './Error.module.css';
const Error = () => {
	return (
		<div className="background-img">
			<div className={style.space}></div>
			<div className={style.wrapper}>
				<div className="img-wrapper">
					<span>44</span>
				</div>
				<p>
					The page you are trying to search has been <br /> moved to another
					universe.
				</p>
				<button type="button">GET ME HOME</button>
			</div>
		</div>
	);
};

export default Error;
