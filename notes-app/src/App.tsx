import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>📝 Notes App</h1>
        <p>Sistema de Notas - Etapa 1: Fundações</p>
      </header>
      
      <main className="app-main">
        <div className="welcome-section">
          <h2>Bem-vindo ao sistema de notas!</h2>
          <p>Esta é a base do nosso projeto com:</p>
          <ul>
            <li>✅ Vite - Build tool moderno</li>
            <li>✅ React - Biblioteca para UI</li>
            <li>✅ TypeScript - Type safety</li>
            <li>✅ ESLint + Prettier - Code quality</li>
          </ul>
        </div>
      </main>
      
      <footer className="app-footer">
        <p>Desenvolvido com React + Vite + TypeScript</p>
      </footer>
    </div>
  );
};

export default App;