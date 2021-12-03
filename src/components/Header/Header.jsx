import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="menu">
        <a className="link" href="/">Cronômetro</a>
        <a className="link" href="/calculadora">Calculadora</a>
        <a className="link" href="/temporizador">Temporizador</a>
        <a className="link" href="/alarme">Alarme</a>
      </nav>
    </header>
  );
}

export default Header;