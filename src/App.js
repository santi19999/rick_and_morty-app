import Cards from './components/cards/Cards';
import style from './App.module.css';
import Nav from './components/nav/Nav';
import { useState } from 'react';

function App() {
	const [characters, setCharacters] = useState([]);

	const addCharacter = (character) => {
		setCharacters([...characters, character]);
	};
	const removeCharacter = (idCharacter) => {
		let newArray = characters.filter((item) => item.id !== idCharacter);
		setCharacters(newArray);
	};
	const searchCharacter = (idCharacter) => {
		const charactersExists = characters.some(
			(character) => character.id === parseInt(idCharacter)
		);
		return charactersExists;
	};
	return (
		<div className={style.App}>
			<Nav addCharacter={addCharacter} searchCharacter={searchCharacter} />
			<Cards characters={characters} removeCharacter={removeCharacter} />

			{/* <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         /> */}
		</div>
	);
}

export default App;
