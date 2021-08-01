// import logo from './logo.svg';
import './App.css';
import reactDOM from 'react-dom';
import react from 'react';


class InputSection extends react.Component{
  constructor(props){
    super(props);
    this.handleEraseItem = this.handleEraseItem.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleEraseItem(e){
    if(document.querySelector('#text-input').value !== ""){
      document.querySelector('#text-input').value = "";
    }
    console.log('Text input erased.');
  }

  handleAdd(e){
    if(document.querySelector('#text-input').value !== ""){
      var value = document.querySelector('#text-input').value;
      reactDOM.render(<ListItem content={value}/>, document.querySelector('#todo-list').appendChild(document.createElement('li')));
      console.log('Item added to list.');
      document.querySelector('#text-input').value = "";
    }
    else{
      alert('Enter text to add an item to the to-do list.');
      console.log('List item append error: item input lacks text.');
    }
  }

  render(){
    return(
      <form id='input-form'>
        <br/>
        <input id='text-input' type='text' placeholder='Add item to list...'/>
        <br/>
        <br/>
        <div id='buttons'>
          <button id='erase-item' type='button' onClick={this.handleEraseItem}>Erase</button>
          <input id='add' type='button' value='Add to List' onClick={this.handleAdd}/>
        </div>
      </form>
    );
  }
}


class ListItem extends react.Component{
  constructor(props){
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(e){
    e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
    console.log('Item removed from list.');
  }

  render(){
    return(
      <div className='todo-item'>
        <div className='item-text'>{this.props.content}</div> <button className ='remove' onClick={this.handleRemove}>X</button>
      </div>
    );    
  }
}


class ListSection extends react.Component{
  render(){
    return(
      <ul id='todo-list' data-message='Nothing to do yet!'>
        <li>
          <ListItem content='[List item]'/>
        </li>
      </ul>
    );
  }
}


class App extends react.Component{
  constructor(props){
    super(props);
    this.handleClear = this.handleClear.bind(this);
  }

  handleClear(e){
    document.querySelector('#todo-list').innerHTML = "";
    console.log('List cleared.')
  }

  render(){
    return(
      <div className='app-container'>
        <h1>Hello, User!</h1>
        <button id='clear-list' onClick={this.handleClear} >Clear</button>
        <br/>
        <br/>
        <InputSection />
        <br/>
        <br/>

        <h2>To Do:</h2>
        <ListSection />
      </div> 
    );
  }  
}


const element = <App />
reactDOM.render(
  element,
  document.querySelector('#root')
)

export default App;