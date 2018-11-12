
module.exports = {
    name: "Login",
    description: '',
    propTypes: {
        // name: 'string',
        // title: { type: 'string' },
        // isOpen: false,
        // onChange(){}
    },
    dependencies: ['agent'],    
    get(agent) {
        
        var core = this;

        var { React, PropTypes } = core.imports;

        return {
            propsTypes: {
                // title: PropTypes.string
            },
            getDefaultProps(){
                return {

                };
            },
            getInitialState() {

                return {
                    email: '',
                    password: '',
                    name: '',
                    signup: false,
                    ranAuth: false,
                    error: null
                };
            },
            componentDidMount() {
                agent.on('unauthorized', this.onUnauthorized);
                agent.post('/auth').end((err, res) => {
                    
                    let user = res.body && res.body.user;
                    if(!err && user){
                        core.plugins.login.set('user', user);
                        this.onLogin(user);
                        
                    }
                    setTimeout(e => {
                        this.setState({
                            ranAuth: true
                        });
                        // history.replaceState({}, document.title, '/');
                    }, 20)
                })
            },
            componentWillUnmount() {
                agent.off('unauthorized', this.onUnauthorized);
            },
            onUnauthorized(){
                if(core.plugins.login.get('user')){
                    core.plugins.login.set('user', null);
                }
            },
            onLogin(user){
                if(this.props.onLogin){
                    this.props.onLogin(user);
                }
            },
            login(){
                let { email, password } = this.state;
                if(this.state.error){ this.setState({ error: null }); }
                agent.post('/login').send({ email, password }).end((err, res) => {
                    if(err){
                        return this.setState({ error: res.text || res.statusText || String(err) })
                    }
                    let user = res.body.user;
                    if(user){
                        core.plugins.login.set('user', user);
                        this.onLogin(user);
                        // setTimeout(e => {
                        //     history.replaceState({}, document.title, '/');
                        // }, 20)
                    }
                })
            },
            signUp(){
                if(this.state.error){ this.setState({ error: null }); }
                let { name, email, password } = this.state;
                agent.post('/signup').send({ name, email, password, parentId: '' }).end((err, res) => {
                    if(err){
                        return this.setState({ error: res.text || res.statusText || String(err) })
                    }
                    let user = res.body.user;
                    if(user){
                        core.plugins.login.set('user', user);
                        this.onLogin(user);
                    }
                })
            },
            submit(){
                let { signup } = this.state;
                signup ? this.signUp() : this.login();
            },
            renderLogin() {
                let { signup, error } = this.state;
                return (
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                        <div 
                            style={{ 
                                width: '300px',
                                background: '#ddd',
                                padding: 26,
                                boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
                            }}>
                            {
                                signup ? 
                                    <input 
                                        name="name"
                                        // autoComplete="username"
                                        style={{ marginBottom: 26, width: '100%', borderRadius: '6px', height: '34px', padding: '0 10px' }}
                                        type="text"
                                        placeholder="Name"
                                        value={ this.state.name }
                                        onChange={ e => this.setState({ name: e.target.value }) }/>
                                    : null                                    
                            }
                            <input 
                                name="email" 
                                // autoComplete="email" 
                                style={{ marginBottom: 26, width: '100%', borderRadius: '6px', height: '34px', padding: '0 10px' }}
                                type="email"
                                placeholder="Email"
                                value={ this.state.email }
                                onChange={ e => this.setState({ email: e.target.value }) }/>
                            <input 
                                name="password"
                                // autoComplete="current-password"
                                style={{ marginBottom: 26, width: '100%', borderRadius: '6px', height: '34px', padding: '0 10px' }}
                                type="password"
                                placeholder="Password" value={ this.state.password }
                                onChange={ e => this.setState({ password: e.target.value }) }/>
                            <button style={{ 
                                borderRadius: '6px',
                                boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 1px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px',
                                border: '0',
                                marginBottom: 18,
                                height: '34px',
                                width: '100%',
                                color: '#fff',
                                cursor:'pointer',
                                fontSize: '14px',
                                outline: 0,
                                background: 'rgb(67, 69, 136)' }} onClick={ this.submit }>
                                { signup ? 'Sign Up' : 'Log In' }
                            </button>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '14px'}}>
                                <div>
                                    <a href="#" onClick={ e => { this.setState({ signup: !signup }); e.preventDefault() } }>
                                        {
                                            signup ? 
                                            'Log In'  
                                            :  'Sign Up'
                                        }
                                    </a>
                                </div>
                                <div>
                                    <span style={{ color: '#e63535', fontSize: '14px' }}>
                                     { error }
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                )
            },
            render(){
                let { login } = core.plugins;
                let { children } = this.props;
                let { ranAuth } = this.state;
                if(!ranAuth){
                    return null;
                }
                return login.bind(['user'], user => user ? children : this.renderLogin());
            }         
        }
    }
}