# snext

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) that emulates many of the benefits that [sku](https://github.com/seek-oss/sku) provides including [Braid Design System](https://seek-oss.github.io/braid-design-system/), [Vanilla Extract](https://vanilla-extract.style/), [Vocab](https://github.com/seek-oss/vocab), Localised routing, [Playwright](https://playwright.dev/), [ESLint](http://eslint.org/), [Prettier](https://prettier.io/), [Jest](https://facebook.github.io/jest/) and [Storybook](https://storybook.js.org/).

This is a proof of concept and an exploration of how the SEEK open source packages can be stitched together into the NextJS framework.

## Getting Started

```bash
pnpm i
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Storybook

Storybook has been implemenented to organise component creation and also setup for interaction and accessibility tests.

### Upgrading

- `pnpm dlx storybook@latest upgrade`

### Resources

- [Integrate Next.js and Storybook](https://storybook.js.org/recipes/next)
- [Integrations / Addons](https://storybook.js.org/integrations)
- [Awesome Storybook](https://github.com/lauthieb/awesome-storybook)
- [Interaction testing with Storybook](https://storybook.js.org/blog/interaction-testing-with-storybook/)
- [Test runner addon](https://storybook.js.org/addons/@storybook/test-runner)
- [Accessibility addon](https://storybook.js.org/addons/@storybook/addon-a11y/)
