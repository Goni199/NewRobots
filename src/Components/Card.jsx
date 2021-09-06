import "./Card.css";

const Card=(props)=>{
	return(
		<div className="cardContainer">
			<img alt="foto" src={`https://robohash.org/${props.id}?size=200x200`}/>
			<p>{props.name}</p>
			<p>{props.email}</p>
		</div>
	)
}

export default Card;