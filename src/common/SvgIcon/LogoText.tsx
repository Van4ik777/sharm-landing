import { Link } from 'react-router-dom';
import { SvgIcon } from './index';

export default function LogoText() {
  return (
    <Link 
      to="/" 
      aria-label="homepage" 
      style={{ 
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        textDecoration: 'none',
        userSelect: 'none',    
      }}
    >
      <span style={{
        fontSize: '2.2rem',      
        fontWeight: '700',     
        color: 'rgb(101, 32, 212)',     
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        letterSpacing: '0.1em',
      }}>
        SHARM
      </span>
      <SvgIcon 
        src="logo.png" 
        width="40px" 
        height="40px" 
      />
    </Link>
  );
}