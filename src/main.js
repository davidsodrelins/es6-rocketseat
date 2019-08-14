import api from './api';

class App {
    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById('form-dev');
        this.inputEl = document.querySelector('input[name=repository]');
        this.listEl = document.getElementById('lista-devs');

        this.registerHandlers();

    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }


    setLoading(loading = true) {
        if (loading === true) {
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Carregando...'));
            loadingEl.setAttribute('id', 'loading')

            this.formEl.appendChild(loadingEl);
        } else {
            document.getElementById('loading').remove();
        }

    }

    async addRepository(event) {
        event.preventDefault();

        const repoInput = this.inputEl.value;

        if (repoInput.length === 0)
            return;

        this.setLoading();

        try {
            const response = await api.get(`/users/${repoInput}`);

            const { name, bio, avatar_url, html_url } = response.data;
            //const { name, bio, owner: {avatar_url}, html_url} = response.data;


            this.repositories.push({
                name,
                bio,
                avatar_url,
                html_url
            });
            this.inputEl.value = '';
            this.render();

        } catch{
            alert('O repositório não existe.')
        }
        this.setLoading(false);

    }

    render() {
        this.listEl.innerHTML = '';
        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let nameEl = document.createElement('strong')
            nameEl.appendChild(document.createTextNode(repo.name));

            let descritionEl = document.createElement('p');
            descritionEl.appendChild(document.createTextNode(repo.bio));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(nameEl);
            listItemEl.appendChild(descritionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);

        })
    }
}

new App();