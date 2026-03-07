import React, { useState, useEffect } from "react";
import "./StructurePage.css";

const icons = {
  president: "👑",
  vicepresident: "🤝",
  premier: "📜",
  minister: "🎩",
  bank: "🏦",
  patriot: "⚔️",
  culture: "🎭",
  finance: "💰",
  sport: "🌱",
  info: "📢",
  development: "🚀",
  sponsorship: "🤲", // new icon for sponsorship
  externalinternal: "🌐", // new icon for external/internal development
};

interface Person {
  name?: string;
  email?: string;
}

interface StructureItem {
  id: string;
  title: string;
  icon: string;
  image?: string; // картинка для модального окна
  description: string;
  minister?: Person; // для секторів
  contact?: Person; // для президента/віце/прем'єра
}

const organs: StructureItem[] = [
  {
    id: "president",
    title: "Президент",
    icon: icons.president,
    image: "dima.jpg",
    description:
      "Керує районним самоврядуванням, організовує засідання, координує діяльність органу. Обирається на два періоди (семестри).",
  contact: {
    email: "sharm.lider.ua@gmail.com",
    name: "Дмитро Матвєєв"
  },
  },
  {
    id: "vicepresident",
    title: "Віцепрезидент",
    icon: icons.vicepresident,
    image: "vprez.jpg",
    description:
      "Заступник президента, підтримує реалізацію ініціатив і проєктів, здійснює взаємодію з керівниками секторів самоврядування та адміністраціями шкіл, а також відповідає за організаційну координацію діяльності.",
  contact: {
    email: "sharm.lider.ua@gmail.com",
    name: "Черній Анна"
  },
  },
  {
    id: "premier",
    title: "Прем'єр",
    icon: icons.premier,
    image: "sofa.jpg",
    description:
      "Відповідає за протоколи засідань, звʼязок між членами самоврядування",
  contact: {
    email: "sharm.lider.ua@gmail.com",
    name: "Софія Вакуленко"
  },
  }
];

const sectors: StructureItem[] = [
  {
    id: "culture",
    title: "Сектор Культури",
    icon: icons.culture,
    image: "культура.png",
    description: "Організовує творчі заходи, розвиває таланти та підтримує культурні ініціативи молоді.",
    minister: {
        name: "Філюріна Варвара - керівник сектору",
      },
  },
  {
    id: "patriot",
    title: "Сектор Військово-Патріотичного Спрямування",
    icon: icons.patriot,
    image: "свс.png",
    description: "Формує патріотичний дух, популяризує знання з безпеки та національної оборони.",
    minister: {
        name: "Шевченко Валерія - керівник сектору",
      },
  },
  {
    id: "development",
    title: "Сектор Внутрішьного Розвитку",
    icon: icons.development,
    image: "внутрішній.png",
    description: "Відповідає за командну атмосферу, мотивацію та ефективність роботи членів організації.",
    minister: {
        name: "Никифорук Тетяна - керівник сектору",
      },
  },
  {
    id: "info",
    title: "Сектор Інформації",
    icon: icons.info,
    image: "інформація.png",
    description: "Займається комунікацією, медіа та соцмережами, щоб усі знали про події й можливості ШАРМу.",
    minister:{
        name: "Щербина Соломія - керівниця сектору",
      },
  },
  {
    id: "finance",
    title: "Сектор Підприємницької Діяльності та Фінансової Грамотності",
    icon: icons.finance,
    image: "cult.jpg",
    description: "Навчає молодь розумно керувати грошима, розвиває підприємницьке мислення.",
    minister: {
      name: 'Козаченко Артем - керівник сектору',
    },
  },
  {
    id: "sponsorship",
    title: "Сектор Партнерств",
    icon: icons.sponsorship,
    image: "спонсортсво.png",
    description: "Шукає партнерів і ресурси для реалізації проєктів організації.",
    minister: {
      name: 'Грищенко Маргарита - керівниця сектору',
    },
  },
  {
    id: "externalinternal",
    title: "Сектор Зовнішнього Розвитку",
    icon: icons.externalinternal,
    image: "зовнішний.png",
    description: "Налагоджує співпрацю з іншими організаціями та поширює діяльність ШАРМу за межі району.",
    minister: {
      name: 'Стародубова Вєра - керівниця сектору',
    },
  },
  {
    id: "health-eco",
    title: "Сектор Здоров'я та Екології",
    icon: icons.sport,
    image: "екологія.png",
    description: "Популяризує здоровий спосіб життя та дбає про екологічну свідомість.",

    minister: {
      name: "Григоренко Аріна - керівник сектору",
    },
  },
];


