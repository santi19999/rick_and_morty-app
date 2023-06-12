import Cards from './components/cards/Cards';
import SearchBar from './components/searchbar/SearchBar';
import characters from './data.js';
import style from './App.module.css';

function App() {
	return (
		<div className={style.App}>
			<SearchBar onSearch={(characterID) => window.alert(characterID)} />
			<Cards characters={characters} />
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
