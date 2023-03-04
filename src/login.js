import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './login.css';

function App() {
  const [username, setUsername] = useState(''); // Adicionado o estado do username e password 
  const [password, setPassword] = useState('');

  function handleSubmit(e) { // Adicionado a função handleSubmit para verificar se os dados estão corretos e redirecionar para o dashboard.html caso estejam. 
    e.preventDefault();

    if (username === "admin" && password === "admin") {
      window.location.href = "dashboard.html";
    } else {
      alert("Incorrect username or password");
    }

  }

  return (
    <div className="form-container">
      <h1>CHAOSSIM</h1>

      <form action="/dashboard" method="post" onSubmit={handleSubmit}>  

        <div className="form-group">
          <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} className="form-control" placeholder="Username" />   {/* Adicionado o atributo value e onChange */}  
        </div>

        <div className="form-group">
          <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" placeholder="Password" />   {/* Adicionado o atributo value e onChange */}  
        </div>

        <button type="submit" className="btn">LOGIN</button>

      </form>

    </div>     
    );   
}

ReactDOM.render(<App />, document.getElementById('root'));
