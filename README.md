# Frontend Engineer Test

## 1. Introduction

This is a test developed in React + Next.js

## 2. Tech stack

Project developed in Next.js using Typescript
Styled-Components was used for styling.
Project configured with Eslint, Prettier and Husky for code standardization
For testing, Jest was configured to cover 90%

## 2. Improvements

Used Next.js in order to serve the static html improving the loading of the content and also to cache all requests from the planets and people apis on the server (15 requests are called in build time and updated every 60s, or according to the configuration in next, if necessary), so the client handles only the cached arrays and there is no need to make calls, making the project faster for the end user.

A filter by name was added in the select of Planets

Optimized images with the next image component

Project tested on the Google Page Speed platform with the following results:

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
