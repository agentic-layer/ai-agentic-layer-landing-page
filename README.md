# AI Agentic Layer Landing Page

A modern, responsive landing page built with React, TypeScript, and Vite to showcase the AI Agentic Layer platform. It features a clean design, 3D animations with React Three Fiber, and is styled with Tailwind CSS.

----

## Table of Contents

  * [Development Workflow](#development-workflow)
  * [Local development setup](#local-development-setup)
  * [Configuration](#configuration)
  * [End-to-End (E2E) Testing](#end-to-end-e2e-testing)
  * [Testing Tools and Configuration](#testing-tools-and-configuration)
  * [Sample Data](#sample-data)
  * [Project Structure](#project-structure)


-----

## Development Workflow

This project has a specific workflow. You can make changes using two methods, but **all changes must be published manually** via a GitHub Action after they are merged into the `main` branch.

### Recommended Method: Use Lovable

The easiest way to contribute is through the Lovable platform. It provides a prompt-based interface to edit the codebase.

1.  Visit the **[Lovable Project](https://lovable.dev/projects/668f45db-f4ba-4461-b31f-97b70386a111)**.
2.  Start prompting to make your desired changes.
3.  Changes made via Lovable are **automatically committed** to this repository.

### Alternative Method: Local Development

For more complex changes, you can set up a local development environment.

*See the [Local development setup](#local-development-setup) and [Development Workflow](#development-workflow) sections below for detailed instructions.*

### Publishing Your Changes

After your changes are committed and pushed to the `main` branch (either from Lovable or your local environment), you must manually trigger the publishing workflow.

1.  Go to the **[Build and Publish to Github Pages](https://github.com/agentic-layer/ai-agentic-layer-landing-page/actions)** action.
2.  Run the workflow to deploy the changes to [agentic-layer.ai](https://www.agentic-layer.ai/).

## Local development setup

-----
**Prerequisites**

Before you begin, ensure you have the following tools installed on your system.

  * **Node.js**: `v18.0.0` or higher ([Download](https://nodejs.org/))
  * **npm**: `v8.0.0` or higher (comes bundled with Node.js)
  * **Git**: Latest version ([Download](https://git-scm.com/))
-----
Follow these steps to set up and run the project on your local machine.

1.  **Clone the Repository**

    ```bash
    git clone https://github.com/agentic-layer/ai-agentic-layer-landing-page.git
    cd ai-agentic-layer-landing-page
    ```

2.  **Install Dependencies**

    ```bash
    npm install
    ```

3.  **Start the Development Server**

    ```bash
    npm run dev
    ```

    Once started, the application will be available at **`http://localhost:5173`**. The development server supports hot reloading, so your changes will appear instantly.

-----

## Configuration

This project is a static landing page and **does not require any environment variables** or a `.env` file for its basic setup. All content is hardcoded within the React components located in the `src/components/sections/` directory.

-----

## End-to-End (E2E) Testing

**Note**: This project **currently does not have an E2E test suite** configured.

-----

## Testing Tools and Configuration

While there are no E2E tests, the project uses several tools to maintain code quality and consistency.

### Linting and Formatting

  * **Tool**: **ESLint** with TypeScript support and **Prettier** for code formatting.
  * **Configuration**: The rules are defined in `eslint.config.js`. Prettier is integrated to run with ESLint.
  * **Location**: Linter configurations are at the root of the project.
  * **Run Linter**:
    ```bash
    npm run lint
    ```

### Build Tools

  * **Tool**: **Vite** is used as the build tool and development server.
  * **Configuration**:
      * Vite configuration is in `vite.config.ts`.
      * TypeScript settings are defined across `tsconfig.json`, `tsconfig.app.json`, and `tsconfig.node.json`.

-----

## Sample Data

This is a static website, so it **does not require a database or data seeding scripts**. All content is managed directly within the codebase.

### Content Components

The page content is organized into the following components:

  * `src/components/sections/HeroSection.tsx`
  * `src/components/sections/BusinessBenefitsSection.tsx`
  * `src/components/sections/ArchitectureSection.tsx`
  * `src/components/sections/OpenSourceSection.tsx`

### Static Assets

  * **Images**: Located in `public/lovable-uploads/`
  * **Fonts**: Located in `public/fonts/`
  * **Other Assets**: Favicons and other static files are in the `public/` directory.

## Project Structure
```
src/
├── components/          # React components
│   ├── sections/        # Page sections
│   ├── ui/             # shadcn/ui components
│   └── ...             # Other components
├── contexts/           # React contexts
├── hooks/              # Custom React hooks
├── integrations/       # Third-party integrations
├── lib/                # Utility functions
└── pages/              # Page components
```
-----
