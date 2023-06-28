import Button from '../button/Button';
import Imagen from '../imagen/Imagen';
import style from './Card.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFav, removeFav } from '../../redux/actions/actions';
import { useState } from 'react';
function Card({
	id,
	name,
	status,
	species,
	origin,
	gender,
	image,
	onClose,
	addFav,
	removeFav,
}) {
	const [isFav, setIsFav] = useState(false);

	const handleFavorite = () => {
		if (isFav) {
			setIsFav(false);
			removeFav(id);
		} else {
			setIsFav(true);
			addFav({
				id,
				name,
				status,
				species,
				origin,
				gender,
				image,
			});
		}
	};
	return (
		<div className={style.containerItem + ' ' + style.animate}>
			<Button
				text="X"
				onClick={() => {
					onClose(id);
				}}
			/>
			{isFav ? <Button className={style.buttonFavorite}>❤️</Button> : ''}
			<div className="dataCard">
				<Link to={`/detail/${id}`}>
					<h2 className={style.h2}> {name}</h2>
				</Link>
				<h2 className={style.h2}> {status}</h2>
				<h2 className={style.h2}> {species}</h2>
				<h2 className={style.h2}> {gender}</h2>
				<h2 className={style.h2}> {origin}</h2>
			</div>
			<Imagen url={image} alt={name} />
		</div>
	);
}

export function mapDispatchToProps(dispatch) {
	return {
		addFav: function (character) {
			dispatch(addFav(character));
		},
		removeFav: function (id) {
			dispatch(removeFav(id));
		},
	};
}

export default connect(null, mapDispatchToProps)(Card);
