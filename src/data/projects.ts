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
    description: `Laugh&SHARM – молодіжний стендап-вечір від учнівського самоврядування ШАРМ. Це простір де кожен  спробував себе в ролі коміка або просто  посміявся від душі. Чудовий спосіб відволіктись від буденності та позбутись страху сцени.`,
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
    description: `ШАРМОПОЛІЯ – інтерактивна гра за мотивами «Монополії». Це не просто розвага, а можливість навчитися командній роботі, проявити лідерські навички, перевірити фінансову грамотність та креативність. Особливість гри в тому, що поле та всі елементи були не настільними – учасники самі ставали «фішками» й рухалися по ігровому простору. «Шармополія» об’єднує учнівську молодь, дарує нові знайомства й заряд енергії для майбутніх звершень.`,
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
    title: "Клуб Дилетантів",
    description: `Клуб дилетантів – це гра, де команда,яка була найближча до правильної відповіді стає переможцем, а той, хто відповів неправильно отримує веселі покарання! захід для тих, хто не боїться бути «не експертом». Тут можна плутати факти, вигадувати на ходу та все одно отримувати оплески. Це гра для сміливих, креативних і тих, хто хоче довести: бути дилетантом – теж круто!`,
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
