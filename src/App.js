// import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
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
      var list = document.querySelector('#todo-list');
      var casing = document.createElement('ListItem');
      casing.firstChild.innerHTML = value;
      list.appendChild(casing);
    }
    else{
      alert('Enter text to add an item to the to-do list.');
      console.log('List item append error: item input lacks text.');
    }
  }

  render(){
    return(
      <form id='input-form'>
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
    var parent = this.parentNode
    parent.parentNode.removeChild(parent)
    console.log('Item removed from list.');
  }

  render(){
    return(
      <li className='todo-item'>
        <div className='item-text'>{this.props.content}</div> <button className='remove' onClick={this.handleRemove}>X</button>
      </li>
    );    
  }
}


class ListSection extends react.Component{
  render(){
    return(
      <ul id='todo-list'>
        <ListItem content='[List item]'/>
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
reactDom.render(
  element,
  document.querySelector('#root')
)

export default App;