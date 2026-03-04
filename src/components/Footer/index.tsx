import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
import { useState } from "react";

import {
  Extra,
  FooterContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const currentYear = new Date().getFullYear();
  const [showNotification, setShowNotification] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('sharm.lider.ua@gmail.com');
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
      window.location.href = `mailto:sharm.lider.ua@gmail.com`;
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      {/* Красивое уведомление */}
      {showNotification && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '16px 24px',
          borderRadius: '12px',
          boxShadow: '0 8px 32px rgba(76, 175, 80, 0.3)',
          zIndex: 9999,
          fontSize: '16px',
          fontWeight: '600',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          animation: 'slideIn 0.3s ease-out',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <span style={{ fontSize: '20px' }}>✅</span>
          <span>Email скопійовано в буфер обміну!</span>
        </div>
      )}
      
      {/* Закрепленные социальные сети для пк версии */}
      <div style={{
        position: 'fixed',
        bottom: '120px',
        right: '20px',
        zIndex: 999,
        display: 'none'
      }} className="social-networks-fixed">
        <FooterContainer style={{ 
          justifyContent: "center", 
          gap: "1rem",
          flexDirection: "column"
        }}>
          <SocialLink
            href="https://www.instagram.com/sharm.leader/"
            src="instagram.svg"
          />
          <SocialLink
            href="https://www.tiktok.com/@sharm.leader_/"
            src="tiktok.svg"
          />
          <SocialLink
            href="https://www.facebook.com/profile.php?id=100063297334293"
            src="facebook.svg"
          />
        </FooterContainer>
      </div>
      
      <style>
        {`
          @keyframes slideIn {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          
          @media screen and (min-width: 769px) {
            .social-networks-fixed {
              display: block !important;
            }
            
            /* Скрываем мобильные социальные сети на десктопе */
            .mobile-social-networks {
              display: none !important;
            }
          }
          
          @media screen and (max-width: 768px) {
            .footer-upper {
              display: none !important;
            }
            
            /* Показываем мобильные социальные сети */
            .mobile-social-networks {
              display: flex !important;
            }
          }
        `}
      </style>
      <Extra style={{
        display: 'none'
      }} className="footer-upper">
        <style>
          {`
            @media screen and (max-width: 768px) {
              .footer-upper {
                display: none !important;
              }
            }
          `}
        </style>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem", paddingBottom: "2rem" }}
          >
            <Col xs={24} sm={8} style={{ textAlign: "center", marginBottom: "2rem" }}>
              <div style={{ 
                fontSize: "16px", 
                fontWeight: "600", 
                color: "#5D3FD3",
                marginBottom: "0.5rem"
              }}>
                ШАРМ
              </div>
              <div style={{ 
                fontSize: "14px", 
                color: "#666",
                maxWidth: "200px",
                margin: "0 auto",
                lineHeight: "1.4"
              }}>
                Учнівське самоврядування Шевченківського району
              </div>
            </Col>
            
            <Col xs={24} sm={8} style={{ textAlign: "center", margin: "1rem 0" }}>
              {/* Мобильные социальные сети */}
              <div className="mobile-social-networks" style={{ 
                display: "none", // По умолчанию скрыто
                justifyContent: "center", 
                gap: "1rem",
                marginBottom: "1.5rem"
              }}>
                <SocialLink
                  href="https://www.instagram.com/sharm.leader/"
                  src="instagram.svg"
                />
                <SocialLink
                  href="https://www.tiktok.com/@sharm.leader_/"
                  src="tiktok.svg"
                />
                <SocialLink
                  href="https://www.facebook.com/profile.php?id=100063297334293"
                  src="facebook.svg"
                />
              </div>
              
              <div style={{ marginBottom: "1.5rem" }}>
                <div style={{ 
                  display: "flex", 
                  flexDirection: "column", 
                  gap: "0.75rem",
                  alignItems: "center"
                }}>
                  <div style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    gap: "0.5rem",
                    fontSize: "14px", 
                    color: "#666"
                  }}>
                    <span style={{ fontSize: "16px" }}>📍</span>
                    <span>Шевченківський район, Київ</span>
                  </div>
                  
                  <div style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    gap: "0.5rem",
                    fontSize: "14px", 
                    color: "#666"
                  }}>
                    <span style={{ fontSize: "16px" }}>📧</span>
                    <span 
                      onClick={copyToClipboard}
                      style={{ 
                        color: "#5D3FD3", 
                        cursor: "pointer",
                        transition: "color 0.6s ease",
                        textDecoration: "underline",
                        textDecorationColor: "transparent"
                      }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLSpanElement).style.color = "#7D5FFF";
                        (e.target as HTMLSpanElement).style.textDecorationColor = "#7D5FFF";
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLSpanElement).style.color = "#5D3FD3";
                        (e.target as HTMLSpanElement).style.textDecorationColor = "transparent";
                      }}
                    >
                      sharm.lider.ua@gmail.com
                    </span>
                  </div>
                </div>
              </div>
            </Col>
            

          </Row>
          
          <div style={{
            borderTop: "1px solid #E5E7EB",
            paddingTop: "1.5rem",
            textAlign: "center"
          }}>
            <div style={{ 
              fontSize: "14px", 
              color: "#9CA3AF",
              marginBottom: "0.5rem"
            }}>
              © {currentYear} ШАРМ. Всі права захищені.
            </div>
            <div style={{ 
              fontSize: "12px", 
              color: "#D1D5DB"
            }}>
              Створено з ❤️ для молоді Шевченківського району
            </div>
          </div>
        </Container>
      </Extra>
      
      <Extra style={{
        padding: "1rem",
        marginBottom: 0
      }} className="footer-bottom-only">
        <style>
          {`
            @media screen and (max-width: 768px) {
              .footer-bottom-only {
                padding: "6.5625rem" !important;
              }
            }
          `}
        </style>
        <div style={{
          textAlign: "center",
          position: "relative",
          zIndex: 10
        }}>
          <div style={{ 
            fontSize: "14px", 
            color: "#9CA3AF",
            marginBottom: "0.5rem"
          }}>
            © {currentYear} ШАРМ. Всі права захищені.
          </div>
          <div style={{ 
            fontSize: "12px", 
            color: "#D1D5DB"
          }}>
            Створено з ❤️ для молоді Шевченківського району
          </div>
        </div>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
