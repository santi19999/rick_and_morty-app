import style from './Searchbar.module.css';
export default function SearchBar(props) {
	return (
		<div className={style.navBar}>
			<input type="search" />
			<button onClick={props.onSearch} className={style.btn}>
				Agregar
			</button>
		</div>
	);
}
