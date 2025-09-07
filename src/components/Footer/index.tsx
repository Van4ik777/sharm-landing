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
            style={{ paddingTop: "2rem", paddingBottom: "1rem" }}
          >
            <Col xs={24} sm={8} style={{ textAlign: "center", marginBottom: "1rem" }}>
              <NavLink to="/">
                <LogoContainer style={{ justifyContent: "center" }}>
                  <SvgIcon
                    src="logo.svg"
                    aria-label="homepage"
                    width="101px"
                    height="64px"
                  />
                </LogoContainer>
              </NavLink>
            </Col>
            <Col xs={24} sm={8} style={{ textAlign: "center", margin: "1rem 0" }}>
              <Para style={{ fontSize: "14px", color: "#666", margin: 0 }}>
                📍 Шевченківський район, Київ
              </Para>
              <Para style={{ fontSize: "14px", color: "#666", margin: "0.5rem 0 0" }}>
                📧 <a href="mailto:sharm.lider.ua@gmail.com" style={{ color: "#666" }}>sharm.lider.ua@gmail.com</a>
              </Para>
              <Para style={{ fontSize: "12px", color: "#999", margin: "0.5rem 0 0" }}>
                © 2024 Sharm. Всі права захищені.
              </Para>
            </Col>
            <Col xs={24} sm={8} style={{ textAlign: "center" }}>
              <FooterContainer style={{ justifyContent: "center", gap: "1rem" }}>
                <SocialLink
                  href="https://github.com/sharm-team"
                  src="github.svg"
                />
                <SocialLink
                  href="https://instagram.com/sharm.team"
                  src="instagram.svg"
                />
              </FooterContainer>
            </Col>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
