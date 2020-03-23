import { h1, p, span, div, button, blockquote } from 'markup-as-js';
import './styles.css';
import 'chota';

import prompts from './prompts';

// const icongram = (icon: string) => `https://icongr.am/simple/${icon}.svg`;

var remainingPrompts: string[] = [...prompts];
var usedPrompts: string[] = [];

const getNextPrompt = ():string => {
  let index = Math.floor(Math.random() * Math.min(remainingPrompts.length, 5));
  let prompt = remainingPrompts[index];
  remainingPrompts = remainingPrompts.length > 1 ? [...remainingPrompts.slice(0, index), ...remainingPrompts.slice(index + 1)] : [...prompts];
  usedPrompts = [...usedPrompts, prompt];
  return prompt;
}

const text = span({}, getNextPrompt());

const app = div({ class: "container"},
  h1({}, "Conversation Prompts"),
  p({}, "In our current state of social isolation in response to COVID-19, many people are having a hard time finding meaningful social interaction. This web app aims to alleviate that by providing questions you can use to prompt meaningful conversations, even over a video call or text message conversation."),
  blockquote({class: "main-text"}, text),
  div({},
    button(
      {
        class: "button primary",
        onclick: () => text.innerText = getNextPrompt()
      }, 
      "New Prompt"
    ),
  ),
);

document.getElementById("app")?.appendChild(app);