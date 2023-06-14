import { useState } from 'react';
import style from './Searchbar.module.css';
import axios from 'axios';
export default function SearchBar({ addCharacter, searchCharacter }) {
	const [id, setId] = useState('');

	const handleChange = (idPersonaje) => {
		setId(idPersonaje);
	};
	const onSearch = (id) => {
		if (searchCharacter(id)) {
			window.alert('¡El personaje seleccionado ya existe');
			return;
		}
		axios(`https://rickandmortyapi.com/api/character/${id}`)
			.then(({ data }) => {
				if (data.name) {
					addCharacter(data);
				}
			})
			.catch((error) => {
				window.alert(error.message);
			});
		setId('');
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
			<button onClick={() => onRandom(0, 825)}>Random</button>
			<div className={style.containerSearch}>
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
