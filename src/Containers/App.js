import React from "react";
import Title from "../Components/Title";
import SearchBar from "../Components/SearchBar";
import Robots from "../Components/Robots";
import Scroll from "../Components/Scroll";
import ErrorFinder from "./ErrorFinder";
import "./App.css";

class App extends React.Component{
  constructor(){
    super();
    this.state={
      robots: [],
      searchField: ""
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((arrejiJson)=>{return arrejiJson.json();})
    .then((arreji)=>{this.setState({robots: arreji})})
    .catch((error)=>{console.log(error,"Uupsss something went wrong!");})
    .finally(()=>{console.log("Its all set and done")});
  }

  onInputChange=(event)=>{
    this.setState({searchField: event.target.value});
  }

  render(){
    const filteredArray=this.state.robots.filter((antari,indeksi)=>{
      return antari.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    if(this.state.robots.length===0){
      return(
        <div className="container loadingStyle">
          <h1>LOADING</h1>
        </div>
      );
    }else{
      return(
        <div className="container">
          <Title/>
          <SearchBar onInputChange={this.onInputChange}/>
          <Scroll>
            <ErrorFinder>
              <Robots filteredRobots={filteredArray}/>
            </ErrorFinder>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
