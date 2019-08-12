import axios from 'axios';

//EX1
class Api{
    static async getUserInfo(username){
       try{
            const response = await axios.get(`http://api.github.com/users/${username}`);
            console.log(response.data);
        }catch(err){
            console.warn("erro na API");
       }
    }
}

Api.getUserInfo('davidweezing')
Api.getUserInfo('davidweezi444ng')

//Ex 01
/**Transforme os seguintes trechos de código utilizando async/await:
 */

// Funcão delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

async function umPorSegundo() {
    await delay();
    console.log('1s');

    await delay();
    console.log('2s');

    await delay();
    console.log('3s');

}
umPorSegundo();


//EX2

async function getUserFromGithub(user) {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`)
        console.log(response.data);
    } catch (err) {
        console.warn('Usuário não existe');
    }
}

getUserFromGithub('david123weezing');
getUserFromGithub('davidweezing');

//EX 4
class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response.data);
        } catch (err) {
            console.log('Repositório não existe');
        }
    }
}
Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');

//EX5
const buscaUsuario = async usuario => {
    
    try{
        const response = await axios.get(`https://api.github.com/users/${user}`)
        console.log(response.data);
    }catch(err) {
        console.log('Usuário não existe');
    }
   }
   buscaUsuario('diego3g');