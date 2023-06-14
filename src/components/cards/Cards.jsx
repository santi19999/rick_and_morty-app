import Card from '../card/Card';
import style from './Cards.module.css';

export default function Cards({ characters, removeCharacter }) {
	return (
		<div className={style.container}>
			{characters.map((character) => {
				return (
					<Card
						id={character.id}
						key={character.id}
						name={character.name}
						status={character.status}
						species={character.species}
						gender={character.gender}
						origin={character.origin.name}
						image={character.image}
						removeCharacter={removeCharacter}
					/>
				);
			})}
		</div>
	);
}
