import { connect } from 'react-redux';
import Card from '../card/Card';
import style from './Favorite.module.css';
const Favorites = ({ myFavorites }) => {
	return (
		<div className={style.favorite}>
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
