export interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  sector: string;
  location: string;
  registrationUrl: string;
  feedbackUrl: string;
  rating: number; // от 1 до 5
  status: "completed" | "in-progress" | "planned";
  participants: number;
  tags: string[];
  date: string;
}

export const pastProjects: Project[] = [
  {
    id: 1,
    title: "Проєкт №1",
    description: "Успішно реалізований проєкт з розвитком локальної громади.",
    images: ["alotofus.png", "cult.png"], 
    sector: "спорту та екології",
    location: "м. Київ, Палац Спорту",
    registrationUrl: "https://example.com/register1",
    feedbackUrl: "https://example.com/feedback1",
    rating: 4.8,
    status: "completed",
    participants: 120,
    tags: ["спорт", "екологія", "громада"],
    date: "2023-06-15"
  },
  {
    id: 2,
    title: "Проєкт №2",
    description: "Екологічна ініціатива з озеленення міста.",
    images: ["inf.png"],
    sector: "Військово-патріотичний сектор",
    location: "м. Львів, Площа Ринок",
    registrationUrl: "",
    feedbackUrl: "https://example.com/feedback2",
    rating: 4.5,
    status: "completed",
    participants: 85,
    tags: ["екологія", "озеленення", "місто"],
    date: "2023-05-10"
  },
  {
    id: 3,
    title: "Проєкт №3",
    description: "Підтримка молодих підприємців у регіоні.",
    images: ["rozvt.png", "svs.png", "cult.png", "alotofus.png"],
    sector: "Сектор культури",
    location: "м. Одеса, Театр опери",
    registrationUrl: "https://example.com/register3",
    feedbackUrl: "https://example.com/feedback1",
    rating: 4.9,
    status: "completed",
    participants: 200,
    tags: ["бізнес", "підприємництво", "молодь"],
    date: "2023-07-22"
  },
];

export const futureProjects: Project[] = [
  {
    id: 5,
    title: "Проєкт №4",
    description: "Плануємо масштабну освітню кампанію для школярів.",
    images: ["main_sharm.png", "inf.png"],
    sector: "Сектор інформації",
    location: "м. Харків, Палац Молоді",
    registrationUrl: "https://example.com/register5",
    feedbackUrl: "https://example.com/feedback1",
    rating: 0,
    status: "planned",
    participants: 0,
    tags: ["освіта", "школярі", "навчання"],
    date: "2024-03-15"
  },
  {
    id: 6,
    title: "Проєкт №5",
    description: "Соціальна платформа для волонтерів і благодійників.",
    images: ["svs.png"],
    sector: "Сектор культури",
    location: "м. Дніпро, Конгрес-Хол",
    registrationUrl: "https://example.com/register5",
    feedbackUrl: "https://example.com/feedback5",
    rating: 0,
    status: "in-progress",
    participants: 45,
    tags: ["волонтерство", "благодійність", "соціальна"],
    date: "2024-02-01"
  },
  {
    id: 7,
    title: "Проєкт №6",
    description: "Інноваційний центр підтримки стартапів.",
    images: ["rozvt.png", "main_sharm.png", "cult.png"],
    sector: "спорту та екології",
    location: "м. Київ, UNIT.City",
    registrationUrl: "https://example.com/register5",
    feedbackUrl: "https://example.com/feedback6",
    rating: 0,
    status: "planned",
    participants: 0,
    tags: ["стартапи", "інновації", "технології"],
    date: "2024-04-10"
  },
];

export const allProjects = [...pastProjects, ...futureProjects];
