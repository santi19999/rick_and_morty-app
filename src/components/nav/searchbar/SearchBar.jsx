import { useState } from 'react';
import style from './Searchbar.module.css';
import { NavLink } from 'react-router-dom';
export default function SearchBar({ onSearch, setAccess }) {
	const [id, setId] = useState('');

	const handleChange = (idPersonaje) => {
		setId(idPersonaje);
	};

	const onRandom = (min, max) => {
		min = Math.ceil(min);
		max = Math.floor(max);
		let random = parseInt(Math.floor(Math.random() * (max - min) + min));
		// The maximum is exclusive and the minimum is inclusive
		onSearch(random);
	};
	return (
		<div className={style.navBar}>
			<h2>Rick and Morty App</h2>
			<div className="pages">
				<NavLink to={'/about'}>
					<button>About</button>
				</NavLink>
				<NavLink to={'/home'}>
					<button>Home</button>
				</NavLink>
				<NavLink to={'/favorites'}>
					<button>Favorites</button>
				</NavLink>
				<button onClick={() => setAccess(false)}>LogOut</button>
			</div>
			<div className={style.containerSearch}>
				<button
					onClick={() => onRandom(0, 825)}
					className={style.randomButton}
					id="random"
				>
					Random
				</button>
				<input
					type="search"
					value={id}
					onChange={(e) => {
						handleChange(e.target.value);
					}}
				/>
				<button onClick={() => onSearch(id)} className={style.btn}>
					Agregar
				</button>
			</div>
		</div>
	);
}
