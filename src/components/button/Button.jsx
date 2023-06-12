import style from './Button.module.css';
export default function Button(props) {
	return (
		<button onClick={props.onClick} className={style.btn}>
			<img
				width="30"
				height="30"
				src="https://img.icons8.com/color/48/delete-forever.png"
				alt="delete-forever"
				onClick={props.onClick}
			/>
		</button>
	);
}
