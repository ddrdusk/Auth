export const Register = () => {
    const registerApi = async () => {
        const urlBase = "https://redis-auth.herokuapp.com";
        const url = `${urlBase}/auth/Register`;
        const response = await fetch(url);
    };
}
