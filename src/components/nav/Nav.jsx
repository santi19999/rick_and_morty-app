import SearchBar from './searchbar/SearchBar';

export default function Nav({ addCharacter, searchCharacter }) {
	return (
		<SearchBar addCharacter={addCharacter} searchCharacter={searchCharacter} />
	);
}
