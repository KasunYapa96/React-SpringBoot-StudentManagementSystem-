import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import ListStudentComponent from './components/ListStudentComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';


function App() {
  return (
    <div>
    <Router>
      
        <HeaderComponent/>
       <div className="container">
          <Switch>
            <Route path="/" component={ListStudentComponent}></Route>
            <Route path="/students" component={ListStudentComponent}></Route>
          <ListStudentComponent/> 
          </Switch>
            
      </div>
      <FooterComponent/>
     
    </Router>
    </div>
  
  );
}

export default App;
