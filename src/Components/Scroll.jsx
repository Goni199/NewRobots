import "./Scroll.css";

const Scroll=(props)=>{
	return(
		<div className="scrollMaker">
			{props.children}
		</div>
	);
}

export default Scroll;