import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { ContactProps } from "./types";
import Block from "../Block";
import { ContactContainer } from "./styles";
import { useState } from "react";

const Contact = ({ title, content, id, t }: ContactProps) => {
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

  return (
    <ContactContainer id={id}>
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
        `}
      </style>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left" triggerOnce>
            <Block title={title} content={content} />
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right" triggerOnce>
            <div style={{ marginBottom: 20, textAlign: 'center' }}>
            <div style={{ marginBottom: 16, fontSize: 16, color: '#5D3FD3', fontWeight: 500 }}>
            sharm.lider.ua@gmail.com
            </div>  
            <div style={{ textAlign: 'center' }}>
              <button 
                onClick={copyToClipboard}
                style={{
                  display: 'inline-block',
                  padding: '16px 32px',
                  backgroundColor: '#5D3FD3',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '18px',
                  fontWeight: '600',
                  transition: 'all 0.6s ease',
                  boxShadow: '0 6px 20px rgba(93, 63, 211, 0.3)',
                  cursor: 'pointer',
                  minWidth: '200px'
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.backgroundColor = '#7D5FFF';
                  (e.target as HTMLButtonElement).style.transform = 'translateY(-3px)';
                  (e.target as HTMLButtonElement).style.boxShadow = '0 10px 30px rgba(93, 63, 211, 0.4)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.backgroundColor = '#5D3FD3';
                  (e.target as HTMLButtonElement).style.transform = 'translateY(0)';
                  (e.target as HTMLButtonElement).style.boxShadow = '0 6px 20px rgba(93, 63, 211, 0.3)';
                }}
              >
                📧 Написати листа
              </button>
            </div>
            </div>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
