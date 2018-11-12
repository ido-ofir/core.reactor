
var agent = require('superagent-use')(require('superagent'));
var config = {
    authHeader: 'authtoken'
};
var authToken = localStorage.getItem('agent.token') || null;
agent.token = authToken;

function setToken(token){
  if(!token || (authToken === token)){ return; }
  authToken = token;
  localStorage.setItem('agent.token', token);
  agent.token = authToken;
}


agent.use(function(request){
    // if we have a token, set authToken header on request.
    if(authToken){
       request.set(config.authHeader, authToken);
    }
    request.set('Accept', 'application/json');
    // if request returns a token, save the token for later.
    request.on('response', function(res){
        if(res.status === 401){
            agent.emit('unauthorized');
        }
        if(!res || !res.body) return;
        var token = res.headers[config.authHeader] || res.body[config.authHeader];
        if(token){
            setToken(token);
        }
    });

});


module.exports = {
    name: 'agent',
    init(def, done){
        done(agent);
    },
    events: ['unauthorized'],
    config(_config){
        Object.assign(config, _config);
        return this;
    }
};