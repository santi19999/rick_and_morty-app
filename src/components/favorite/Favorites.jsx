import { connect, useDispatch } from 'react-redux';
import Card from '../card/Card';
import style from './Favorite.module.css';
import { orderCards, filterCards } from '../../redux/actions/actions';
import { useState } from 'react';
const Favorites = ({ myFavorites }) => {
	const [aux, setAux] = useState(false);
	const dispatch = useDispatch();
	const handleOrder = (e) => {
		setAux(!aux);
		dispatch(orderCards(e.target.value));
	};
	const handleFilter = (e) => {
		dispatch(filterCards(e.target.value));
	};
	return (
		<div className={style.favorite}>
			<div>
				<select name="" id="" onChange={handleOrder}>
					<option value="Ascendente">Ascendente</option>
					<option value="Descendente">Descendente</option>
				</select>
				<select name="" id="" onChange={handleFilter}>
					<option value="ALL">All Characters</option>
					<option value="Male">Male</option>
					<option value="Female">Female</option>
					<option value="Genderless">Genderless</option>
					<option value="unknown">unknown</option>
				</select>
			</div>
			{myFavorites.map((char) => {
				return (
					<Card
						key={char.id}
						id={char.id}
						name={char.name}
						status={char.status}
						species={char.species}
						gender={char.gender}
						origin={char.origin?.name}
						image={char.image}
						onClose={char.onClose}
					/>
				);
			})}
		</div>
	);
};
export function mapStateToProps(state) {
	return {
		myFavorites: state.myFavorites,
	};
}

export default connect(mapStateToProps)(Favorites);
