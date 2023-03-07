# Frontend Engineer Test

## 1. Introduction

Our goal with this project is to create a highly optimized and responsive website that guarantees a fast and consistent browsing experience for users. To do this, we will use Next.js, a web development framework based on React, which allows us to use concepts such as SSR (Server-Side Rendering) and SSG (Static Site Generation) to create highly performant pages.

To ensure layout fidelity, we will use tools such as Styled-componts, which allows us to encapsulate the CSS of each component in a single scope, avoiding conflicts with styles of other components. In addition, we will use linting tools such as ESLint and Prettier to maintain a consistent code standard and avoid formatting errors.

For optimization, we will use techniques such as lazy loading, which loads images and components only when necessary, and image compression, which reduces file size to speed up page loading time. In addition, we will use a Content Delivery Network (CDN), which stores website static files on servers distributed around the world, allowing content to be delivered more quickly to users.

With this project, we hope to deliver a high-quality website that offers users a fast, consistent, and attractive browsing experience. Thank you for the opportunity to present our project, and we are available for any questions or further clarifications.

## 2. Tech stack

Project developed with Next.js using Typescript.

Styled-Components for styling.

Project configured with Eslint, Prettier and Husky for code standardization.

For testing, Jest was configured to cover 90%.

## 2. Improvements

Used Next.js in order to serve the static html improving the loading of the content and also to cache all requests from the planets and people apis on the server (15 requests are called in build time and updated every 60s, or according to the configuration in next, if necessary), so the client handles only the cached arrays and there is no need to make calls, making the project faster for the end user.

A filter by name was added in the select of Planets.

Optimized images with the next image component.

Project tested on the Google Page Speed platform with the following results:
[link](https://pagespeed.web.dev/report?url=https%3A%2F%2Fcloudwalk-ten.vercel.app%2F)

![Google page Speed](https://i.imgur.com/AAEg6mS.png)

## Getting Started

```bash
npm i
npm run dev
```

## For building (production)

```bash
npm run build
npm run start
```

## Tests

```bash
npm run test
```

## Demo

[Link for demo](https://cloudwalk-ten.vercel.app/)
