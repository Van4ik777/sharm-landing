import React, { useState } from "react";

import { useParams, useHistory } from "react-router-dom";
import { Typography, Image, Tag, Button, Skeleton } from "antd";
import { motion } from "framer-motion";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Projects } from "../../data/projects";
// Глобальный skeleton для всей галереи
const getGridSkeleton = (count: number, columns: number, height: number) => (
  <div
    style={{
      display: "grid",
      gap: "1rem",
      gridTemplateColumns: `repeat(${columns}, 1fr)`
    }}
  >
    {Array.from({ length: count }).map((_, i) => (
      <Skeleton.Image
        key={i}
        style={{ width: "100%", height, borderRadius: 12, marginBottom: 8 }}
        active
      />
    ))}
  </div>
);

const { Title, Paragraph } = Typography;

const Event = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const data = Projects.find((project) => project.id === Number(id));
  const [imagesLoaded, setImagesLoaded] = useState(Array(data?.images?.length || 0).fill(false));
  // Progressive skeleton timeout: show gallery immediately if images are cached
  const [showGallery, setShowGallery] = useState(false);
  React.useEffect(() => {
    if (imagesLoaded.every(Boolean)) {
      setShowGallery(true);
      return;
    }
    // Убираем задержку - показываем галерею сразу
    setShowGallery(true);
  }, [imagesLoaded]);


  const handleImgLoad = (idx: number) => {
    setImagesLoaded((prev) => {
      if (prev[idx]) return prev; // уже отмечено
      const arr = [...prev];
      arr[idx] = true;
      return arr;
    });
  };

  // Если картинки уже закешированы, сразу отмечаем их как загруженные
  React.useEffect(() => {
    if (!data?.images) return;
    data.images.forEach((img, idx) => {
      const image = new window.Image();
      image.src = `/img/svg/${img}`;
      if (image.complete) {
        handleImgLoad(idx);
      }
    });
    // eslint-disable-next-line
  }, []);

  if (!data) return <div>Проєкт не знайдено</div>;

  const isPast = Projects.some((project) => project.id === data.id);

  // Состояние загрузки всех картинок

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

        {/* Image grid with preview */}
        <Image.PreviewGroup>
          {!showGallery ? (
            // Показываем skeleton до загрузки всех картинок
            data.images.length === 3
              ? (
                <>
                  {getGridSkeleton(1, 1, 350)}
                  {getGridSkeleton(2, 2, 250)}
                </>
              )
              : data.images.length === 4
              ? getGridSkeleton(4, 2, 300)
              : data.images.length === 2
              ? getGridSkeleton(2, 2, 400)
              : getGridSkeleton(1, 1, 500)
          ) : (
            <div
              style={{
                display: (data.images.length === 2 || data.images.length === 4) ? "grid" : undefined,
                gap: "1rem",
                gridTemplateColumns:
                  data.images.length === 1
                    ? "1fr"
                    : data.images.length === 2
                    ? "1fr 1fr"
                    : data.images.length === 4
                    ? "1fr 1fr"
                    : "1fr",
                gridTemplateRows: data.images.length === 4 ? "1fr 1fr" : undefined,
                width: "100%",
                minWidth: data.images.length === 2 ? 600 : undefined,
                overflowX: data.images.length === 2 ? "auto" : undefined,
              }}
            >
              {data.images.length === 3 ? (
                <>
                  <img
                    src={`/img/svg/${data.images[0]}`}
                    alt={`${data.title} - фото 1`}
                    style={{ width: "100%", maxHeight: 350, objectFit: "cover", borderRadius: 12, marginBottom: 8 }}
                    loading="eager"
                    onLoad={() => handleImgLoad(0)}
                    onError={() => handleImgLoad(0)}
                  />
                  <div
                    style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
                  >
                    {[data.images[1], data.images[2]].map((img, i) => (
                      <img
                        key={i}
                        src={`/img/svg/${img}`}
                        alt={`${data.title} - фото ${i + 2}`}
                        style={{ width: "100%", maxHeight: 250, objectFit: "cover", borderRadius: 12, marginBottom: 8 }}
                        loading="eager"
                        onLoad={() => handleImgLoad(i + 1)}
                        onError={() => handleImgLoad(i + 1)}
                      />
                    ))}
                  </div>
                </>
              ) : (
                data.images.map((img, index) => (
                  <img
                    key={index}
                    src={`/img/svg/${img}`}
                    alt={`${data.title} - фото ${index + 1}`}
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
                      marginBottom: 8,
                    }}
                    loading="eager"
                    onLoad={() => handleImgLoad(index)}
                    onError={() => handleImgLoad(index)}
                  />
                ))
              )}
            </div>
          )}

        </Image.PreviewGroup>

        {/* Описание */}
        <div style={{ flex: 1, padding: "0 0.5rem" }}>
          <Title level={2}>{data.title}</Title>
          <Paragraph style={{ fontSize: 18, lineHeight: 1.7 }}>
            {data.description}
          </Paragraph>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            {data.location && (
              <Tag color="blue" style={{ fontSize: 16 }}>
                Місце: {data.location}
              </Tag>
            )}
          </div>
        </div>
      </motion.div>
  );
}

export default Event;
