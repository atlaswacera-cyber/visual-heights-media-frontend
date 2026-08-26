# Visual Heights Media

A responsive React frontend for Visual Heights Media. It presents the studio's
portfolio, provides a Pexels-powered visual-research experience, and includes a
frontend-only client dashboard demonstration.

## Features

- Public homepage with services, portfolio, and about sections
- Client-side routes for the homepage, inspiration search, dashboard, and 404 page
- Pexels photo and video search with loading, error, empty, and Show More states
- Simulated browser-only sign-in and saved-inspiration dashboard
- Responsive layouts, including a 320px mobile layout

## Technologies

- React
- Vite
- React Router
- Pexels API
- CSS with BEM-style component class names

## Run locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a local environment file from the example:

   ```bash
   cp .env.example .env
   ```

3. Add your Pexels API key to `.env`:

   ```text
   VITE_PEXELS_API_KEY=your_pexels_api_key_here
   ```

   Never commit `.env` or your API key.

4. Start the development server:

   ```bash
   npm run dev
   ```

## Quality checks

```bash
npm run lint
npm run build
```

## Deployment

The project deploys to GitHub Pages through the GitHub Actions workflow in
`.github/workflows/deploy.yml`. Before the first deployment, add a repository
Actions secret named `VITE_PEXELS_API_KEY` with your Pexels API key. The key is
used only during the Pages build and is never committed to this repository.

## Links

- Deployed project: https://atlaswacera-cyber.github.io/visual-heights-media-frontend/

- Project pitch video: [Watch the project pitch on Loom](https://www.loom.com/share/04f5a7b9d7274b0c8cddfaa33804545b)
