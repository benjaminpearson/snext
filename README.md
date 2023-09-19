# snext

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) that emulates many of the benefits that [sku](https://github.com/seek-oss/sku) provides including [Braid Design System](https://seek-oss.github.io/braid-design-system/), [Vanilla Extract](https://vanilla-extract.style/), [Vocab](https://github.com/seek-oss/vocab), Localised routing, [Playwright](https://playwright.dev/), [ESLint](http://eslint.org/), [Prettier](https://prettier.io/), [Jest](https://facebook.github.io/jest/) and [Storybook](https://storybook.js.org/).

This is a proof of concept and an exploration of how the SEEK open source packages can be stitched together into the NextJS framework.

## Table of Contents

- [Preview Deployment](#preview-deployment)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
- [Testing](#testing)
- [Storybook](#storybook)
- [Next.js](#nextjs)

## Preview Deployment

You can access a live preview of this project at [https://snext-seven.vercel.app/](https://snext-seven.vercel.app/).

You can also see the Storybook live demo https://snext-storybook.vercel.app/

## Getting Started

These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following tools installed on your machine:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/) - Once you have node you can run `npm -g i pnpm`

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Testing

The project includes a combination of Playwright and React Testing Library for testing. Also Storybook interaction tests are used to exercise components

### Playwright

To spin up the Playwright interactive tests in a user friendly debug window, run the following:

```bash
pnpm test-e2e-ui
```

### Jest + React Testing Library (RTL)

Jest tests with RTL are also available for unit tests. You can run them in watch mode.

```bash
pnpm test-watch
```

### Storybook Interaction Tests

Interaction tests are a nice way to build tests for your components that sit with your storybook stories. You can run them in watch mode.

```bash
pnpm test-storybook-watch
```

## Storybook

Storybook has been implemenented to organise component creation and also setup for interaction and accessibility tests.

```bash
pnpm storybook
```

You can then access Storybook at [http://localhost:6006](http://localhost:6006) in your web browser.

To upgrade storybook on a regular basis, run the following:

```bash
pnpm dlx storybook@latest upgrade
```

### Resources

- [Integrate Next.js and Storybook](https://storybook.js.org/recipes/next)
- [Integrations / Addons](https://storybook.js.org/integrations)
- [Awesome Storybook](https://github.com/lauthieb/awesome-storybook)
- [Interaction testing with Storybook](https://storybook.js.org/blog/interaction-testing-with-storybook/)
- [Test runner addon](https://storybook.js.org/addons/@storybook/test-runner)
- [Accessibility addon](https://storybook.js.org/addons/@storybook/addon-a11y/)

## Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
