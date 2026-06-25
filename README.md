# Release Pilot

Release Pilot is a React and Vite project created for the ESGI Git soutenance. The application is used as a support project to demonstrate a complete GitHub workflow: issues, feature branches, pull requests, signed commits, lint checks, GitHub Actions, projects, protected branches, and releases.

## Team

- Lucas Zebre: [@lucaszebre](https://github.com/lucaszebre)
- Pauline Ente: [@Paulineente](https://github.com/Paulineente)

## Project Links

- Repository: <https://github.com/lucaszebre/github-esgi-iw>
- GitHub Project: <https://github.com/users/lucaszebre/projects/8>
- First release: <https://github.com/lucaszebre/github-esgi-iw/releases/tag/v0.1.0>

## Requirements

- Node.js 20 or later
- npm
- Git

## Installation

```bash
npm install
```

## Available Scripts

Start the development server:

```bash
npm run dev
```

Run the linter:

```bash
npm run lint
```

Build the production version:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Git Workflow

The repository uses two main branches:

- `main`: stable branch used for releases.
- `dev`: integration branch used for feature work.

Each task follows this structure:

```text
1 issue = 1 branch = 1 pull request
```

Feature branches are created from `dev` and use this naming format:

```text
feature/issue-XX-short-description
```

Example:

```text
feature/issue-07-write-readme
```

Pull requests target `dev`. At release time, `dev` is merged into `main` through a release pull request.

More details are available in [`docs/git-workflow.md`](docs/git-workflow.md).

## Code Quality

The project uses ESLint to check JavaScript and React code.

Local command:

```bash
npm run lint
```

The same command is also executed in GitHub Actions on pushes and pull requests.

## Releases

Releases are created from `main` with Git tags.

Current release plan:

- `v0.1.0`: React/Vite setup, ESLint, lint script, and pre-commit hook documentation.
- `v0.2.0`: GitHub Actions, README, project documentation, and repository hygiene.
- `v1.0.0`: final soutenance version.

## Signed Commits

All commits must be signed. The repository also contains `.git_allowed_signers` to help verify SSH signatures locally with:

```bash
git log --show-signature
```

## Contribution

Contribution rules are documented in [`CONTRIBUTING.md`](CONTRIBUTING.md).
