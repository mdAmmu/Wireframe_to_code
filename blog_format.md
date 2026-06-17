# Blog Post Format

Use this template when creating new blog posts. Copy the structure below into a new `.mdx` file in the `content/blog/` directory.

---

## Template Structure

```mdx
---
title: "Your Blog Post Title Here"
excerpt: "A brief summary of your blog post (2-3 sentences). This appears in blog listings and social media previews."
date: "2026-03-08"
category: "AI/ML" # or "Web Development", "Tutorial", "Career", etc.
author: "Amin Popatiya"
published: true # Set to false to hide from public view
---

## Introduction

Start with an engaging introduction that hooks the reader and explains what they'll learn from this post. Keep it concise and relevant.

## Main Topic 1

Discuss your first major point. Break down complex concepts into digestible sections.

### Subtopic 1.1

Provide detailed explanations, examples, or code snippets.

```python
# Example code block
def example_function():
    return "Hello, World!"
```

### Subtopic 1.2

Continue with related information.

**Key Points:**
- Use bullet points for lists
- Keep them concise and actionable
- Highlight important takeaways

## Main Topic 2

Move to your second major point.

### Technical Implementation

If relevant, include technical details:

```typescript
// TypeScript example
interface Example {
  id: string;
  name: string;
}

const myExample: Example = {
  id: "123",
  name: "Sample"
};
```

## Real-World Example

Provide a practical example or case study to illustrate your points.

1. Step one of the process
2. Step two with details
3. Final step and outcome

## Best Practices

Share tips and recommendations:

- **Practice 1**: Description of why it's important
- **Practice 2**: Explain the benefit
- **Practice 3**: Provide context

## Common Pitfalls

Warn readers about common mistakes:

> **Warning**: Avoid doing X because it leads to Y.

## Conclusion

Summarize the key takeaways and provide next steps or additional resources.

### Key Takeaways

- Main point 1
- Main point 2
- Main point 3

## Additional Resources

- [Resource Link 1](https://example.com)
- [Resource Link 2](https://example.com)
```

---

## Frontmatter Field Explanations

- **title**: The main title of your blog post (required)
- **excerpt**: A short description for previews and SEO (required)
- **date**: Publication date in YYYY-MM-DD format (required)
- **category**: Category for filtering (required)
- **author**: Author name (defaults to "Anonymous" if omitted)
- **published**: Set to `false` to hide from listings (defaults to `true`)

## Content Guidelines

1. **Use headings** (##, ###) to structure your content
2. **Add code blocks** with language-specific syntax highlighting
3. **Include examples** to make concepts concrete
4. **Use lists** for better readability
5. **Add blockquotes** for important callouts
6. **Keep paragraphs** short and focused
7. **Link to resources** for further reading

## Filename Convention

Save your file as: `lowercase-with-hyphens.mdx`

Example: `building-rag-applications.mdx`
