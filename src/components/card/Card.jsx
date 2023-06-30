import ButtonDelete from '../button/ButtonDelete';
import Imagen from '../imagen/Imagen';
import style from './Card.module.css';
import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFav, removeFav } from '../../redux/actions/actions';
import { useEffect, useState } from 'react';
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
	myFavorites,
}) {
	const { pathname } = useLocation();

	useEffect(() => {
		myFavorites.forEach((fav) => {
			if (fav.id === id) {
				setIsFav(true);
			}
		});
	}, [myFavorites]);
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
	const styles = {
		order: 1,
		position: 'absolute',
		top: 35 + 'px',
		right: -5 + 'px',
		width: 50 + 'px',
	};

	return (
		<div className={style.containerItem + ' ' + style.animate}>
			{pathname === '/home' && (
				<ButtonDelete
					text="X"
					onClick={() => {
						onClose(id);
						setIsFav(false);
						handleFavorite();
					}}
				/>
			)}
			<span style={styles}>
				{isFav ? (
					<button onClick={handleFavorite} className={style.buttonStyle}>
						❤️
					</button>
				) : (
					<button onClick={handleFavorite} className={style.buttonStyle}>
						🤍
					</button>
				)}
			</span>
			{pathname === '/home' && (
				<Link to={`/detail/${id}`}>
					<div class={style.swing}>
						<span>i</span>
					</div>
				</Link>
			)}
			<div className="dataCard">
				<h2 className={style.name}> {name}</h2>
				<h2 className={style.status}> {status}</h2>
				<h2 className={style.species}> {species}</h2>
				<h2 className={style.hender}> {gender}</h2>
				<h2 className={style.origin}> {origin}</h2>
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
export function mapStateToProps(state) {
	return {
		myFavorites: state.myFavorites,
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
