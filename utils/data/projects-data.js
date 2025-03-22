import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "AI Innovation Lab for Unified Data Portal",
    description:
      "In this project, I focused on several key features: user management to ensure proper model access control and authentication, and a model chaining feature allowing users to create reusable workflows with PDF-to-text, image-to-text, text-to-speech, speech-to-text, text-summarization, and translation. I also integrated the Autogen feature as a Micro-Frontend, enhancing functionality. The translation component involved mapping Supported Languages API, Auto Detect Language API, and Translate API for seamless translation capabilities. I developed a Chat UI component for image analysis that stores responses from user interactions, ensuring smooth and consistent presentation. Additionally, I created a content generation feature where users can input prompts and get content generated accordingly.",
    tools: ["React", "Node.js", "Express", "AWS", "OpenAI", "MongoDB"],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: "",
  },
  {
    id: 2,
    name: "Smart City Web and Android App",
    description:
      "This project involved developing a new API for seamless integration and real-time data retrieval based on location. I integrated dynamic avatar functionality to enhance user engagement and personalization. Additionally, I packaged and rigorously tested an Android app for secure installation on devices, implemented dynamic updates for notification badges to inform users of new activity, and stored previous complaint details in the Log a Complaint component for user convenience.",
    tools: ["React", "Android", "Node.js", "Firebase", "Express"],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: "",
  },
  {
    id: 3,
    name: "LinkedIn Clone",
    description:
      "Designed and implemented a user interface using MERN stack technologies and Firebase. I was responsible for developing server-side logic and integrating it with the database to ensure performance and scalability. The app includes features like Google login, post creation, photo/video sharing, real-time updates, and auto-authentication.",
    tools: ["MERN Stack", "Firebase"],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: "",
  },
  {
    id: 4,
    name: "NewsApp with API",
    description:
      "Built and deployed a functional NewsApp using ReactJS and various APIs that allow real-time news retrieval, search, and filtering. I focused on ensuring a smooth user experience and efficient data handling throughout the application.",
    tools: ["ReactJS", "APIs"],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: "",
  },
  {
    id: 4,
    name: "LLamaste – AI-Driven Wellness Companion",
    description:
      "Designed and developed an AI-powered wellness assistant utilizing Retrieval-Augmented Generation (RAG) to provide personalized mindfulness and wellness advice. Implemented LangChain for data chunking and embedding, storing wellness content in a FAISS vector database for efficient semantic search. Integrated Large Language Models (LLMs) using LLM Studio to run the LLaMa model, enabling context-aware and conversational responses. Built a scalable backend with Python and Machine Learning (ML) techniques to enhance response accuracy. Used MongoDB for managing user profiles and interaction history, ensuring data persistence. Developed an intuitive React-based frontend for seamless AI-driven wellness recommendations.",
    tools: [
      "Artificial Intelligence",
      "RAG",
      "NLP",
      "LangChain",
      "FAISS",
      "LLM Studio",
      "LLaMa Model",
      "Python",
      "Machine Learning",
      "MongoDB",
      "React",
    ],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: "",
  },
];
