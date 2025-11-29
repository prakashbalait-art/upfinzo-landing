# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



## Features

- Fully responsive UI (Desktop → Tablet → Mobile)
- Smooth scroll navigation linked to menu sections
- Redux Toolkit for global menu and content handling
- Auto-scrolling card sliders with pause-on-hover
- Structured component-based layout (Header, Sections, Footer)
- Sticky navigation bar with mobile toggle
- Reusable Button component
- Scalable and maintainable folder structure
- Cross-browser compatible styling


## Tech Stack

| Category | Technology |
|---------|------------|
| Framework | **React (Vite Setup)** |
| Language | **React** |
| State Management | **Redux Toolkit** |
| Styling | **SCSS Modules** |
| Icons | **React Icons** |
| Animation | CSS keyframes + scroll behavior |
| Build Tool | Vite |
| Package Manager | npm |

## Project Structure

src/
├─ assets/ # images, logo, backgrounds
├─ components/
│ ├─ common/ # reusable UI elements (Buttons etc.)
│ ├─ layout/ # Header, Footer, Layout wrapper
│ └─ sections/ # Page sections (Section1 - Section7)
│
├─ store/
│ ├─ slices/ # Redux slices (menuSlice, sectionSlice)
│ └─ services/ # API simulation and async thunks
│
├─ styles/
│ ├─ base/ # reset, typography
│ ├─ layout/ # header and footer styles
│ └─ utils/ # variables, mixins
│
├─ App.jsx
└─ main.jsx

## Install dependencies

npm install


## Start Local Development

npm run dev


## Data & Redux Flow

Menu and structured content are handled using:

    -> configureStore()

    -> createSlice()

    -> createAsyncThunk()

    -> Reducers with loading state tracking