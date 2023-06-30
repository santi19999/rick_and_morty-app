import Cards from './components/cards/Cards';
import style from './App.module.css';
import Detail from './components/detail/Detail';
import Nav from './components/nav/Nav';
import { useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/about/About';
import Error from './components/error/Error';
import Form from './components/form/Form';
import axios from 'axios';
import { useEffect } from 'react';
import Favorites from './components/favorite/Favorites';

function App() {
	//function return int > 2
	const navigate = useNavigate();

	const EMAIL = '';

	const PASSWORD = '';

	let path = useLocation().pathname;
	const [characters, setCharacters] = useState([]);
	const [access, setAccess] = useState(false);

	const onSearch = (id) => {
		if (!id) alert('Ingresa un ID');
		if (characters.find((char) => char.id === parseInt(id))) {
			alert(`Ya existe el personaje con el id ${id}`);
			return;
		}
		axios(`https://rickandmortyapi.com/api/character/${id}`)
			.then(({ data }) => {
				if (data.name) {
					setCharacters((oldChars) => [...oldChars, data]);
				}
			})
			.catch((err) => alert(err.response.data.error));
	};
	const onClose = (idCharacter) => {
		let newArray = characters.filter((item) => item.id !== idCharacter);
		setCharacters(newArray);
	};
	const login = (userData) => {
		if (userData.email === EMAIL && userData.password === PASSWORD) {
			setAccess(true);
			navigate('/home');
		}
	};
	useEffect(() => {
		!access && navigate('/');
	}, [access]);

	return (
		<div className={style.App}>
			{path !== '/' ? <Nav onSearch={onSearch} setAccess={setAccess} /> : ''}
			<Routes>
				<Route path="/favorites" element={<Favorites />} />
				<Route path="/" element={<Form login={login} />} />
				<Route
					path="/home"
					element={<Cards characters={characters} onClose={onClose} />}
				/>
				<Route path="/about" element={<About />} />
				<Route path="/detail/:id" element={<Detail />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</div>
	);
}

export default App;
