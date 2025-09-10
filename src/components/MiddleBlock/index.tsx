import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper, ImageContainer, ImageCard, ImageDescription, ImagesWrapper } from "./styles";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Projects } from "../../data/projects";

interface MiddleBlockProps {
  title: string;
  content: string;
  button: string;
  t: TFunction;
}

const MiddleBlock = ({ title, content, button, t }: MiddleBlockProps) => {
  const history = useHistory();
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Get featured projects - two past projects
  const featuredPastProject1 = Projects[0]; // Most recent past project
  const featuredPastProject2 = Projects[1] || Projects[0]; // Second past project

  const handleProjectClick = (projectId: number) => {
    history.push(`/event/${projectId}`);
  };

  const handleAllProjectsClick = () => {
    history.push('/projects');
  };
  
  return (
    <MiddleBlockSection>
      <Slide direction="up" triggerOnce>
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6 style={isMobile ? { fontSize: "28px" } : { fontSize: "44px" }}>
                {t(title)}
              </h6>
              <Content>{t(content)}</Content>
              
              <ImagesWrapper>
                <Row gutter={[32, 32]} justify="center">
                  <Col xs={24} sm={12} md={12} lg={10}>
                    <Slide direction="left" triggerOnce delay={200}>
                      <ImageCard onClick={() => handleProjectClick(featuredPastProject1.id)}>
                        <ImageContainer>
                          <img
                            src={`/img/svg/${featuredPastProject1.images[0]}`}
                            alt={featuredPastProject1.title}
                          />
                        </ImageContainer>
                        <ImageDescription>
                          <h4>Минулий проєкт</h4>
                          <p>{featuredPastProject1.title}</p>
                          <span>{featuredPastProject1.description}</span>
                        </ImageDescription>
                      </ImageCard>
                    </Slide>
                  </Col>
                  
                  <Col xs={24} sm={12} md={12} lg={10}>
                    <Slide direction="right" triggerOnce delay={400}>
                      <ImageCard onClick={() => handleProjectClick(featuredPastProject2.id)}>
                        <ImageContainer>
                          <img
                            src={`/img/svg/${featuredPastProject2.images[0]}`}
                            alt={featuredPastProject2.title}
                          />
                        </ImageContainer>
                        <ImageDescription>
                          <h4>Минулий проєкт</h4>
                          <p>{featuredPastProject2.title}</p>
                          <span>{featuredPastProject2.description}</span>
                        </ImageDescription>
                      </ImageCard>
                    </Slide>
                  </Col>
                </Row>
              </ImagesWrapper>

              {button && (
                <Button name="submit" onClick={handleAllProjectsClick}>
                  {t(button)}
                </Button>
              )}
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
