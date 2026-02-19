import { Card, Row, Col, Button, Typography, Image } from "antd";
import { motion, easeInOut } from "framer-motion"; 
import { useScrollRestoration } from "../../common/useScroolDown";
import { useHistory } from "react-router-dom";
import { Projects as projectsData } from "../../data/projects";
import { useState, useEffect } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 1,
      ease: easeInOut,
    },
  }),
};

const { Meta } = Card;
const { Title, Paragraph } = Typography;




const Projects = () => {
  const history = useHistory();
  useScrollRestoration();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);


  const renderCardMeta = (
    title: string,
    description: string
  ) => {
    return (
      <Meta
        title={<Title level={4} style={{ margin: 0 }}>{title}</Title>}
        description={
          <div
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 4,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              minHeight: 72,
              maxHeight: 96,
            }}
          >
            <Paragraph style={{ marginBottom: 0, whiteSpace: 'pre-line' }}>{description}</Paragraph>
          </div>
        }
      />
    );
  };

  return (
    <div
      style={{
        maxWidth: 1200,
        margin: "4rem auto",
        padding: "0 1rem",
      }}
    >
      <Title
        level={2}
        style={{ textAlign: "center", margin: "4rem 0 2rem", marginTop: 150 }}
      >
      проєкти
      </Title>
      <Row gutter={[32, 32]}>
        {[...projectsData].map(({ id, title, description, images }, index) => {
          const cards = [];
          
          // После первых 3 проектов добавляем Вербу
          if (index === 3) {
            cards.push(
              <Col xs={24} sm={12} md={{ span: 16, offset: 4 }} key="verb-special">
                <motion.div
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInUp}
                >
                  <Card
                    hoverable
                    onClick={() => history.push("/verb")}
                    style={{
                      border: "2px solid #2C5E5C",
                      borderRadius: 16,
                      padding: 24,
                      boxShadow:
                        "0 12px 30px rgba(115, 209, 61, 0.2), 0 4px 12px rgba(0, 0, 0, 0.05)",
                      textAlign: "center",
                      marginBottom: "2rem",
                    }}
                    cover={
                      <img
                        alt="Енергетична верба"
                        src="/img/svg/verba_logo.png"
                        style={{
                          height: 240,
                          objectFit: "cover",
                          objectPosition: isMobile ? "center 0px" : "center -200px",
                          borderTopLeftRadius: 16,
                          borderTopRightRadius: 16,
                        }}
                      />
                    }
                    actions={[
                      <Button
                        type="primary"
                        size="large"
                        style={{
                          borderRadius: 10,
                          backgroundColor: "rgba(115, 209, 61, 1)",
                          border: "none",
                          fontWeight: 600,
                        }}
                      >
                        дізнатись більше
                      </Button>,
                    ]}
                  >
                    <Title level={3}>🌿 Енергетична верба</Title>
                    <Paragraph>
                      Унікальний екологічний проєкт із висадження енергетичних верб
                      для відновлення довкілля та сталого розвитку.
                    </Paragraph>
                  </Card>
                </motion.div>
              </Col>
            );
          }
          
          // Обычная карточка проекта
          cards.push(
            <Col xs={24} sm={12} md={8} key={id}>
              <motion.div
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeInUp}
              >
                <Card
                  hoverable
                  style={{
                    borderRadius: 12,
                    boxShadow:
                      "0 8px 20px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.06)",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                    transition: "transform 0.1s ease",
                  }}
                  onClick={() => history.push(`/event/${id}`)}
                  cover={
                    images && images[0] ? (
                      <Image
                        alt={title}
                        src={`/img/svg/${images[0]}`}
                        style={{ height: 220, objectFit: "cover" }}
                        preview={true}
                        loading="eager"
                      />
                    ) : null
                  }
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  {renderCardMeta(title, description)}
                </Card>
              </motion.div>
            </Col>
          );
          
          return cards;
        })}
      </Row>

    </div>
  );
};

export default Projects;