# Project Format

Use this template when creating new project showcases. Copy the structure below into a new `.mdx` file in the `content/projects/` directory.

---

## Template Structure

```mdx
---
title: "Your Project Name"
description: "A one-sentence description of the project (appears in project cards)."
longDescription: "A more detailed 2-3 sentence description explaining the project's purpose, impact, and key technologies used."
image: "/projects/your-project-image.svg" # or .png, .jpg
tags: ["Next.js", "TypeScript", "AI/ML", "PostgreSQL"] # List of technologies used
demoUrl: "https://your-demo-url.com" # Optional: link to live demo
githubUrl: "https://github.com/yourusername/project" # Optional: link to repository
featured: true # Set to true to show on homepage (max 3 featured projects)
---

## Project Overview

Provide a comprehensive overview of the project. Explain:
- The problem you were solving
- Why you built this project
- Who the target users are
- What makes it unique or innovative

## Key Features

Highlight the main features and capabilities:

- **Feature 1**: Description of the feature and its value
- **Feature 2**: Explain how users benefit from this
- **Feature 3**: Technical innovation or user experience improvement
- **Feature 4**: Integration or specialized functionality
- **Feature 5**: Performance or scalability aspects

## Technical Implementation

Dive into the technical details:

### Architecture

Describe the overall system architecture. Include:
- Frontend stack and key libraries
- Backend infrastructure
- Database design
- API structure

### Frontend

Explain frontend implementation:

```typescript
// Example code snippet
import { useState } from 'react';

const ExampleComponent = () => {
  const [data, setData] = useState([]);
  
  return (
    <div>
      {/* Component JSX */}
    </div>
  );
};
```

**Key Technologies:**
- Framework: Next.js 14 with App Router
- Styling: Tailwind CSS
- State Management: React Query
- UI Components: Custom component library

### Backend

Describe backend implementation:

```python
# Example API endpoint
from fastapi import FastAPI

app = FastAPI()

@app.get("/api/data")
async def get_data():
    return {"message": "Success"}
```

**Infrastructure:**
- API: FastAPI / Node.js / Express
- Database: PostgreSQL / MongoDB / Supabase
- Authentication: NextAuth / JWT
- Hosting: Vercel / AWS / Railway

### AI/ML Components

*If applicable, describe AI/ML implementation:*

- **Model Used**: GPT-4 / Custom fine-tuned model
- **Vector Database**: Pinecone / ChromaDB
- **Embeddings**: OpenAI / Sentence Transformers
- **Prompt Engineering**: Strategies used

```python
# Example ML code
from langchain import VectorStore

# Vector store initialization
vector_store = VectorStore(
    embeddings=embeddings_model,
    collection_name="documents"
)
```

## Challenges & Solutions

Discuss key challenges you faced and how you solved them:

### Challenge 1: [Problem Name]

**Problem**: Describe the challenge in detail.

**Solution**: Explain how you resolved it, including:
- The approach you took
- Technologies or techniques used
- Why this solution was effective

### Challenge 2: [Another Problem]

**Problem**: Another significant challenge.

**Solution**: Your resolution strategy.

## Results & Impact

Share measurable outcomes and impact:

- **Performance**: 50% faster than previous solution
- **User Engagement**: 10,000+ active users
- **Accuracy**: 95% model accuracy on test data
- **Scale**: Handles 1M+ requests per day
- **Business Impact**: Reduced costs by 30%

## Key Learnings

Reflect on what you learned:

1. **Technical Learning**: New technologies or patterns mastered
2. **Best Practices**: Development practices adopted
3. **Architecture Decisions**: Important architectural insights
4. **Performance Optimization**: Optimization strategies learned

## Future Enhancements

Outline planned improvements:

- [ ] Feature enhancement 1
- [ ] Integration with service X
- [ ] Performance optimization Y
- [ ] Mobile application development

## Screenshots / Demos

*If you have visual content, describe or link to it here*

![Project Screenshot](/projects/screenshot.png)

## Technologies Used

**Frontend:**
- React / Next.js
- TypeScript
- Tailwind CSS

**Backend:**
- Node.js / Python
- PostgreSQL / MongoDB
- Redis

**AI/ML:**
- OpenAI API
- LangChain
- Vector Database

**DevOps:**
- Docker
- GitHub Actions
- Vercel / AWS

## Links

- [Live Demo](https://your-demo-url.com) - Try the application
- [GitHub Repository](https://github.com/yourusername/project) - View source code
- [Documentation](https://docs.example.com) - Technical documentation
```

---

## Frontmatter Field Explanations

- **title**: Project name (required)
- **description**: Short one-liner for project cards (required)
- **longDescription**: Detailed 2-3 sentence description (required)
- **image**: Path to project image in `/public/projects/` (required)
- **tags**: Array of technology tags (required)
- **demoUrl**: Live demo URL (optional)
- **githubUrl**: GitHub repository URL (optional)
- **featured**: Set to `true` to display on homepage (optional, defaults to `false`)

## Content Guidelines

1. **Start with overview** - Explain the project's purpose and value
2. **List key features** - Highlight what makes the project special
3. **Include technical details** - Show your implementation approach
4. **Add code examples** - Demonstrate technical proficiency
5. **Share challenges** - Show problem-solving skills
6. **Quantify results** - Use metrics when possible
7. **Reflect on learnings** - Show growth and insights
8. **Plan for future** - Demonstrate forward thinking

## Image Requirements

- Place project images in `/public/projects/`
- Recommended size: 1200x630px (or 16:9 aspect ratio)
- Formats: SVG (preferred), PNG, or JPG
- Keep file size under 500KB for optimal performance

## Filename Convention

Save your file as: `lowercase-with-hyphens.mdx`

Example: `rag-chatbot.mdx`

## Featured Projects

Only 3 projects with `featured: true` will appear on the homepage. Choose your best work to feature prominently.
