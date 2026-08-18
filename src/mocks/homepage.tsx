import { ModuleInfo, TemplateInfo } from "../types/common"
import { ModuleType } from "../types/module.types"

export const modulesList: ModuleInfo[] = [
  {
    "id": '1',
    "type": ModuleType.TEXT,
    "title": "Трохи тепла",
    "description": "Іноді кількох простих слів достатньо, щоб нагадати важливій людині, як багато вона для тебе означає. Почни свою маленьку історію з теплого привітання, щирого зізнання або просто милого повідомлення.",
    "image": "../../src/assets/homepage/module_1.jpg"
  },
  {
    "id": '2',
    "type": ModuleType.QUESTION_TEXT,
    "title": "А ти пам’ятаєш?",
    "description": "Додай маленьке питання, відповідь на яке знає лише людина, що добре тебе знає. Це може бути ваш спільний спогад, улюблена річ або кумедна дрібниця, про яку знаєте тільки ви.",
    "image": "../../src/assets/homepage/module_2.jpg"
  },
  {
    "id": '3',
    "type": ModuleType.PUZZLE_LETTER,
    "title": "Збери спогад",
    "description": "Одне особливе фото заховалося за десятками маленьких шматочків — доведеться трохи попрацювати, щоб побачити його знову. А коли пазл буде складено, на тебе чекатиме ще один маленький сюрприз.",
    "image": "../../src/assets/homepage/module_3.jpg"
  },
  {
    "id": '4',
    "type": ModuleType.TEXT_IMG,
    "title": "Одна маленька історія",
    "description": "Є моменти, фотографії та слова, якими хочеться поділитися саме зараз. Додай до своєї історії красиве фото і розкажи все, що давно хотілося сказати.",
    "image": "../../src/assets/homepage/module_4.jpg"
  },
  {
    "id": '5',
    "type": ModuleType.IMGS,
    "title": "Наші моменти",
    "description": "Деякі фотографії зберігають набагато більше, ніж просто зображення — вони повертають у певний день, місце та відчуття. Збери свої найулюбленіші моменти в одну маленьку галерею, до якої захочеться повертатися.",
    "image": "../../src/assets/homepage/module_5.jpg"
  }
]

export const templatesList: TemplateInfo[] = [
  {
    id: "1",
    title: 'lorem2lorem2lorem2 lorem2',
    description: "lorem34 lorem34 lorem34 lorem34 lorem34 lorem34 lorem34 lorem34 lorem34 lorem34",
    image: "https://i.pinimg.com/736x/b7/e0/04/b7e004f5844a1e9bdf6ecf2bed6c27bd.jpg",
  },
  {
    id: "2",
    title: 'lorem2 lorem2 lorem2 lorem2 lorem2',
    description: "lorem34 lorem34 lorem34 lorem34 lorem34 lorem34 lorem34 lorem34 lorem34 lorem34",
    image: "../../src/assets/homepage/module_5.jpg",
  },
  {
    id: "3",
    title: 'lorem2lorem2lorem2lorem2lorem2lorem2lorem2lorem2',
    description: "lorem2lorem2lorem2lorem2lorem2lorem2lorem2lorem2lorem2lorem2lorem2lorem2lorem2lorem2lorem34 lorem34 lorem34 lorem34 lorem34 lorem34 lorem34 lorem34 lorem34 lorem34",
    image: "../../src/assets/homepage/module_3.jpg",
  },
  {
    id: "4",
    title: 'lorem2',
    description: "lorem34 lorem34 lorem34 lorem34 lorem34 lorem34 lorem34 lorem34 lorem34 lorem34 lorem34 lorem34 lorem34 lorem34 lorem34 lorem34 lorem34 lorem34 lorem34 lorem34 lorem34 lorem34 lorem34 lorem34 lorem34 lorem34",
    image: "https://i.pinimg.com/736x/e7/54/74/e754745f3a8cd9e24aeba078437fb618.jpg",
  }
]