# Git Workflow

This repository uses a simple Git flow based on two protected branches:

- `main`: stable production branch used for final releases.
- `dev`: integration branch used for feature work before release.

## Team

- Lucas: `@lucaszebre`
- Pauline: `@Paulineente`

## Branch Rules

Each issue must have its own branch created from `dev`.

Branch naming format:

```text
feature/issue-XX-short-description
```

Example:

```text
feature/issue-01-init-react-project
```

## Pull Request Flow

1. Create or assign a GitHub issue.
2. Create a branch from `dev`.
3. Make signed commits only.
4. Open a pull request into `dev`.
5. Wait for the lint workflow to pass.
6. Merge the pull request into `dev`.

At the end of a release cycle, `dev` is merged into `main` through a pull request.

## Release Flow

Releases are created from `main` only.

Recommended versions:

```text
v0.1.0 - initial React setup
v0.2.0 - lint, hook and CI setup
v0.3.0 - documentation and templates
v1.0.0 - final soutenance release
```

Create a signed release tag:

```bash
git checkout main
git pull origin main
git tag -s v1.0.0 -m "Release v1.0.0"
git push origin v1.0.0
gh release create v1.0.0 --title "Release v1.0.0" --notes "Final soutenance release."
```

If signed tags are not available, use a regular annotated tag:

```bash
git tag v1.0.0 -m "Release v1.0.0"
```

## Daily Commands

Start a new issue:

```bash
git checkout dev
git pull origin dev
git checkout -b feature/issue-XX-short-description
```

Push a branch:

```bash
git push -u origin feature/issue-XX-short-description
```

Create a pull request:

```bash
gh pr create --base dev --head feature/issue-XX-short-description
```
