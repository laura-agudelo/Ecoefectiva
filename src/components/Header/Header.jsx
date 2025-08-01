import "./Header.css";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Asegúrate de importar los íconos

export default function Header() {
  return (
    <header className="header">
      <img src="/eco.png" alt="Logo" className="logo-image" />

      <nav>
        <ul className="nav-list">
          <li>
            <a href="#libro" className="link-libro">
              <i className="fas fa-book"></i> Libro
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
