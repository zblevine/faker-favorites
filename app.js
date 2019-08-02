const root = document.querySelector('#root');

const startNumber = 20;
const generateUser = (fav) => {
    return {
        text: faker.fake('{{name.firstName}} {{name.lastName}} {{internet.userName}}'),
        favorite: fav
    }
}

class App extends React.Component {
    constructor() {
        super();

        const users = [];
        for (let i = 0; i < startNumber; i++) {
            let bool = Math.random() > 0.5;
            users.push(generateUser(bool));
        }
        this.state = { users };
    }
    favoriteCount() {
        return this.state.users.reduce((acc, user) => (user.favorite ? acc + 1 : acc), 0);
    }
    render() {
        const { users } = this.state;
        const toggleFavorite = (ev) => {
            ev.target.classList.toggle('favorite');
        }
        const addUser = () => {
            this.state.users.push(generateUser(true));
            this.setState({users});
        }
        const linkText = `You have ${this.favoriteCount()} favorite users!`;
        const addBtn = React.createElement('div', {onClick: addUser}, linkText);
        const lis = users.map( (user, idx) => {
            const styleText = user.favorite ? 'favorite' : '';
            return React.createElement('li', {key: idx, className: styleText, onClick: toggleFavorite}, user.text);
        });
        const app = React.createElement('ul', null, addBtn, lis);
        return app;
    }
}

ReactDOM.render(React.createElement(App), root);
