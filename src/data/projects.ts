export interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  location: string;
  registrationUrl: string;
  feedbackUrl: string;
  rating: number; // от 1 до 5
  status: "completed" | "in-progress" | "planned";
  participants: number;
  tags: string[];
  date: string;
}

export const Projects: Project[] = [
  {
    id: 101,
    title: "LAUGH&SHARM",
    description: `Ви вже засумували за заходами? 😏\nТоді ловіть дещо дуже заряджене!\nЗапрошуємо вас попрощатись з цим літом зі сміхом та наповнитись енергією на цілий навчальний рік! 🔥\nА отже - офіційно оголошуємо наш новий захід\nLAUGH&SHARM! 🎭🎤\n\n✨ Кожен район має представити невеличкий стендап або гумористичну командну мініатюру.\n\nАле це не все, на події вас чекають 👇\n\n🎭 Імпровізації - випробуй себе на сцені!\n🎁 Лотерея - вигравай круті призи!\n💃 Дискотека - запалюй цей вечір разом з нами!\n🤫 і багато сюрпризів!\n\n📅 Дата - 29 серпня\n⏰ Час - 15:30\n📍 Місце - Mezzanine, вул. Нижньоюрківська, 31`,
    images: ["laugh_main.png", "laugh_scene.png", "laugh_disko.png", "laugh_sponsor.png"],
    location: "Mezzanine, вул. Нижньоюрківська, 31, Київ",
    registrationUrl: "",
    feedbackUrl: "",
    rating: 0,
    status: "planned",
    participants: 0,
    tags: ["стендап", "гумор", "дискотека", "лотерея", "імпровізація", "шарм"],
    date: "2025-08-29"
  },
  {
    id: 100,
    title: "Шармополія",
    description: `Ми змогли перетворити звичайну настільну гру на драйвову та потужну, де фішками будете ВИ🤫\n\nЧекаємо вас на грі, де кубик, який ви кинете, вирішить, ким ви будете сьогодні: банкрутом чи монополістом!😉💜🤍\n\nНепроґавте свій шанс стати доларовим шароновим мільйонером!`,
    images: ["sharmpolia_cool.png", "sharmopolia_golovadima.png", "sharmo_kudick.png", "sharmopolia_zoloto.png"],
    location: "м. Київ, КНУ економічний факультет",
    registrationUrl: "",
    feedbackUrl: "",
    rating: 0,
    status: "planned",
    participants: 0,
    tags: ["гра", "монополія", "шарм", "настільна гра"],
    date: "2025-05-01"
  },
  {
    id: 1,
    title: "Клуб Дилетантів 2.0",
    description: `💜🤍 Вітаємо вас зі святом Христового Воскресіння і підготували для вас подарунок від пасхального кролика 😉\n\nГотові перевірити свою інтуїцію, логіку та незабутньо провести час? Запрошуємо на довгоочікуваний Клуб Дилетантів 2.0 — гру, де за правильні відповіді ти отримуєш бали, а за неправильні… гаряченькі покарання!\n\n📆 27.04.2025\n⏰ 13:00\n📍 вул. Жилянська, 97\n🫂 5 представників від району\n\nЦе не просто гра — це виклик, сміх, азарт і трохи страждання (ну або багато, якщо не пощастить 🤫)\nПриходьте, якщо готові ризикувати, змагатися та веселитися на повну!`,
    images: ['club_logo.png', 'club_main.png'], 
    location: "м. Київ, вул. Жилянська, 97",
    registrationUrl: "",
    feedbackUrl: "",
    rating: 0,
    status: "completed",
    participants: 5,
    tags: ["гра", "УЛК", "Клуб Дилетантів", "свято"],
    date: "2025-04-27"
  }
];

export const allProjects = [...Projects, ...Projects];
