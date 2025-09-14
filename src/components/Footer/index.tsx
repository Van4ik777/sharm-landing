import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import {
  FooterSection,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  FooterContainer,
  Language,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {

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
      <Extra>
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
                    <a 
                      href="mailto:sharm.lider.ua@gmail.com" 
                      style={{ 
                        color: "#5D3FD3", 
                        textDecoration: "none",
                        transition: "color 0.3s ease"
                      }}
                      onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.color = "#7D5FFF"}
                      onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.color = "#5D3FD3"}
                    >
                      sharm.lider.ua@gmail.com
                    </a>
                  </div>
                  
                  <div style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    gap: "0.5rem",
                    fontSize: "14px", 
                    color: "#666"
                  }}>
                    <span style={{ fontSize: "16px" }}>📱</span>
                    <a 
                      href="https://www.instagram.com/sharm.leader/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ 
                        color: "#5D3FD3", 
                        textDecoration: "none",
                        transition: "color 0.3s ease"
                      }}
                      onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.color = "#7D5FFF"}
                      onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.color = "#5D3FD3"}
                    >
                      @sharm.leader
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col xs={24} sm={8} style={{ textAlign: "center" }}>
              <div style={{ marginBottom: "1.5rem" }}>
                <h4 style={{ 
                  fontSize: "18px", 
                  fontWeight: "600", 
                  color: "#5D3FD3", 
                  marginBottom: "1rem",
                  margin: 0
                }}>
                  Соціальні мережі
                </h4>
                <FooterContainer style={{ 
                  justifyContent: "center", 
                  gap: "1.5rem",
                  marginTop: "1rem"
                }}>
                  <SocialLink
                    href="https://www.instagram.com/sharm.leader/"
                    src="instagram.svg"
                  />
                </FooterContainer>
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
              © 2024 ШАРМ. Всі права захищені.
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
    </>
  );
};

export default withTranslation()(Footer);