function Modal({
  visible,
  onClose,
  title,
  content,
  minister,
  contact,
  image,
  isMobile,
  isLoading,
  onImageLoad,
  onImageError,
}: {
  visible: boolean;
  onClose: () => void;
  title?: string;
  content?: string;
  minister?: Person;
  contact?: Person;
  image?: string;
  isMobile: boolean;
  isLoading?: boolean;
  onImageLoad?: (imageName: string) => void;
  onImageError?: (imageName: string) => void;
}) {
  if (!visible) return null;

  return (
    <div style={styles.modalOverlay} onClick={onClose}>
      <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button style={styles.closeBtn} onClick={onClose}>
          ×
        </button>
        {image && (
          <div style={{ position: 'relative', width: "90%", marginLeft: "5%", marginBottom: 20 }}>
            {/* Скелетон загрузки */}
            {isLoading && (
              <div style={{
                width: "100%",
                height: 300,
                backgroundColor: "#f0f0f0",
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                ...styles.skeleton
              }}>
                <div style={{
                  fontSize: "24px",
                  color: "#ccc"
                }}>
                  📷
                </div>
              </div>
            )}
            
            {/* Изображение */}
            <img
              src={`/img/${image.includes('культура') || image.includes('екологія') || image.includes('внутрішній') || image.includes('зовнішній') || image.includes('інформація') || image.includes('свс') || image.includes('спонсортсво') ? 'sectors' : 'sectors'}/${image}`}
              alt={title}
              loading="eager"
              onLoad={() => onImageLoad?.(image)}
              onError={() => onImageError?.(image)}
              style={{
                width: "100%",
                maxHeight: 300,
                objectFit: "cover",
                objectPosition: isMobile ? "center" : (image === "inf.png" ? "center -100px" : "center"),
                borderRadius: 8,
                display: isLoading ? "none" : "block",
                transition: "opacity 0.3s ease-in-out"
              }}
            />
          </div>
        )}
        <h2 style={{ color: "#5D3FD3", marginBottom: 12, fontSize: 34 }}>{title}</h2>
        {content && <p style={{ fontSize: 15, color: "#444", lineHeight: 1.6 }}>{content}</p>}

        {(minister || contact) && (
          <div
            style={{
              marginTop: 20,
              padding: 14,
              backgroundColor: "#f4f0ff",
              borderRadius: 8,
              fontWeight: "600",
              color: "#5D3FD3",
              fontSize: 15,
              lineHeight: 1.8,
            }}
          >
            {minister && (
              <div>
                {minister.name && <div>👤 {minister.name}</div>}
                {minister.email && (
                  <div>
                    ✉️ <a style={{ color: "#5D3FD3" }} href={`mailto:${minister.email}`}>{minister.email}</a>
                  </div>
                )}
              </div>
            )}
            {contact && (
              <div>
                {contact.name && <div>👤 {contact.name}</div>}
                {contact.email && (
                  <div>
                    ✉️ <a style={{ color: "#5D3FD3" }} href={`mailto:${contact.email}`}>{contact.email}</a>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function StructurePage() {
  const [modalData, setModalData] = useState<StructureItem | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [imageLoading, setImageLoading] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const openModal = (item: StructureItem) => {
    setModalData(item);
    if (item.image) {
      setImageLoading(prev => ({ ...prev, [item.image!]: true }));
    }
  };
  
  const closeModal = () => setModalData(null);
  
  const handleImageLoad = (imageName: string) => {
    setImageLoading(prev => ({ ...prev, [imageName]: false }));
  };
  
  const handleImageError = (imageName: string) => {
    setImageLoading(prev => ({ ...prev, [imageName]: false }));
  };

  return (
    <div style={styles.container}>
      <h1 style={{ color: "#5D3FD3", marginBottom: 20, marginTop: 150, textAlign: "center" }}>
        Структура ШАРМу
      </h1>

      <section>
        <h3 style={{ color: "#7D5FFF", marginBottom: 10, fontSize: 32 }}>президія ШАРМу</h3>
        <div style={styles.treeContainer}>
          {organs.map((org) => (
            <div
              key={org.id}
              style={styles.treeNode}
              onClick={() => openModal(org)}
              title={`Клік для деталей: ${org.title}`}
              onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.backgroundColor = "#f4f0ff";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateX(6px)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 4px 12px rgba(93,63,211,0.25)";
            }}
            onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLDivElement).style.transform = "translateX(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
            }}
            >
              <span style={{ fontSize: 36, marginRight: 12 }}>{org.icon}</span>
              <span style={styles.nodeTitle}>{org.title}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: 40 }}>
        <h2 style={{ color: "#7D5FFF", marginBottom: 10, fontSize: 32 }}>Сектори ШАРМу</h2>
        <div style={styles.treeContainer}>
          {sectors.map((sector) => (
            <div
              key={sector.id}
              style={styles.treeNode}
              onClick={() => openModal(sector)}
              title={`Клік для деталей: ${sector.title}`}
            onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.backgroundColor = "#f4f0ff";
            (e.currentTarget as HTMLDivElement).style.transform = "translateX(6px)";
            (e.currentTarget as HTMLDivElement).style.boxShadow =
            "0 4px 12px rgba(93,63,211,0.25)";
            }}
            onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLDivElement).style.transform = "translateX(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
            }}
            >
              <span style={{ fontSize: 36, marginRight: 12 }}>{sector.icon}</span>
              <div>
                <div style={styles.nodeTitle}>{sector.title}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Modal
        visible={!!modalData}
        onClose={closeModal}
        title={modalData?.title}
        content={modalData?.description}
        minister={modalData?.minister}
        contact={modalData?.contact}
        image={modalData?.image}
        isMobile={isMobile}
        isLoading={modalData?.image ? imageLoading[modalData.image] : false}
        onImageLoad={handleImageLoad}
        onImageError={handleImageError}
      />
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 900,
    margin: "80px auto",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: "0 24px",
  },
  treeContainer: {
    borderLeft: "4px solid #7D5FFF",
    paddingLeft: 20,
  },
  treeNode: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    marginBottom: 16,
    color: "#4b3ca7",
    fontWeight: "600",
    userSelect: "none" as const,
    padding: "10px 14px",
    borderRadius: 8,
    transition: "all 0.5s ease",
  },
  nodeTitle: {
    fontSize: 18,
  },
  modalOverlay: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(93, 63, 211, 0.45)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 36,
    maxWidth: 740,
    width: "90%",
    boxShadow: "0 6px 30px rgba(93, 63, 211, 0.35)",
    position: "relative" as const,
  },
  closeBtn: {
    position: "absolute" as const,
    top: 14,
    right: 14,
    border: "none",
    background: "none",
    fontSize: 30,
    cursor: "pointer",
    color: "#5D3FD3",
    lineHeight: 1,
  },
  skeleton: {
    background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
    backgroundSize: "200% 100%",
    animation: "shimmer 1.5s infinite",
  },
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
  
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`;
document.head.appendChild(styleSheet);
