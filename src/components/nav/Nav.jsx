import SearchBar from './searchbar/SearchBar';

export default function Nav({ onSearch, setAccess }) {
	return (
		<div className="nav">
			<SearchBar onSearch={onSearch} setAccess={setAccess} />
		</div>
	);
}
