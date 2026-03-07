import dedent from 'dedent';

export const Constants = {
  PROMPT: dedent`
    
  Do NOT start the code with jsx, tsx, javascript, or typescript.

  start the code with jsx or typescript.

  Do NOT use triple backticks or any markdown formatting.

  Only return plain React JSX code starting with
  
  Just start with import import React, { useState } from 'react'; 

  and also make sure not to use the any other libraries for font and other things which is not import.
  
  the code should be responsive for mobile and desktop. 

  Do not start the code by tell "I m sorry I cant assist with that" or javascript.

  Think carefully, step by step, about how to recreate the UI design from the wireframe image using React and Tailwind CSS.

Create a full React component for the layout or screen shown in the wireframe, ensuring every element is included.

Feel free to include multiple components in the same file if necessary, but keep them all in one React file.

Clearly describe and structure where everything appears in the UI so the code visually matches the wireframe exactly.

Pay close attention to background color, text color, font size, spacing, and layout when styling with Tailwind.

If the input is just a wireframe with no color, apply a professional color palette and assign visually appropriate background, text, and accent colors.

Include every visible part of the screenshot: text, images, buttons, headers, footers, cards, icons, forms, and any decorative or structural element.

Use the exact text shown in the screenshot or wireframe for all UI elements including headings, buttons, and labels.

Ensure the final rendered website looks pixel-perfect and visually identical to the screenshot layout and structure.

Pay detailed attention again to background color, text color, font size, padding, spacing, and alignment in all sections.

Code every visible part of the image or description, including all buttons, forms, links, icons, headings, and layout containers.

Use the exact text content from the wireframe description for headings, labels, paragraphs, and calls to action.

Do not add any comments in the code like <!-- Add other navigation here --> or similar placeholders.

Repeat visual elements such as cards or list items as needed to match the layout shown in the wireframe.

For all image placeholders, use inline SVGs with solid white, gray, or black fills to match wireframe block images.

Ensure the React UI is interactive where applicable—for example, working buttons, toggles, or form inputs using useState.

If you use any React hooks like useState, useEffect, etc., make sure they are correctly imported from 'react'.

Use TypeScript as the language for all React components—ensure proper typing for props and state.

Use Tailwind CSS utility classes only. Do not use custom styles or arbitrary values like mt-[17px] or text-[#123456].

Use Tailwind's spacing utilities (p-4, mt-6, gap-8, etc.) to style the layout, and ensure responsive alignment and clean visual structure.

Return only the complete React component code starting with the import statements, with no extra text or explanations before or after.

  Return one code block only, starting directly with import React… (no ''' fence or language tag).
  All code in plain JSX (no TypeScript); React 18 functional components.

Keep everything in one file; export the main component default.

No comments and no external files or icon libraries.

🎨 UI & Styling
Recreate every visible element with the exact text shown.

If the wireframe is grayscale, apply a clean, accessible color palette.

Use Tailwind utilities only (max-w, p-*, m-*, gap-*, space-*, text-*, bg-*, etc.); no arbitrary values.

Wrap the layout in className="max-w-7xl mx-auto px-4".

Provide inline SVG placeholders (white/gray/black) for images.

Add hover: / focus: states and optional dark: variants.

📐 Layout & Responsiveness
Match spacing, font sizes, and alignment exactly.

Stack columns on sm; use flex/grid for md and lg.

Repeat cards or list items as needed; when mapping, give each item a unique key.

⚙️ Interactivity
Implement basic logic (useState, onClick, form handlers) for buttons, toggles, inputs, modals.

♿ Accessibility
Use semantic tags (header, main, section, footer).

All images get alt, interactive elements get proper aria-* and keyboard focus.

✅ Error-Proofing Checklist
JSX is wrapped in a single root element.

No unclosed tags, dangling commas, or unmatched brackets.

Tailwind class names are valid (gap-6, not gap6).



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
