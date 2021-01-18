// export const signIn1 = async (login: string | null, password: string | null) => {
//   try {
//     let response = await fetch(`${api.base}${api.loginRoute}${api.loginname}${login}${api.password}${password}`);
//     let json = await response.json();
//     console.log(json)
//     return json;
//   } catch (error) {
//     console.error(error);
//   }
// };
export const signIn = async (loginname?: string | null, password?: string | null) => {
  const response = await fetch(`${api.base}${api.rt}`, {
    // const response = await fetch(api.base, {
    method: 'POST',
    // headers: {
    //   Accept: 'application/json',
    //   'Content-Type': 'application/json'
    // },
  //   body: {
  //     rt: 'a/account/login',
  //     loginname,
  //     password, 
  //   }
   });
  const content = await response.json();
  return content;
};
const api = {
  base: 'http://35.231.209.61/?rt=',
  rt: 'a/account/login',
  loginname: '&loginName=',
  password: '&password=', 
};
