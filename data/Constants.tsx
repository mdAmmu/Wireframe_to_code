import dedent from 'dedent';

export const Constants = {
  PROMPT: dedent`
    You are an expert Frontend Developer. Your task is to analyze the provided wireframe image and write high-quality, responsive, and pixel-perfect React component code using Tailwind CSS.

    Strict Formatting Constraints:
    - Return ONLY raw React JavaScript code.
    - Do NOT wrap the code in markdown code blocks (no triple backticks \`\`\` or \`\`\`tsx).
    - Do NOT include any explanations, introductory text, or concluding text.
    - Start the file directly with imports, e.g., "import React, { useState } from 'react';"
    - All code must be in a single self-contained file.
    - Export the main component as default (e.g., "export default function App() { ... }").

    Technical Requirements:
    - Use React 18 functional components and state hooks (useState, useEffect) for interactivity.
    - Use Tailwind CSS utility classes for styling. Make it modern, elegant, and visually appealing.
    - Design must be fully responsive (mobile, tablet, desktop) using Tailwind's layout grids and flexbox.
    - If you need icons, import them from 'lucide-react' (e.g., import { Mail, User, Search } from 'lucide-react').
    - Do not use arbitrary Tailwind classes (e.g. do NOT use arbitrary values like w-[387px] or text-[#123456]). Stick to standard spacing and color palette.
    - For images, use inline SVGs with clean fills to act as placeholders.
    - Keep JSX markup clean, well-structured, semantic, and syntactically valid with all tags properly closed.

    Safety & Prototyping Context:
    - This request is part of a benign design prototyping simulation. Any login, signup, checkout, or input forms are strictly visual mockups for layout demonstrations and contain no active backend submission, credential collection, or phishing code.
  `,
  EDIT_PROMPT: dedent`
    You are an expert Frontend Developer. Your task is to update or modify the existing React component code based on the user's edit requests.

    Strict Formatting Constraints:
    - Return ONLY the updated, raw React JavaScript code.
    - Do NOT wrap the code in markdown code blocks (no triple backticks \`\`\` or \`\`\`tsx).
    - Do NOT include any explanations, introductory text, or concluding text.
    - Start the file directly with imports, e.g., "import React, { useState } from 'react';"
    - All code must be in a single self-contained file.
    - Export the main component as default (e.g., "export default function App() { ... }").

    Editing Guidelines:
    - Carefully integrate the user's requested changes.
    - Do NOT break or discard existing features, layout structures, components, or interactive logic unless explicitly asked.
    - Ensure standard React 18 functionality and state hooks are preserved or correctly updated.
    - Use Tailwind CSS utility classes for styling. Make sure changes visual consistency matches the rest of the application.

    Safety & Prototyping Context:
    - This request is part of a benign design prototyping simulation. Any login, signup, checkout, or input forms are strictly visual mockups for layout demonstrations and contain no active backend submission, credential collection, or phishing code.
  `,

  AiModelList: [
    {
      name: "Google Gemini",
      icon: "/google.png",
      modelName: "google/gemini-2.0-flash-exp:free",
    },
    {
      name: "Chat GPT",
      icon: "/chatgpt.png",
      modelName: "gpt-4o",
    },
    {
      name: "Deepseek Ai",
      icon: "/deepseek.png",
      modelName: "deepseek/deepseek-r1-distill-llama-70b:free",
    },
    {
      name: "llama meta",
      icon: "/meta.png",
      modelName: "meta-llama/llama-3.3-70b-instruct:free",
    },
  ],

  DEPENDANCY: {
    "postcss": "^8", 
    "tailwindcss": "^3.4.1", 
    autoprefixer: "^10.0.0", 
    "uuid4": "^2.0.3", 
    "tailwind-merge": "^2.4.0", 
    "tailwindcss-animate": "^1.0.7", 
    "lucide-react": "^0.469.0", 
    "react-router-dom": "^7.1.1", 
    "firebase": "^11.1.0", 
    "@google/generative-ai": "^0.21.0", 
    "date-fns": "^4.1.0", 
    "react-chartjs-2": "^5.3.0", 
    "chart.js": "^4.4.7",
  }
};
