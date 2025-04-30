import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>Designed and Developed by GAGER Jonathan</p>
      <p>Copyright © {year} GJ</p>
      <div className="social-icons">
        <a href="https://github.com/JonathanG-coder" aria-label="GitHub"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/jonathan-gager-a62921289/" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
      </div>
    </footer>
  );
}
