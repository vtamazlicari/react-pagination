# Apps Discovery

A React + TypeScript app that lists applications from a remote API in a paginated table, with filtering by name and category.

## Features

- **Apps Discovery** (`/`): table of applications showing name, category and sources.
  - Filter by app name and category (inputs are debounced by 500 ms; changing a filter resets to page 1).
  - Pagination with a page size of 25 or 50.
  - Loading, empty and error states. The previous page stays on screen while the next one loads.
- **Apps Inventory** (`/inventory`) and **Settings** (`/settings`): placeholder pages, not implemented yet.
- 404 page for unknown routes.

## Tech stack

- React 19, React Router 8
- TanStack Query (with devtools) for fetching and caching
- Axios as the HTTP client
- SCSS modules for styling
- Vite for dev and build, Oxlint for linting

## API

Data comes from `PUT /app-service/get-apps` with this body:

```json
{ "pageNumber": 1, "pageSize": 25, "appName": "", "category": "" }
```

The response looks like `{ appRows: Application[], totalCount: number }`.

The base URL defaults to `https://recotest.pythonanywhere.com/api/v1`. To use a different one, set `VITE_API_URL` in a `.env` file.

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check and build for production
npm run preview  # serve the production build
npm run lint     # run oxlint
```

## Project structure

```
src/
  api/applications.ts           API call, types and query keys
  hooks/useApplicationsList.ts  TanStack Query hook with pagination math
  lib/                          Axios instance and QueryClient
  pages/Home/                   Discovery page: list, filters, paginator, navbar
  pages/Placeholder.tsx         Inventory and Settings stubs
  router.tsx                    Route definitions
  styles/_variables.scss        Shared SCSS variables (auto-injected by Vite)
```
