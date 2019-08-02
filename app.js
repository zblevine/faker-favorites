const root = document.querySelector('#root');

const startNumber = 20;



class App extends React.Component {
    constructor() {
        super();
        const generateUsers = () => {
            return faker.fake('{{name.firstName}} {{name.lastName}} \n {{internet.userName}}');
        }

        // const users = [];
        // for (let i = 0; i < startNumber; i++) {
        //     users.push(faker.fake('{{name.firstName}} {{name.lastName}} \n {{internet.userName}}'));
        // }
        this.state = { user};

    }



    render() {
        const {user} = this.state;
        const fakeUser = React.createElement('div',{key: user}, user);
        return fakeUser;
    }
}

ReactDOM.render(React.createElement(App), root);
