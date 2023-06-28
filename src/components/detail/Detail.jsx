import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import style from '../card/Card.module.css';
import Imagen from '../imagen/Imagen';

const Detail = () => {
	const { id } = useParams();
	const [character, setCharacter] = useState({});

	const viewCardCharactert = () => {
		return (
			<div className={style.containerItem + ' ' + style.animate}>
				<div className="dataCard">
					<h2 className={style.h2}> {character.name}</h2>
					<h2 className={style.h2}> {character.status}</h2>
					<h2 className={style.h2}> {character.species}</h2>
					<h2 className={style.h2}> {character.gender}</h2>
					<h2 className={style.h2}> {character.origin.name}</h2>
				</div>
				<Imagen url={character.image} alt={character.name} />
			</div>
		);
	};
	useEffect(() => {
		axios(`https://rickandmortyapi.com/api/character/${id}`).then(
			({ data }) => {
				if (data.name) {
					setCharacter(data);
				} else {
					window.alert('No hay personajes con ese ID');
				}
			}
		);
		return setCharacter({});
	}, [id]);
	return character.name !== undefined ? viewCardCharactert() : '';
};

export default Detail;
