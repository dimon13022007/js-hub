import type { Topic } from "../types";
import {
  BookOpen,
  Zap,
  Network,
  Atom,
  Code,
  Package,
  Lock,
  Link2,
  Rocket,
} from "lucide-react";

export const topics: Topic[] = [
  {
    id: "js-basics",
    category: "JavaScript Основы",
    items: [
      {
        id: "js-basics",
        title: "Основы JavaScript",
        description: "Изучите фундаментальные концепции JavaScript",
        icon: BookOpen,
        sections: [
          {
            title: "Что такое JavaScript?",
            content: [
              {
                type: "text",
                value:
                  "JavaScript — это высокоуровневый, интерпретируемый язык программирования, который является одним из основных технологий веб-разработки. JavaScript позволяет создавать интерактивные веб-страницы и является основой современных веб-приложений.",
              },
              {
                type: "heading",
                value: "Переменные и типы данных",
              },
              {
                type: "text",
                value:
                  "В JavaScript есть три способа объявления переменных: var, let и const. Современный JavaScript использует let и const.",
              },
              {
                type: "code",
                value: `// Объявление переменных
let name = "JavaScript";
const version = "ES2023";
let isAwesome = true;

// Типы данных
let number = 42;
let string = "Hello, World!";
let boolean = true;
let array = [1, 2, 3];
let object = { key: "value" };
let nullValue = null;
let undefinedValue = undefined;`,
                language: "javascript",
              },
              {
                type: "heading",
                value: "Функции",
              },
              {
                type: "text",
                value:
                  "Функции — это блоки кода, которые можно переиспользовать. В JavaScript функции являются объектами первого класса, что означает, что их можно передавать как аргументы, возвращать из других функций и присваивать переменным.",
              },
              {
                type: "code",
                value: `// Function Declaration
function greet(name) {
  return \`Hello, \${name}!\`;
}

// Arrow Function (ES6)
const greetArrow = (name) => {
  return \`Hello, \${name}!\`;
};

// Сокращенная форма
const greetShort = (name) => \`Hello, \${name}!\`;

// Вызов функции
console.log(greet("World")); // "Hello, World!"

// Функции как значения
const myFunction = greet;
console.log(myFunction("React")); // "Hello, React!"

// Функции как аргументы
function processName(name, processor) {
  return processor(name);
}
console.log(processName("John", greet)); // "Hello, John!"`,
                language: "javascript",
              },
              {
                type: "heading",
                value: "Область видимости (Scope)",
              },
              {
                type: "text",
                value:
                  "Область видимости определяет доступность переменных. В JavaScript есть глобальная область видимости, область видимости функции и блочная область видимости (для let и const).",
              },
              {
                type: "code",
                value: `// Глобальная область видимости
const globalVar = "Я глобальная";

function myFunction() {
  // Локальная область видимости функции
  const localVar = "Я локальная";
  console.log(globalVar); // Доступна
  console.log(localVar); // Доступна
}

// Блочная область видимости
if (true) {
  const blockVar = "Я в блоке";
  let blockLet = "Я тоже в блоке";
}
// console.log(blockVar); // Ошибка! Недоступна вне блока`,
                language: "javascript",
              },
              {
                type: "heading",
                value: "Деструктуризация",
              },
              {
                type: "text",
                value:
                  "Деструктуризация позволяет извлекать значения из массивов и объектов в отдельные переменные. Это мощный инструмент для упрощения кода.",
              },
              {
                type: "code",
                value: `// Деструктуризация массива
const numbers = [1, 2, 3];
const [first, second, third] = numbers;
console.log(first); // 1

// Деструктуризация объекта
const person = { name: "John", age: 30, city: "NYC" };
const { name, age } = person;
console.log(name); // "John"

// Переименование при деструктуризации
const { name: personName, age: personAge } = person;
console.log(personName); // "John"

// Значения по умолчанию
const { name, age, country = "USA" } = person;`,
                language: "javascript",
              },
            ],
          },
          {
            title: "Массивы и объекты",
            content: [
              {
                type: "text",
                value:
                  "Массивы и объекты — это основные структуры данных в JavaScript для хранения коллекций. Массивы используются для упорядоченных коллекций, а объекты — для коллекций с именованными свойствами.",
              },
              {
                type: "code",
                value: `// Массивы
const fruits = ["apple", "banana", "orange"];

// Методы массивов
fruits.push("grape"); // Добавить элемент
fruits.pop(); // Удалить последний элемент
fruits.map(fruit => fruit.toUpperCase()); // Преобразовать
fruits.filter(fruit => fruit.length > 5); // Фильтровать
fruits.find(fruit => fruit.startsWith("a")); // Найти элемент
fruits.reduce((acc, fruit) => acc + fruit.length, 0); // Свернуть массив

// Объекты
const person = {
  name: "John",
  age: 30,
  city: "New York",
  greet() {
    return \`Hi, I'm \${this.name}\`;
  }
};

// Доступ к свойствам
console.log(person.name); // "John"
console.log(person["age"]); // 30
console.log(person.greet()); // "Hi, I'm John"

// Работа с ключами объекта
Object.keys(person); // ["name", "age", "city", "greet"]
Object.values(person); // ["John", 30, "New York", function]
Object.entries(person); // [["name", "John"], ["age", 30], ...]`,
                language: "javascript",
              },
              {
                type: "heading",
                value: "Современные методы массивов",
              },
              {
                type: "code",
                value: `const numbers = [1, 2, 3, 4, 5];

// map - преобразует каждый элемент
const doubled = numbers.map(n => n * 2); // [2, 4, 6, 8, 10]

// filter - фильтрует элементы
const evens = numbers.filter(n => n % 2 === 0); // [2, 4]

// reduce - сводит массив к одному значению
const sum = numbers.reduce((acc, n) => acc + n, 0); // 15

// find - находит первый подходящий элемент
const found = numbers.find(n => n > 3); // 4

// some - проверяет, есть ли хотя бы один подходящий
const hasEven = numbers.some(n => n % 2 === 0); // true

// every - проверяет, все ли элементы подходят
const allPositive = numbers.every(n => n > 0); // true

// flat - разворачивает вложенные массивы
const nested = [[1, 2], [3, 4]];
const flat = nested.flat(); // [1, 2, 3, 4]`,
                language: "javascript",
              },
            ],
          },
        ],
      },
      {
        id: "js-async",
        title: "Асинхронность",
        description: "Promises, async/await и работа с асинхронным кодом",
        icon: Zap,
        sections: [
          {
            title: "Promises",
            content: [
              {
                type: "text",
                value:
                  "Promise — это объект, представляющий результат асинхронной операции. Promise может находиться в одном из трех состояний: pending, fulfilled или rejected.",
              },
              {
                type: "code",
                value: `// Создание Promise
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: "Data" };
      resolve(data);
      // или reject(new Error("Ошибка"));
    }, 1000);
  });
};

// Использование Promise
fetchData()
  .then(data => {
    console.log("Данные получены:", data);
  })
  .catch(error => {
    console.error("Ошибка:", error);
  });`,
                language: "javascript",
              },
            ],
          },
          {
            title: "Async/Await",
            content: [
              {
                type: "text",
                value:
                  "async/await — это синтаксический сахар над Promises, который делает асинхронный код более читаемым и похожим на синхронный. Ключевое слово async делает функцию асинхронной, а await приостанавливает выполнение до завершения Promise.",
              },
              {
                type: "code",
                value: `// Async функция всегда возвращает Promise
async function fetchUserData(userId) {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ошибка загрузки:", error);
    throw error;
  }
}

// Использование
async function displayUser() {
  try {
    const user = await fetchUserData(1);
    console.log("Пользователь:", user);
  } catch (error) {
    console.error("Не удалось загрузить пользователя");
  }
}`,
                language: "javascript",
              },
              {
                type: "heading",
                value: "Параллельное выполнение",
              },
              {
                type: "text",
                value:
                  "Для параллельного выполнения нескольких асинхронных операций используйте Promise.all() или Promise.allSettled().",
              },
              {
                type: "code",
                value: `// Параллельное выполнение с Promise.all
async function fetchMultipleUsers() {
  try {
    const [user1, user2, user3] = await Promise.all([
      fetchUserData(1),
      fetchUserData(2),
      fetchUserData(3)
    ]);
    return [user1, user2, user3];
  } catch (error) {
    // Если хотя бы один запрос упал, весь Promise.all отклоняется
    console.error("Ошибка:", error);
  }
}

// Promise.allSettled - ждет все промисы, даже если некоторые упали
async function fetchAllUsers() {
  const results = await Promise.allSettled([
    fetchUserData(1),
    fetchUserData(2),
    fetchUserData(999) // может упасть
  ]);
  
  results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      console.log(\`User \${index + 1}:\`, result.value);
    } else {
      console.error(\`User \${index + 1} failed:\`, result.reason);
    }
  });
}`,
                language: "javascript",
              },
            ],
          },
        ],
      },
      {
        id: "js-dom",
        title: "Работа с DOM",
        description: "Манипуляции с элементами страницы",
        icon: Network,
        sections: [
          {
            title: "Выбор элементов",
            content: [
              {
                type: "code",
                value: `// Выбор элементов
const element = document.getElementById("myId");
const elements = document.querySelectorAll(".myClass");
const firstElement = document.querySelector(".myClass");

// Изменение содержимого
element.textContent = "Новый текст";
element.innerHTML = "<strong>HTML контент</strong>";

// Изменение стилей
element.style.color = "red";
element.style.backgroundColor = "blue";
element.classList.add("active");
element.classList.remove("inactive");`,
                language: "javascript",
              },
            ],
          },
          {
            title: "События",
            content: [
              {
                type: "code",
                value: `// Добавление обработчика события
const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  console.log("Кнопка нажата!", event);
});

// Удаление обработчика
const handler = () => console.log("Clicked");
button.addEventListener("click", handler);
button.removeEventListener("click", handler);`,
                language: "javascript",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "react-basics",
    category: "React",
    items: [
      {
        id: "react-intro",
        title: "Введение в React",
        description: "Основы библиотеки React",
        icon: Atom,
        sections: [
          {
            title: "Что такое React?",
            content: [
              {
                type: "text",
                value:
                  "React — это JavaScript-библиотека для создания пользовательских интерфейсов. React позволяет создавать компонентные приложения с декларативным подходом к программированию.",
              },
              {
                type: "heading",
                value: "Компоненты",
              },
              {
                type: "text",
                value:
                  "Компоненты — это переиспользуемые части UI. В React компоненты могут быть функциональными или классовыми.",
              },
              {
                type: "code",
                value: `// Функциональный компонент
function Welcome({ name }) {
  return <h1>Привет, {name}!</h1>;
}

// Arrow function компонент
const Welcome = ({ name }) => {
  return <h1>Привет, {name}!</h1>;
};

// Использование компонента
function App() {
  return (
    <div>
      <Welcome name="React" />
    </div>
  );
}`,
                language: "jsx",
              },
            ],
          },
          {
            title: "JSX",
            content: [
              {
                type: "text",
                value:
                  "JSX — это синтаксическое расширение JavaScript, которое позволяет писать HTML-подобный код в JavaScript. JSX компилируется в вызовы React.createElement(), что делает код более читаемым и интуитивным.",
              },
              {
                type: "code",
                value: `// JSX позволяет писать HTML в JavaScript
const element = <h1>Hello, World!</h1>;

// В JSX можно использовать выражения
const name = "React";
const element = <h1>Hello, {name}!</h1>;

// JSX атрибуты
const element = (
  <div className="container" id="main">
    <img src={imageUrl} alt="Description" />
    <button onClick={handleClick}>Click me</button>
  </div>
);`,
                language: "jsx",
              },
              {
                type: "heading",
                value: "Условный рендеринг",
              },
              {
                type: "text",
                value:
                  "В JSX можно использовать условные операторы для условного рендеринга элементов.",
              },
              {
                type: "code",
                value: `// Условный рендеринг с тернарным оператором
function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <h1>Добро пожаловать!</h1>
      ) : (
        <h1>Пожалуйста, войдите</h1>
      )}
    </div>
  );
}

// Условный рендеринг с логическим И
function Mailbox({ unreadMessages }) {
  return (
    <div>
      <h1>Привет!</h1>
      {unreadMessages.length > 0 && (
        <h2>У вас {unreadMessages.length} непрочитанных сообщений</h2>
      )}
    </div>
  );
}`,
                language: "jsx",
              },
              {
                type: "heading",
                value: "Списки и ключи",
              },
              {
                type: "code",
                value: `// Рендеринг списков
function NumberList({ numbers }) {
  return (
    <ul>
      {numbers.map((number) => (
        <li key={number.id}>{number.value}</li>
      ))}
    </ul>
  );
}

// Важно: каждый элемент списка должен иметь уникальный key
const items = [
  { id: 1, text: "Первый" },
  { id: 2, text: "Второй" },
  { id: 3, text: "Третий" }
];

function ItemList() {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}`,
                language: "jsx",
              },
            ],
          },
        ],
      },
      {
        id: "react-hooks",
        title: "React Hooks",
        description: "Использование хуков для управления состоянием",
        icon: Code,
        sections: [
          {
            title: "useState",
            content: [
              {
                type: "text",
                value:
                  "useState — это хук, который позволяет добавлять состояние в функциональные компоненты.",
              },
              {
                type: "code",
                value: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Вы нажали {count} раз</p>
      <button onClick={() => setCount(count + 1)}>
        Нажми меня
      </button>
    </div>
  );
}`,
                language: "jsx",
              },
            ],
          },
          {
            title: "useEffect",
            content: [
              {
                type: "text",
                value:
                  "useEffect позволяет выполнять побочные эффекты в функциональных компонентах (запросы к API, подписки, таймеры и т.д.).",
              },
              {
                type: "code",
                value: `import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Выполняется после каждого рендера
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(data => setUser(data));

    // Функция очистки (опционально)
    return () => {
      // Очистка при размонтировании
    };
  }, [userId]); // Зависимости

  if (!user) return <div>Загрузка...</div>;

  return <div>{user.name}</div>;
}`,
                language: "jsx",
              },
            ],
          },
          {
            title: "useContext",
            content: [
              {
                type: "text",
                value:
                  "useContext позволяет использовать контекст React без вложенности компонентов. Контекст полезен для передачи данных через дерево компонентов без необходимости передавать props на каждом уровне.",
              },
              {
                type: "code",
                value: `import { createContext, useContext } from 'react';

// Создание контекста
const ThemeContext = createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  const theme = useContext(ThemeContext);
  return <div>Тема: {theme}</div>;
}`,
                language: "jsx",
              },
              {
                type: "heading",
                value: "Практический пример с контекстом",
              },
              {
                type: "code",
                value: `// Создание контекста с типизацией
import { createContext, useContext, useState } from 'react';

interface UserContextType {
  user: { name: string; email: string } | null;
  setUser: (user: { name: string; email: string } | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

// Провайдер
function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

// Хук для использования контекста
function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
}

// Использование
function Profile() {
  const { user, setUser } = useUser();
  
  return (
    <div>
      {user ? (
        <div>
          <p>Имя: {user.name}</p>
          <p>Email: {user.email}</p>
          <button onClick={() => setUser(null)}>Выйти</button>
        </div>
      ) : (
        <button onClick={() => setUser({ name: "John", email: "john@example.com" })}>
          Войти
        </button>
      )}
    </div>
  );
}`,
                language: "jsx",
              },
            ],
          },
        ],
      },
      {
        id: "react-props",
        title: "Props и State",
        description: "Передача данных между компонентами",
        icon: Package,
        sections: [
          {
            title: "Props",
            content: [
              {
                type: "text",
                value:
                  "Props (properties) — это данные, которые передаются от родительского компонента к дочернему. Props неизменяемы (immutable).",
              },
              {
                type: "code",
                value: `// Родительский компонент
function App() {
  const user = { name: "John", age: 30 };
  
  return (
    <div>
      <UserCard name={user.name} age={user.age} />
      <UserCard name="Jane" age={25} />
    </div>
  );
}

// Дочерний компонент
function UserCard({ name, age }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Возраст: {age}</p>
    </div>
  );
}`,
                language: "jsx",
              },
            ],
          },
          {
            title: "State",
            content: [
              {
                type: "text",
                value:
                  "State — это внутреннее состояние компонента, которое может изменяться и вызывает повторный рендер компонента.",
              },
              {
                type: "code",
                value: `import { useState } from 'react';

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(prev => !prev);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {isOn ? 'Включено' : 'Выключено'}
      </button>
      <p>Статус: {isOn ? 'ON' : 'OFF'}</p>
    </div>
  );
}`,
                language: "jsx",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "advanced",
    category: "Продвинутые темы",
    items: [
      {
        id: "js-closures",
        title: "Замыкания",
        description: "Понимание замыканий в JavaScript",
        icon: Lock,
        sections: [
          {
            title: "Что такое замыкания?",
            content: [
              {
                type: "text",
                value:
                  "Замыкание — это функция, которая имеет доступ к переменным из внешней (охватывающей) области видимости, даже после того, как внешняя функция завершила выполнение.",
              },
              {
                type: "code",
                value: `function outerFunction(x) {
  // Внешняя переменная
  const outerVariable = x;

  // Внутренняя функция (замыкание)
  function innerFunction(y) {
    console.log(outerVariable + y);
  }

  return innerFunction;
}

const closure = outerFunction(10);
closure(5); // Выведет: 15

// Замыкание сохраняет доступ к outerVariable
// даже после завершения outerFunction`,
                language: "javascript",
              },
              {
                type: "heading",
                value: "Практический пример",
              },
              {
                type: "code",
                value: `// Создание счетчика с замыканием
function createCounter() {
  let count = 0;
  
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount()); // 2

// Переменная count недоступна извне,
// но доступна через методы объекта`,
                language: "javascript",
              },
            ],
          },
        ],
      },
      {
        id: "js-prototypes",
        title: "Прототипы",
        description: "Прототипное наследование в JavaScript",
        icon: Link2,
        sections: [
          {
            title: "Прототипное наследование",
            content: [
              {
                type: "text",
                value:
                  "JavaScript использует прототипное наследование. Каждый объект имеет ссылку на свой прототип, от которого он может наследовать свойства и методы.",
              },
              {
                type: "code",
                value: `// Создание объекта с прототипом
const animal = {
  type: "animal",
  speak() {
    return "Some sound";
  }
};

const dog = Object.create(animal);
dog.type = "dog";
dog.speak = function() {
  return "Woof!";
};

console.log(dog.speak()); // "Woof!"
console.log(dog.type); // "dog"

// Использование конструктора
function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function() {
  return "Some sound";
};

const cat = new Animal("cat");
console.log(cat.speak()); // "Some sound"`,
                language: "javascript",
              },
            ],
          },
        ],
      },
      {
        id: "react-performance",
        title: "Оптимизация React",
        description: "Мемоизация и оптимизация производительности",
        icon: Rocket,
        sections: [
          {
            title: "useMemo и useCallback",
            content: [
              {
                type: "text",
                value:
                  "useMemo и useCallback позволяют оптимизировать производительность, мемоизируя значения и функции.",
              },
              {
                type: "code",
                value: `import { useMemo, useCallback, useState } from 'react';

function ExpensiveComponent({ items, filter }) {
  // Мемоизация вычислений
  const filteredItems = useMemo(() => {
    return items.filter(item => 
      item.name.includes(filter)
    );
  }, [items, filter]);

  // Мемоизация функции
  const handleClick = useCallback((id) => {
    console.log('Clicked:', id);
  }, []);

  return (
    <div>
      {filteredItems.map(item => (
        <div key={item.id} onClick={() => handleClick(item.id)}>
          {item.name}
        </div>
      ))}
    </div>
  );
}`,
                language: "jsx",
              },
            ],
          },
          {
            title: "React.memo",
            content: [
              {
                type: "text",
                value:
                  "React.memo — это HOC (Higher Order Component), который предотвращает повторный рендер компонента, если его props не изменились.",
              },
              {
                type: "code",
                value: `import { memo } from 'react';

const UserCard = memo(function UserCard({ name, age }) {
  console.log('Рендер UserCard');
  
  return (
    <div>
      <h2>{name}</h2>
      <p>Возраст: {age}</p>
    </div>
  );
});

// Компонент будет рендериться только если
// name или age изменились`,
                language: "jsx",
              },
            ],
          },
        ],
      },
    ],
  },
];
