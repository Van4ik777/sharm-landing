import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
  BottomLine,
} from "./styles";
import LogoText from "../../common/SvgIcon/LogoText";
import { useHistory } from "react-router-dom";

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);
  const history = useHistory();
  const toggleButton = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };

    const handleContactClick = () => {
      setVisibility(false);
      // Проверяем, находимся ли мы на главной странице
      if (history.location.pathname === "/" || history.location.pathname === "/home") {
        // Если на главной - просто прокручиваем
        scrollTo("contact");
      } else {
        // Если на другой странице - сначала переходим на главную, потом прокручиваем
        history.push("/");
        
        // Функция для поиска и прокрутки к элементу
        const scrollToContact = (attempts = 0) => {
          const element = document.getElementById("contact") as HTMLDivElement;
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
            });
          } else if (attempts < 10) {
            // Если элемент не найден, повторяем попытку через 200ms (максимум 10 попыток)
            setTimeout(() => scrollToContact(attempts + 1), 200);
          }
        };
        
        // Начинаем поиск элемента через 300ms
        setTimeout(() => scrollToContact(), 300);
      }
    };
    return (
      <>
        <CustomNavLinkSmall
          onClick={() => {
            setVisibility(false);
            history.push("/projects"); 
          }}
        >
        <Span>{t("проєкти")}</Span>
        </CustomNavLinkSmall>


        <CustomNavLinkSmall
          onClick={() => {
            setVisibility(false);
            history.push("/structure"); 
          }}
        >
        <Span>{t("структура")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          style={{ width: "160px" }}
          onClick={handleContactClick}
        >
          <Span>
            <Button>{t("контакти")}</Button>
          </Span>
        </CustomNavLinkSmall>

      </>
    );
  };

  return (
    <>
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoText />
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <div style={{ 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            textAlign: "center",
            gap: "1rem"
          }}>
            <MenuItem />
          </div>
        </Drawer>
      </Container>
    </HeaderSection>
    </>
  );
};

export default withTranslation()(Header);
