import { useParams, useHistory } from "react-router-dom";
import { Typography, Image, Tag, Button } from "antd";
import { motion } from "framer-motion";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { allProjects, pastProjects } from "../../data/projects";

const { Title, Paragraph } = Typography;

const Event = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const data = allProjects.find((project) => project.id === Number(id));

  if (!data) return <div>Проєкт не знайдено</div>;

  const isPast = pastProjects.some((project) => project.id === data.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        maxWidth: 1100,
        margin: "140px auto",
        padding: "0 1rem",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      {/* Кнопка назад */}
      <Button
        type="link"
        icon={<ArrowLeftOutlined />}
        onClick={() => history.push("/projects")}
        style={{
          alignSelf: "flex-start",
          marginBottom: "1rem",
          fontSize: 16,
          color: "#000",
          zIndex: 1000,
          position: "relative"
        }}
      >
        Назад до проєктів
      </Button>

      {/* Image grid */}
      <div
        style={{
          display: "grid",
          gap: "1rem",
          gridTemplateColumns:
            data.images.length === 1
              ? "1fr"
              : data.images.length === 2
              ? "1fr 1fr"
              : data.images.length === 4
              ? "1fr 1fr"
              : "1fr", // для 3 фото свой вариант ниже
        }}
      >
        {data.images.length === 3 ? (
          <>
            {/* Большое фото сверху */}
            <Image
              src={`/img/svg/${data.images[0]}`}
              alt={`${data.title} - фото 1`}
              preview={false}
              style={{
                width: "100%",
                maxHeight: 350,
                objectFit: "cover",
                borderRadius: 12,
              }}
            />
            {/* Нижний ряд из двух миниатюр */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
              }}
            >
              {[data.images[1], data.images[2]].map((img, i) => (
                <Image
                  key={i}
                  src={`/img/svg/${img}`}
                  alt={`${data.title} - фото ${i + 2}`}
                  preview={false}
                  style={{
                    width: "100%",
                    maxHeight: 250,
                    objectFit: "cover",
                    borderRadius: 12,
                  }}
                />
              ))}
            </div>
          </>
        ) : (
          // Для 1, 2, 4 фото рендерим сетку как раньше
          data.images.map((img, index) => (
            <Image
              key={index}
              src={`/img/svg/${img}`}
              alt={`${data.title} - фото ${index + 1}`}
              preview={false}
              style={{
                width: "100%",
                maxHeight:
                  data.images.length === 1
                    ? 500
                    : data.images.length === 2
                    ? 400
                    : 300,
                objectFit: "cover",
                borderRadius: 12,
              }}
            />
          ))
        )}
      </div>

      {/* Описание */}
      <div style={{ flex: 1, padding: "0 0.5rem" }}>
        <Title level={2}>{data.title}</Title>
        <Paragraph style={{ fontSize: 18, lineHeight: 1.7 }}>
          {data.description}
        </Paragraph>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Tag color="green" style={{ fontSize: 16 }}>
            Сектор: {data.sector.trim()}
          </Tag>
          {data.location && (
            <Tag color="blue" style={{ fontSize: 16 }}>
              Місце: {data.location}
            </Tag>
          )}
        </div>

        <div style={{ display: "flex", gap: "1rem", marginTop: 24 }}>
          {isPast ? (
            data.feedbackUrl && (
              <a
                href={data.feedbackUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="large"
                  style={{
                    borderRadius: 8,
                    borderColor: "black",
                    color: "#000",
                    fontWeight: "600",
                  }}
                >
                  Залишити фідбек
                </Button>
              </a>
            )
          ) : (
            data.registrationUrl && (
              <a
                href={data.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button type="primary" size="large" style={{ fontWeight: "600", borderRadius: 8, borderColor: "black" }}>
                  Зареєструватися
                </Button>
              </a>
            )
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Event;
