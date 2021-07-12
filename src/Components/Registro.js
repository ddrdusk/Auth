import { options } from "yargs";

export const Register = () => {
    const registerApi = async () => {
        const urlBase = "https://redis-auth.herokuapp.com";
        const url = `${urlBase}/auth/Register`;
        const response = await fetch(url, options);
        if (response.ok) {
            alert(`Usuario ${data.id} registrado`);
        } else {
            alert(`No se pudo crear usuario`);
        }
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
            placeholder="Name"
          />
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
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="Confirm Password"
          />
          <button /*onClick={() => this.handleClick(tarea.id)}*/>Register</button>
        </form>
      </div>
    );
}
