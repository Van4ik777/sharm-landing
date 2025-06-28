import { Link } from 'react-router-dom';

export default function LogoText() {
  return (
    <Link 
      to="/" 
      aria-label="homepage" 
      style={{ 
        fontSize: '2.2rem',      
        fontWeight: '700',     
        color: 'rgb(101, 32, 212)',     
        textDecoration: 'none',
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        letterSpacing: '0.1em',
        userSelect: 'none',    
      }}
    >
      SHARM
    </Link>
  );
}