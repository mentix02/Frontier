import React, { ReactNode } from "react";

import { Card } from "../store/cards/types";

import reactLogo from "../images/react.svg";
import reduxLogo from "../images/redux.svg";
import routerLogo from "../images/router.svg";
import netlifyLogo from "../images/netlify.svg";
import materialLogo from "../images/materialui.svg";
import typescriptLogo from "../images/typescript.svg";

const genCard = (
  url: string,
  title: string,
  thumbnail: string,
  description: NonNullable<ReactNode>
): Card => ({
  url,
  title,
  thumbnail,
  description,
});

export const getCards = async (): Promise<Card[]> => {
  let data: Card[] = [
    genCard(
      "https://reactjs.org",
      "React",
      reactLogo,
      <>
        A <del>JavaScript</del> TypeScript library for building user interfaces.
      </>
    ),
    genCard(
      "https://redux.js.org/",
      "Redux",
      reduxLogo,
      <>
        A predictable state container for <del>JavaScript</del> TypeScript apps.
      </>
    ),
    genCard(
      "https://material-ui.com/",
      "Material UI",
      materialLogo,
      <>React components for faster and easier web development.</>
    ),
    genCard(
      "https://www.typescriptlang.org/",
      "TypeScript",
      typescriptLogo,
      <>A strongly typed objected, oriented superset of JavaScript.</>
    ),
    genCard(
      "https://reactrouter.com/web/guides/quick-start",
      "React Router DOM",
      routerLogo,
      <>Declarative routing for React.</>
    ),
    genCard(
      "https://www.netlify.com/",
      "Netlify",
      netlifyLogo,
      <>An all-in-one platform for automating modern web projects.</>
    ),
  ];
  await new Promise((r) => setTimeout(r, 1000));
  return data;
};
