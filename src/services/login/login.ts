const logonUser = async (login, password) => {
  try {
    let response = await fetch(`http://demo.abantecart.com/index.php?rt=a/account/login&loginname=${login}&password=${password}`);
    let json = await response.json();
    console.log(json)
    return json;
  } catch (error) {
    console.error(error);
  }
};
const api = {
  base: 'http://demo.abantecart.com/index.php?rt=',
  loginRoute: 'a/account/login',
};
