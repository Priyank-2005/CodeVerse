const quizzes = [
    {
      id: 1,
      title: "JavaScript Basics",
      description: "Test your fundamentals of JavaScript.",
      questions: [
        {
          question: "Which of the following is a JavaScript data type?",
          options: ["String", "Boolean", "Float", "Character"],
          correctAnswer: "String"
        },
        {
          question: "What does `===` mean in JavaScript?",
          options: ["Equal", "Strict equality", "Assignment", "Inequality"],
          correctAnswer: "Strict equality"
        },
        {
          question: "Which keyword is used to declare a constant in JS?",
          options: ["let", "var", "constant", "const"],
          correctAnswer: "const"
        }
      ]
    },
    {
      id: 2,
      title: "React Fundamentals",
      description: "Check your React knowledge.",
      questions: [
        {
          question: "What is a component in React?",
          options: [
            "A CSS style",
            "A reusable piece of UI",
            "A backend route",
            "An API"
          ],
          correctAnswer: "A reusable piece of UI"
        },
        {
          question: "What hook is used to manage state?",
          options: ["useEffect", "useState", "useRef", "useReducer"],
          correctAnswer: "useState"
        },
        {
          question: "What is JSX?",
          options: [
            "JavaScript extension syntax",
            "A CSS framework",
            "A server-side language",
            "A package manager"
          ],
          correctAnswer: "JavaScript extension syntax"
        }
      ]
    }
  ];
  
  export default quizzes;
  