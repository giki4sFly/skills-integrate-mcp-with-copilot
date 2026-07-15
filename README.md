# Integrate MCP with Copilot

<img src="https://octodex.github.com/images/Professortocat_v2.png" align="right" height="200px" />

Hey giki4sFly!

Mona here. I'm done preparing your exercise. Hope you enjoy! 💚

Remember, it's self-paced so feel free to take a break! ☕️

[![](https://img.shields.io/badge/Go%20to%20Exercise-%E2%86%92-1f883d?style=for-the-badge&logo=github&labelColor=197935)](https://github.com/giki4sFly/skills-integrate-mcp-with-copilot/issues/1)

---

## Environment Setup

Before running the application, you'll need to set up your environment variables:

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and fill in any required values:
   - `DATABASE_URL` - Your database connection string (optional for local dev with SQLite)
   - `APP_JWT_SECRET` - A secure random string for JWT token signing
   - `APP_JWT_EXPIRATION_MS` - Token expiration time in milliseconds

**Important:** Never commit `.env` to version control. The `.gitignore` file already excludes it to protect your secrets.

---

&copy; 2025 GitHub &bull; [Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md) &bull; [MIT License](https://gh.io/mit)

