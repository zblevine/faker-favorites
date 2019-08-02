const root = document.querySelector('#root');

class App extends React.Component {
    constructor() {
        super();
        const startNumber = 20;
        const users = [];
        for (let i = 0; i < startNumber; i++) {
            users.push(faker.fake('{{name.firstName}} {{name.lastName}} \n {{internet.userName}}'));
        }
        this.state = { users };
    }
    render() {
        const { users } = this.state;
        return app;
    }
}
