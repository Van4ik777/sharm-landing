import React, { useState, useEffect } from "react";
import { Typography, Row, Col, Button } from "antd";
import { motion, easeInOut } from "framer-motion";

const { Title, Paragraph } = Typography;

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

const Verb = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div style={{ 
      maxWidth: 1200, 
      margin: "0 auto", 
      padding: "2rem",
      marginTop: "150px" 
    }}>
      <Title 
        level={1} 
        style={{ 
          textAlign: "center", 
          marginBottom: "3rem", 
          color: "#73d13d",
          fontSize: isMobile ? "24px" : "44px"
        }}
      >
        🌿 Енергетична верба
      </Title>

      <Row gutter={[32, 32]}>
        <Col xs={24} md={12}>
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <img
              src="/img/svg/verba_logo.png"
              alt="Енергетична верба - фото 2"
              style={{
                width: "100%",
                height: "350px",
                objectFit: "cover",
                borderRadius: "16px",
                boxShadow: "0 8px 30px rgba(115, 209, 61, 0.2)"
              }}
            />
          </motion.div>
        </Col>
        
        <Col xs={24} md={12}>
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <img
              src="/img/svg/verb_main.png"
              alt="Енергетична верба - фото 1"
              style={{
                width: "100%",
                height: "350px",
                objectFit: "cover",
                borderRadius: "16px",
                boxShadow: "0 8px 30px rgba(115, 209, 61, 0.2)"
              }}
            />
          </motion.div>
        </Col>
      </Row>

      <motion.div
        custom={2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        style={{ marginTop: "4rem" }}
      >
        <Row justify="center">
          <Col xs={24} lg={18}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <Paragraph style={{ 
                fontSize: isMobile ? "14px" : "20px", 
                lineHeight: "1.8", 
                marginBottom: "3rem",
                color: "#73d13d",
                fontWeight: "600"
              }}>
                Унікальний екологічний проєкт із висадження енергетичних верб для відновлення довкілля та сталого розвитку
              </Paragraph>
            </div>

            <Row gutter={[32, 32]}>
              <Col xs={24} md={8}>
                <motion.div
                  custom={3}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInUp}
                  style={{
                    padding: "2rem",
                    textAlign: "center",
                    borderRadius: "12px",
                    boxShadow: "0 4px 20px rgba(115, 209, 61, 0.1)",
                    border: "1px solid rgba(115, 209, 61, 0.2)",
                    height: "100%"
                  }}
                >
                  <div style={{ 
                    fontSize: "40px", 
                    marginBottom: "1rem",
                    color: "#73d13d"
                  }}>⚡</div>
                  <Title level={4} style={{ 
                    color: "#73d13d", 
                    marginBottom: "1rem",
                    fontSize: isMobile ? "16px" : "20px"
                  }}>
                    Проблема
                  </Title>
                  <Paragraph style={{ fontSize: isMobile ? "13px" : "15px", lineHeight: "1.6" }}>
                    Через масові російські атаки на українську енергосистему ми зазнали значних проблем з електрикою
                  </Paragraph>
                </motion.div>
              </Col>

              <Col xs={24} md={8}>
                <motion.div
                  custom={4}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInUp}
                  style={{
                    padding: "2rem",
                    textAlign: "center",
                    borderRadius: "12px",
                    boxShadow: "0 4px 20px rgba(115, 209, 61, 0.1)",
                    border: "1px solid rgba(115, 209, 61, 0.2)",
                    height: "100%"
                  }}
                >
                  <div style={{ 
                    fontSize: "40px", 
                    marginBottom: "1rem",
                    color: "#73d13d"
                  }}>🌱</div>
                  <Title level={4} style={{ 
                    color: "#73d13d", 
                    marginBottom: "1rem",
                    fontSize: isMobile ? "16px" : "20px"
                  }}>
                    Рішення
                  </Title>
                  <Paragraph style={{ fontSize: isMobile ? "13px" : "15px", lineHeight: "1.6" }}>
                    Ідея проєкту полягає у вирощуванні енергетичної культури на шкільних ділянках Шевченківського району
                  </Paragraph>
                </motion.div>
              </Col>

              <Col xs={24} md={8}>
                <motion.div
                  custom={5}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInUp}
                  style={{
                    padding: "2rem",
                    textAlign: "center",
                    borderRadius: "12px",
                    boxShadow: "0 4px 20px rgba(115, 209, 61, 0.1)",
                    border: "1px solid rgba(115, 209, 61, 0.2)",
                    height: "100%"
                  }}
                >
                  <div style={{ 
                    fontSize: "40px", 
                    marginBottom: "1rem",
                    color: "#73d13d"
                  }}>🏆</div>
                  <Title level={4} style={{ 
                    color: "#73d13d", 
                    marginBottom: "1rem",
                    fontSize: isMobile ? "16px" : "20px"
                  }}>
                    Результат
                  </Title>
                  <Paragraph style={{ fontSize: isMobile ? "13px" : "15px", lineHeight: "1.6" }}>
                    Наш проєкт зареєстрований як громадська організація та отримав грант 2000€
                  </Paragraph>
                </motion.div>
              </Col>
            </Row>
          </Col>
        </Row>
      </motion.div>
    </div>
  );
};

export default Verb;