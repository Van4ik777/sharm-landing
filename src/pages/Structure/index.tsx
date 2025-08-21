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
};

interface Person {
  name: string;
  phone: string;
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
    image: "prez.png",
    description:
      "Керує ШАРМом, організовує засідання, координує діяльність органу. Обирається на два періоди (семестри).",
    contact: {
        phone: "+380 67 101 11 22",
        email: "president@sharm.ua",
        name: "Деніс Коваленко"
    },
  },
  {
    id: "vicepresident",
    title: "Віцепрезидент",
    icon: icons.vicepresident,
    image: "vprez.png",
    description:
      "Заступник президента, виконує його обов'язки у разі відсутності. Обирається на два періоди.",
    contact: {
        phone: "+380 67 202 22 33",
        email: "vicepresident@sharm.ua",
        name: "Уляна Петрівна"
    },
  },
  {
    id: "premier",
    title: "Прем'єр",
    icon: icons.premier,
    image: "prem.png",
    description:
      "Відповідає за протоколи засідань, зв'язок між членами ШАРМу. Обирається на два періоди.",
    contact: {
        phone: "+380 67 303 33 44",
        email: "premier@sharm.ua",
        name: "Кирило Іванович"
    },
  },
  {
    id: "minister",
    title: "Міністр",
    icon: icons.minister,
    description: "Відповідальний за координацію секторів та загальні питання.",
  },
];

const sectors: StructureItem[] = [
  {
    id: "patriot",
    title: "Військово-патріотичний сектор",
    icon: icons.patriot,
    image: "svs.png",
    description: "Організовує заходи військово-патріотичного спрямування.",
    minister: {
      name: "Олег Гончар",
      phone: "+380 67 222 33 44",
      email: "patriot@sharm.ua",
    },
  },
  {
    id: "culture",
    title: "Сектор культури",
    icon: icons.culture,
    image: "cult.png",
    description: "Реалізовує культурні та суспільні ініціативи.",
    minister: {
      name: "Світлана Мироненко",
      phone: "+380 68 333 44 55",
      email: "culture@sharm.ua",
    },
  },
  {
    id: "sport",
    title: "Сектор спорту та екології",
    icon: icons.sport,
    image: "sport.png",
    description: "Організовує спортивні події та екопроєкти.",
    minister: {
      name: "Анна Кравченко",
      phone: "+380 67 555 66 77",
      email: "sport@sharm.ua",
    },
  },
  {
    id: "info",
    title: "Сектор інформації",
    icon: icons.info,
    image: "inf.png",
    description: "Займається соцмережами та зовнішньою комунікацією.",
    minister: {
      name: "Дмитро Савченко",
      phone: "+380 68 666 77 88",
      email: "info@sharm.ua",
    },
  },
  {
    id: "development",
    title: "Сектор розвитку",
    icon: icons.development,
    image: "rozvt.png",
    description: "Вдосконалює внутрішню структуру та підтримує інші сектори.",
    minister: {
      name: "Оксана Левченко",
      phone: "+380 50 777 88 99",
      email: "development@sharm.ua",
    },
  },
  {
    id: "bank",
    title: "НБШ — Національний банк ШАРМу",
    icon: icons.bank,
    image: "zazicav.png",
    description: "Відповідальна особа призначається.",
    minister: {
      name: "Валентин Коваленко",
      phone: "+380 67 888 99 00",
      email: "bank@sharm.ua",
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
}: {
  visible: boolean;
  onClose: () => void;
  title?: string;
  content?: string;
  minister?: Person;
  contact?: Person;
  image?: string;
  isMobile: boolean;
}) {
  if (!visible) return null;

  return (
    <div style={styles.modalOverlay} onClick={onClose}>
      <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button style={styles.closeBtn} onClick={onClose}>
          ×
        </button>
        {image && (
          <img
            src={`/img/svg/${image}`}
            alt={title}
            style={{
              width: "90%",
              marginLeft: "5%",
              maxHeight: 300, // выше
              objectFit: "cover",
              objectPosition: isMobile ? "center" : (image === "inf.png" ? "center -100px" : "center"),
              borderRadius: 8,
              marginBottom: 20,
            }}
          />
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
              <>
                <div>👤 Міністр: {minister.name}</div>
                <div>📞 {minister.phone}</div>
                {minister.email && (
                  <div>
                    ✉️{" "}
                    <a style={{ color: "#5D3FD3" }} href={`mailto:${minister.email}`}>
                      {minister.email}
                    </a>
                  </div>
                )}
              </>
            )}
            {contact && (
              <>
                <div>👤 {contact.name}</div>
                <div>📞 {contact.phone}</div>
                {contact.email && (
                  <div>
                    ✉️{" "}
                    <a style={{ color: "#5D3FD3" }} href={`mailto:${contact.email}`}>
                      {contact.email}
                    </a>
                  </div>
                )}
              </>
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

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const openModal = (item: StructureItem) => setModalData(item);
  const closeModal = () => setModalData(null);

  return (
    <div style={styles.container}>
      <h1 style={{ color: "#5D3FD3", marginBottom: 20, marginTop: 150, textAlign: "center" }}>
        Структура ШАРМу
      </h1>

      <section>
        <h3 style={{ color: "#7D5FFF", marginBottom: 10, fontSize: 32 }}>Органи ШАРМу</h3>
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
                {sector.minister && (
                  <div style={{ fontSize: 14, color: "#5D3FD3", marginTop: 4 }}>
                    Міністр: {sector.minister.name} <br />
                    Тел: {sector.minister.phone}
                  </div>
                )}
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
    transition: "all 0.25s ease",
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
};
