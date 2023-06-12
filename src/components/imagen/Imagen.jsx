import style from './Imagen.module.css';
export default function Imagen(props) {
	return <img src={props.url} alt=" personaje" className={style.img} />;
}
