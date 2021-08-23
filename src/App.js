import './App.css';

import React from "react";
class App extends React.Component {
  state = {
    FullName: "amine dakhlia",
    Profession:"Software Engineering Student",
    Bio:"21 Years Old",
    imgSrc:"https://thumbs.dreamstime.com/z/homme-sans-visage-33583035.jpg" , 
    shows:false,
    timer:0,

   
  };
  
 
  
  handleClick = () => {
    this.setState({shows: !this.state.shows})
    if(!this.state.shows){
    var mytimer= setInterval(()=>this.timer(), 1000) 
  } 
  else {
    clearInterval(mytimer)
    alert(this.state.timer)
  }
  }
   
   timer = () => {
    this.setState({timer:this.state.timer+1})
   }
  
 
  render(){
    return <>
 <div style={{textAlign:"center",margin:"50px"}}>
   <button style={{backgroundColor:"purple", color:"white",borderStyle: "none", borderRadius: "20px" , height:"60px", width:"150px"}}onClick={this.handleClick}> Click Me </button>
   timer :{this.state.timer}

 

 </div>
    {(this.state.shows )?(
    <div style={{textAlign:"center"}}>
      <img width="500px" height="500px" src={this.state.imgSrc}></img>
    <h1 style={{color:"#11324D"}}> {this.state.FullName}</h1>
    <h2 style={{color:"#6B7AA1"}}>{this.state.Profession}</h2>
  
    <h2 style={{color:"#6B7AA1"}}> {this.state.Bio}</h2>

    </div>)
    
    :(<h2 style={{textAlign:"center",color:"#6B7AA1" , margin:"15px", }}>Click Here For Your Profile</h2>)}

    
    </>
  }
 }

export default App;