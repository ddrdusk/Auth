export const Login = () => {
    const loginApi = async () => {
        const urlBase = "https://redis-auth.herokuapp.com";
        const url = `${urlBase}/auth/Login`;
        const response = await fetch(url);
    };
    handleChange = (event) =>{
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        })
    }
    return(
        <div className="App">
        <form>
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
        </form>
      </div>
    );
}
