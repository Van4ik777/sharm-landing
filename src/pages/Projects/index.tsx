import { Card, Row, Col, Button, Typography } from "antd";
import { motion, easeInOut } from "framer-motion"; 
import { useScrollRestoration } from "../../common/useScroolDown";
import { useHistory } from "react-router-dom";
import { pastProjects, futureProjects } from "../../data/projects";
import { useState, useEffect } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: easeInOut,
    },
  }),
};

const { Meta } = Card;
const { Title, Paragraph, Text } = Typography;

const stringToColor = (str: string): string => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    color += ("00" + value.toString(16)).slice(-2);
  }

  return color;
};


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

  const handleRegister = (projectId: number | string) => {
    alert(`Ви зареєструвались на проєкт: ${projectId}`);
  };

  const renderCardMeta = (
    title: string,
    description: string,
    sector: string
  ) => {
    const color = stringToColor(sector);

    return (
      <Meta
        title={
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: color,
              }}
            />
            <Title level={4} style={{ margin: 0 }}>
              {title}
            </Title>
          </div>
        }
        description={
          <>
            <div
              style={{
                minHeight: 72,
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              <Paragraph style={{ marginBottom: 0 }}>{description}</Paragraph>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginTop: 12,
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: color,
                }}
              />
              <Text type="secondary" style={{ fontSize: 14 }}>
                Сектор: {sector.trim()}
              </Text>
            </div>
          </>
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
        style={{ textAlign: "center", margin: "4rem 0 2rem", marginTop: 200 }}
      >
        Майбутні проєкти
      </Title>
      <Row gutter={[32, 32]}>
        {futureProjects.map(({ id, title, description, images, sector }, index) => (
          <Col xs={24} sm={12} md={8} key={id}>
            <motion.div
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
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
                  transition: "transform 0.3s ease",
                }}
                onClick={() => history.push(`/event/${id}`)}
                cover={
                  <img
                    alt={title}
                    src={`/img/svg/${images[0]}`}
                    style={{ height: 220, objectFit: "cover" }}
                  />
                }
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                actions={[
                  <Button
                    type="primary"
                    key="register"
                    onClick={() => handleRegister(id)}
                    style={{ borderRadius: 8, fontWeight: "600",borderColor: "black", }}
                  >
                    Зареєструватися
                  </Button>,
                ]}
              >
                {renderCardMeta(title, description, sector)}
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>

      <div style={{ margin: "60px 0" }}>
        <Row justify="center">
          <Col xs={24} sm={20} md={16}>
            <motion.div
              custom={5}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }} 
              variants={fadeInUp}
            >
              <Card
                hoverable
                onClick={() => history.push("/verb")}
                style={{
                  border: "2px solid #73d13d",
                  borderRadius: 16,
                  padding: 24,
                  boxShadow:
                    "0 12px 30px rgba(115, 209, 61, 0.2), 0 4px 12px rgba(0, 0, 0, 0.05)",
                  textAlign: "center",
                }}
                cover={
                  <img
                    alt="Енергетична верба"
                    src="/img/svg/verb_main.png"
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
                      backgroundColor: "#73d13d",
                      border: "none",
                      fontWeight: 600,
                    }}
                  >
                    Долучитися до проєкту
                  </Button>,
                ]}
              >
                <Title level={3}>🌿 Енергетична верба</Title>
                <Paragraph>
                  Унікальний екологічний проєкт із висадження енергетичних верб
                  для відновлення довкілля та сталого розвитку.
                </Paragraph>
                <Text type="secondary">Сектор: Екологія та сталий розвиток</Text>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </div>

      <Title
        level={2}
        style={{ textAlign: "center", marginBottom: 48, marginTop: 50 }}
      >
        Минулих проєктів
      </Title>
      <Row gutter={[32, 32]}>
        {pastProjects.map(({ id, title, description, images, sector }, index) => (
          <Col xs={24} sm={12} md={8} key={id}>
            <motion.div
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <Card
                hoverable
                onClick={() => history.push(`/event/${id}`)}
                style={{
                  borderRadius: 12,
                  boxShadow:
                    "0 8px 20px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.06)",
                  overflow: "hidden",
                  transition: "transform 0.3s ease",
                  minHeight: 380,
                }}
                cover={
                  <img
                    alt={title}
                    src={`/img/svg/${images[0]}`}
                    style={{ height: 220, objectFit: "cover" }}
                  />
                }
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                {renderCardMeta(title, description, sector)}
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Projects;