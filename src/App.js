import './App.css';
class App extends React.Component
{
  handleChange = (event) =>{
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="eMail"
          />
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="Password"
          />
          <button /*onClick={() => this.handleClick(tarea.id)}*/>Log in</button>
        </header>
      </div>
    );
  }
}

export default App;
