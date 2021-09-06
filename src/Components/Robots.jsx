import Card from "./Card";

const Robots=(props)=>{
const helpingFilteredArray=props.filteredRobots.map((antari,i)=>{
	return <Card key={i} id={antari.id} name={antari.name} email={antari.email}/>
})
	return(
		<div>
			{helpingFilteredArray}
		</div>
	);
}

export default Robots;
