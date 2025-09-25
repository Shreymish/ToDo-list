# ToDo-list

>A small, delightful Todo list app built with React and Vite — perfect as a learning project or a portfolio piece.



## Highlights
- Add, edit, toggle complete, and delete tasks
- Minimal, componentized React code (hooks-based)
- Easy to extend with persistence (localStorage or API) and styling (Tailwind)

## Demo
- Local dev: start the app and open `http://localhost:3000`
- Add a screenshot or GIF to `public/screenshot.png` and it will render above.

## Features
- Create tasks using a single input
- Edit tasks (prompt-based edit UI)
- Toggle completed state (line-through for completed)
- Delete tasks

## Tech
- React 18
- Vite (dev tooling)
- (Optional) Tailwind CSS for utility styling

## Quick start

Prerequisites
- Node.js (>= 16) and npm

Install and run locally:

```bash
# install deps
npm install

# start dev server
npm start
```

Open `http://localhost:3000` in your browser. If you prefer the Vite convention, you can add a `dev` script to `package.json` (`"dev": "vite"`) and run `npm run dev`.

Run tests:

```bash
npm test -- --run
```

## Project layout
- `index.html` — app entry
- `src/` — React source
	- `App.jsx` — main app logic
	- `components/` — UI components (e.g. `Navbar.jsx`)
	- `index.css`, `App.css` — styles
- `public/` — static assets (place screenshots here)

## Roadmap / Improvements
- Persist todos to `localStorage` or a backend API
- Replace prompt-based edit with inline editing UI
- Add filters (All / Active / Completed)
- Add animations and keyboard accessibility
- Add unit tests for handlers

## Contributing
1. Fork the repo
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit: `git commit -m "Add feature"`
4. Push and open a PR

Please keep PRs small and focused. Include screenshots if UI changes.

## License
MIT — see the `LICENSE` file.

---
Made with ❤️ — Shrey Mishra 
