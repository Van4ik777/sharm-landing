import React, { useState, useEffect } from "react";
import { Button, Typography, Row, Col } from "antd";
import { motion, easeInOut } from "framer-motion";
import { useHistory } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";

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
  const [imageLoading, setImageLoading] = useState<{ [key: string]: boolean }>({});
  const history = useHistory();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleImageLoad = (imageName: string) => {
    setImageLoading(prev => ({ ...prev, [imageName]: false }));
  };
  
  const handleImageError = (imageName: string) => {
    setImageLoading(prev => ({ ...prev, [imageName]: false }));
  };

  return (
    <div style={{ 
      maxWidth: 1200, 
      margin: "0 auto", 
      padding: "2rem",
      marginTop: "150px" 
    }}>
        <Button
          type="link"
          icon={<ArrowLeftOutlined />}
          onClick={() => history.push("/projects")}
          style={{
            alignSelf: "flex-start",
            marginBottom: "1rem",
            fontSize: 16,
            color: "#000",
            position: "relative"
          }}
        >
          Назад до проєктів
        </Button>
<Title 
  level={1} 
  style={{ 
    textAlign: "center", 
    marginBottom: "3rem", 
    color: "#2C5E5C",
    fontSize: isMobile ? "24px" : "44px"
  }}
>
  🌿 Енергетична верба
</Title>

{/* Первый ряд с двумя изображениями */}
<Row gutter={[16, 16]}>
  <Col xs={12} md={12}>
    <motion.div
      custom={0}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      <div style={{ position: 'relative' }}>
        {/* Скелетон загрузки */}
        {imageLoading['verba_logo.jpg'] !== false && (
          <div style={{
            width: "100%",
            height: isMobile ? "200px" : "350px",
            backgroundColor: "#f0f0f0",
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 1.5s infinite"
          }}>
            <div style={{ fontSize: isMobile ? "20px" : "24px", color: "#ccc" }}>📷</div>
          </div>
        )}
        
        <img
          src="/img/optimized/verba_logo.jpg"
          alt="Енергетична верба - фото 2"
          onLoad={() => handleImageLoad('verba_logo.jpg')}
          onError={() => handleImageError('verba_logo.jpg')}
          style={{
            width: "100%",
            height: isMobile ? "200px" : "350px",
            objectFit: "cover",
            borderRadius: "16px",
            boxShadow: "0 8px 30px rgba(44, 94, 92, 0.2)",
            display: imageLoading['verba_logo.jpg'] === false ? "block" : "none",
            transition: "opacity 0.3s ease-in-out"
          }}
        />
      </div>
    </motion.div>
  </Col>
  
  <Col xs={12} md={12}>
    <motion.div
      custom={1}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      <div style={{ position: 'relative' }}>
        {/* Скелетон загрузки */}
        {imageLoading['verb_main.jpg'] !== false && (
          <div style={{
            width: "100%",
            height: isMobile ? "200px" : "350px",
            backgroundColor: "#f0f0f0",
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 1.5s infinite"
          }}>
            <div style={{ fontSize: isMobile ? "20px" : "24px", color: "#ccc" }}>📷</div>
          </div>
        )}
        
        <img
          src="/img/optimized/verb_main.jpg"
          alt="Енергетична верба - фото 1"
          onLoad={() => handleImageLoad('verb_main.jpg')}
          onError={() => handleImageError('verb_main.jpg')}
          style={{
            width: "100%",
            height: isMobile ? "200px" : "350px",
            objectFit: "cover",
            borderRadius: "16px",
            boxShadow: "0 8px 30px rgba(44, 94, 92, 0.2)",
            display: imageLoading['verb_main.jpg'] === false ? "block" : "none",
            transition: "opacity 0.3s ease-in-out"
          }}
        />
      </div>
    </motion.div>
  </Col>
</Row>

{/* Второй ряд с двумя изображениями */}
<Row gutter={[16, 16]} style={{ marginTop: "1rem" }}>
  <Col xs={12} md={12}>
    <motion.div
      custom={2}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      <div style={{ position: 'relative' }}>
        {/* Скелетон загрузки */}
        {imageLoading['verba1.jpg'] !== false && (
          <div style={{
            width: "100%",
            height: isMobile ? "200px" : "350px",
            backgroundColor: "#f0f0f0",
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 1.5s infinite"
          }}>
            <div style={{ fontSize: isMobile ? "20px" : "24px", color: "#ccc" }}>📷</div>
          </div>
        )}
        
        <img
          src="/img/optimized/verba1.jpg"
          alt="Енергетична верба - додаткове фото 1"
          onLoad={() => handleImageLoad('verba1.jpg')}
          onError={() => handleImageError('verba1.jpg')}
          style={{
            width: "100%",
            height: isMobile ? "200px" : "350px",
            objectFit: "cover",
            borderRadius: "16px",
            boxShadow: "0 8px 30px rgba(44, 94, 92, 0.2)",
            display: imageLoading['verba1.jpg'] === false ? "block" : "none",
            transition: "opacity 0.3s ease-in-out"
          }}
        />
      </div>
    </motion.div>
  </Col>
  
  <Col xs={12} md={12}>
    <motion.div
      custom={3}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      <div style={{ position: 'relative' }}>
        {/* Скелетон загрузки */}
        {imageLoading['verba2.jpg'] !== false && (
          <div style={{
            width: "100%",
            height: isMobile ? "200px" : "350px",
            backgroundColor: "#f0f0f0",
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 1.5s infinite"
          }}>
            <div style={{ fontSize: isMobile ? "20px" : "24px", color: "#ccc" }}>📷</div>
          </div>
        )}
        
        <img
          src="/img/optimized/verba2.jpg"
          alt="Енергетична верба - додаткове фото 2"
          onLoad={() => handleImageLoad('verba2.jpg')}
          onError={() => handleImageError('verba2.jpg')}
          style={{
            width: "100%",
            height: isMobile ? "200px" : "350px",
            objectFit: "cover",
            borderRadius: "16px",
            boxShadow: "0 8px 30px rgba(44, 94, 92, 0.2)",
            display: imageLoading['verba2.jpg'] === false ? "block" : "none",
            transition: "opacity 0.3s ease-in-out"
          }}
        />
      </div>
    </motion.div>
  </Col>
</Row>

      <motion.div
        custom={4}
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
                color: "#2C5E5C",
                fontWeight: "600"
              }}>
                Унікальний екологічний проєкт із висадження енергетичних верб для відновлення довкілля та сталого розвитку
              </Paragraph>
            </div>

            <Row gutter={[32, 32]}>
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
                    boxShadow: "0 4px 20px rgba(44, 94, 92, 0.1)",
                    border: "1px solid rgba(44, 94, 92, 0.2)",
                    height: "100%"
                  }}
                >
                  <div style={{ 
                    fontSize: "40px", 
                    marginBottom: "1rem",
                    color: "#2C5E5C"
                  }}>⚡</div>
                  <Title level={4} style={{ 
                    color: "#2C5E5C", 
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
                  custom={6}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInUp}
                  style={{
                    padding: "2rem",
                    textAlign: "center",
                    borderRadius: "12px",
                    boxShadow: "0 4px 20px rgba(44, 94, 92, 0.1)",
                    border: "1px solid rgba(44, 94, 92, 0.2)",
                    height: "100%"
                  }}
                >
                  <div style={{ 
                    fontSize: "40px", 
                    marginBottom: "1rem",
                    color: "#2C5E5C"
                  }}>🌱</div>
                  <Title level={4} style={{ 
                    color: "#2C5E5C", 
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
                  custom={7}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInUp}
                  style={{
                    padding: "2rem",
                    textAlign: "center",
                    borderRadius: "12px",
                    boxShadow: "0 4px 20px rgba(44, 94, 92, 0.1)",
                    border: "1px solid rgba(44, 94, 92, 0.2)",
                    height: "100%"
                  }}
                >
                  <div style={{ 
                    fontSize: "40px", 
                    marginBottom: "1rem",
                    color: "#2C5E5C"
                  }}>🏆</div>
                  <Title level={4} style={{ 
                    color: "#2C5E5C", 
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

// Добавляем CSS анимации
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`;
document.head.appendChild(styleSheet);

export default Verb;