import Button from '../button/Button';
import Imagen from '../imagen/Imagen';
import style from './Card.module.css';
export default function Card(props) {
	return (
		<div className={style.containerItem}>
			<Button
				text="X"
				onClick={() => {
					props.removeCharacter(props.id);
				}}
			/>
			<div className="dataCard">
				<h2 className={style.h2}> {props.name}</h2>
				<h2 className={style.h2}> {props.status}</h2>
				<h2 className={style.h2}> {props.species}</h2>
				<h2 className={style.h2}> {props.gender}</h2>
				<h2 className={style.h2}> {props.origin}</h2>
			</div>
			<Imagen url={props.image} />
		</div>
	);
}
