# Contributing to AstroVision AI

Thank you for your interest in contributing! 🙏

---

## Code of Conduct

Be respectful, inclusive, and constructive. This project welcomes contributors of all backgrounds.

---

## How to Contribute

### Reporting Bugs

1. Check [existing issues](https://github.com/YOUR_USERNAME/astrovision-ai/issues) first
2. Open a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Browser/OS information
   - Screenshots if applicable

### Suggesting Features

1. Open a GitHub issue with the `[Feature Request]` prefix
2. Describe the feature and its value to users
3. Include mockups or examples if possible

### Submitting Pull Requests

1. **Fork** the repository
2. **Create a branch**: `git checkout -b feature/your-feature-name`
3. **Make your changes** following the code style guide below
4. **Test** your changes in multiple browsers
5. **Commit**: `git commit -m "feat: add your feature description"`
6. **Push**: `git push origin feature/your-feature-name`
7. **Open a Pull Request** with a clear description of changes

---

## Code Style Guide

### HTML
- Use semantic HTML5 elements
- Include ARIA labels on interactive elements
- Keep IDs unique and descriptive

### CSS
- Use CSS custom properties (variables) defined in `:root`
- Follow BEM-inspired naming for new components
- Mobile-first responsive design

### JavaScript
- ES6+ syntax
- Use `const` and `let` (never `var`)
- Add comments for complex logic
- No hardcoded secrets or API keys

### Commit Messages (Conventional Commits)
```
feat: add new feature
fix: resolve bug
docs: update documentation
style: formatting changes
refactor: code restructuring
test: add or update tests
chore: maintenance tasks
```

---

## Development Setup

```bash
git clone https://github.com/YOUR_USERNAME/astrovision-ai.git
cd astrovision-ai
python -m http.server 8080
# Open http://localhost:8080
```

---

## Questions?

Open a GitHub Discussion or email: support@astrovision-ai.com
