// import logo from './logo.svg';
import './App.css';

// const name = "Raghu Ram";
// const time = 30;
const names = ["mayuri","Ajay","Abhay","Bhavana"];
function App() {

  // return (
  //   <div className="App">
  //     <h1>Hello, {name}</h1>
  //     <p> Time to complete - {4*time} min </p>
  //   </div>
  // );
  // return (
  //   <div className="App">
  //     <Message nm = "Mayuri" src = "https://media.vogue.in/wp-content/uploads/2019/07/Deepika-Padukone-1366x768.jpg"/>
  //     <Message nm = "Abhai" src = "https://im.indiatimes.in/content/2020/Dec/Aamir-Khan-Turns-Life-Into-A-Story-One-Film-At-A-Time_5fcb7db0293f9.png?w=725&h=1087"/>
  //     <Message nm = "Ajay" src = "https://th.bing.com/th/id/OIP.pJldE3wzF91Byxhl8GZSCwHaE0?pid=ImgDet&rs=1"/>
  //   </div>
  // )
  return(
    <div className="App">
      {names.map(nm => <Welcome name={nm} />)}
    </div>
  );
}

export default App;

// function Message(props){
//   return (
//   <div>
//     <img className = "profile-pic" src = {props.src} />
//     <h1>Hello, {props.nm}</h1>
//   </div>
//   );
// }

function Welcome(props){
    return (
      <h1>Hello, {props.name}</h1>
    );
  }