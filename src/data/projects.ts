export type Project = {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    techStack: string[];
    category: "web" | "ai" | "data-bi" | "automation";
    demoUrl?: string;
    githubUrl?: string;
    videoUrl?: string;
};

export const projectsData: Project[] = [
    {
        id: "certify-chain",
        title: "CertifyChain - Blockchain dApp",
        description: "A full-stack Web3 application for issuing and verifying student certificates on the blockchain using NFTs. Features Admin and Student Dashboards.",
        thumbnail: "/image.png",
        techStack: ["React 18", "Ethers.js", "Node.js", "MetaMask"],
        category: "web",
        githubUrl: "https://github.com/fatimaezzahrakasmi/CertifyChain---Blockchain-Student-Certificates",
        demoUrl: "https://vimeo.com/1170119369?share=copy&fl=sv&fe=ci",
    },
    {
        id: "driving-school-dashboard",
        title: "Driving School Management Dashboard",
        description: "A modern, responsive frontend dashboard designed for managing a driving school's daily operations. Includes user interfaces to track students, manage instructors, monitor vehicle maintenance, and view general school statistics.",
        thumbnail: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop",
        techStack: ["HTML5", "CSS3", "Boxicons", "UI/UX Design"],
        category: "web",
        githubUrl: "https://github.com/fatimaezzahrakasmi/Dashbord-location-cars",
    },
    {
        id: "site-support",
        title: "Site Support & IT Services",
        description: "A responsive, multi-page business website designed for IT support, consulting, and customer service. Features clean layouts, pricing tables, and contact forms.",
        thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
        techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
        category: "web",
        githubUrl: "https://github.com/fatimaezzahrakasmi/site-support",
        demoUrl: "#",
    },

    {
        id: "ai-ugc-kids-clothing-generator",
        title: "AI UGC Kids Clothing Ad Generator",
        description: "An AI-powered n8n workflow that analyzes clothing images using OpenAI Vision and generates highly stylized ads with Gemini via OpenRouter.",
        thumbnail: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=2070&auto=format&fit=crop",
        techStack: ["n8n", "OpenAI Vision", "Gemini API", "Google Drive"],
        category: "automation",
        githubUrl: "https://github.com/fatimaezzahrakasmi/n8n-workflows/tree/main/ai-ugc-kids-clothing-generator",
        demoUrl: "https://vimeo.com/1170000869?fl=ip&fe=ec",
    },
    {
        id: "nano-banana",
        title: "Cinematic Scene AI Image Generator",
        description: "Interactive workflow prompting Google Gemini LLM for creative cinematic scene expansion and rendering visuals via OpenRouter API.",
        thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop",
        techStack: ["n8n", "Google Gemini", "OpenRouter API"],
        category: "automation",
        githubUrl: "https://github.com/fatimaezzahrakasmi/n8n-workflows/tree/main/nano-banana",
        demoUrl: "#",
    },
    {
        id: "baby-podcast",
        title: "AI Baby Podcast Workflow",
        description: "Full end-to-end automation generating script, voice (ElevenLabs), host image (Runware), and final compiled video (Hedra), delivered to Telegram.",
        thumbnail: "https://images.unsplash.com/photo-1589483233159-40ad64d7df7f?q=80&w=2070&auto=format&fit=crop",
        techStack: ["n8n", "ElevenLabs", "Runware", "Hedra", "Telegram API"],
        category: "automation",
        githubUrl: "https://github.com/fatimaezzahrakasmi/n8n-workflows/tree/main/Baby-Podcast",
    },
    {
        id: "house-price-prediction",
        title: "House Price Prediction Model",
        description: "An end-to-end Machine Learning project to predict real estate prices. Features extensive data exploration, model tuning (MLP, SVM, Linear Regression), and a Flask/Flet web frontend.",
        thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop",
        techStack: ["Python", "scikit-learn", "Flask", "Flet", "Pandas"],
        category: "ai",
        githubUrl: "https://github.com/fatimaezzahrakasmi/House-Price-Prediction",
    },
    {
        id: "ai-assistant-chatbot",
        title: "AI Conversational Assistant",
        description: "A real-time conversational AI application powered by the Groq API (LLaMA 3). Features context-aware conversation history and SQLite message persistence with a clean web interface.",
        thumbnail: "https://images.unsplash.com/photo-1531287112431-15a6b014f35e?q=80&w=2070&auto=format&fit=crop",
        techStack: ["Python", "Flask", "Groq API", "SQLite", "HTML/CSS"],
        category: "ai",
        githubUrl: "https://github.com/fatimaezzahrakasmi/AI-Assistant",
    },
    {
        id: "lumina-ai-agentic-rag",
        title: "Lumina AI - Agentic RAG",
        description: "A full-stack Agentic RAG application with a premium Glassmorphic Dark Mode UI. Powered by OpenAI GPT-4o, LangChain, and Pinecone for intelligent knowledge base retrieval.",
        thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
        techStack: ["React", "Node.js", "LangChain", "Pinecone", "OpenAI"],
        category: "ai",
        githubUrl: "https://github.com/fatimaezzahrakasmi/Agentic-RAG",
    },
    {
        id: "real-time-digit-recognition",
        title: "Real-Time Digit Recognition",
        description: "An interactive computer vision pipeline that uses a webcam to track hand gestures, allowing you to draw numbers in the air and have a Neural Network predict them in real time.",
        thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop",
        techStack: ["Python", "OpenCV", "MediaPipe", "TensorFlow", "Keras"],
        category: "ai",
        githubUrl: "https://github.com/fatimaezzahrakasmi/Real-Time-Digit-Recognition",
        demoUrl: "#",
    },
    {
        id: "crypto-financial-analytics",
        title: "Crypto Financial Analytics Pipeline",
        description: "An end-to-end Business Intelligence solution for cryptocurrency market analysis. Features automated ETL pipelines using SSIS, a multi-dimensional Data Warehouse in SQL Server, and an advanced Power BI dashboard utilizing complex DAX measures.",
        thumbnail: "https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=2002&auto=format&fit=crop",
        techStack: ["Power BI", "SQL Server", "SSIS", "DAX", "Data Warehousing"],
        category: "data-bi",
        githubUrl: "https://github.com/fatimaezzahrakasmi/Crypto-Financial-Analytics",
    },
    {
        id: "stock-management-vba",
        title: "Stock Management & Automated Invoicing",
        description: "A professional business analytics solution built with Excel and VBA to manage the full lifecycle of retail operations, including dynamic inventory tracking, an integrated CRM, and automated PDF invoice generation pipelines.",
        thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2026&auto=format&fit=crop",
        techStack: ["Excel VBA", "Data Synchronisation", "CRM Integration", "Automation"],
        category: "data-bi",
        githubUrl: "https://github.com/fatimaezzahrakasmi/Stock-Inventory-Automation",
    },
];

export const projectCategories = [
    {
        id: "web",
        title: "Web & Applications",
        description: "Full-stack web applications, interactive interfaces, and scalable platforms.",
        color: "from-blue-500/20 to-purple-500/20",
        border: "group-hover:border-blue-500/50",
    },
    {
        id: "ai",
        title: "AI & Data Projects",
        description: "Machine learning pipelines, data analysis, and intelligent system integrations.",
        color: "from-emerald-500/20 to-teal-500/20",
        border: "group-hover:border-emerald-500/50",
    },
    {
        id: "data-bi",
        title: "Data Analytics & BI",
        description: "Business intelligence dashboards, ETL pipelines, and data reporting solutions.",
        color: "from-yellow-500/20 to-amber-500/20",
        border: "group-hover:border-yellow-500/50",
    },
    {
        id: "automation",
        title: "Automation & n8n",
        description: "Business logic automation, API integrations, and complex workflow systems.",
        color: "from-orange-500/20 to-red-500/20",
        border: "group-hover:border-orange-500/50",
    },
];
