import { h1, p, span, div, button, blockquote, a, footer, small } from 'markup-as-js';
import 'chota';
import './styles.css';

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
  h1({}, "Conversation Prompt Generator"),
  p({}, "In our current state of social isolation in response to COVID-19, many people are experiencing ",
  a(
    {
      href: "https://www.deseret.com/opinion/2020/3/22/21185578/coronavirus-covid-19-side-effect-social-distancing-isolation-quarantine-loneliness", 
      target: "blank"
    }, 
    "profound loneliness"
  ),
  ". This web app aims to alleviate that by providing questions to help you have meaningful conversations, even over a video call or text message conversation."),
  p({}, "We recommend that both you and your friend answer the question."),
  blockquote({class: "main-text"}, text),
  p({class: "row full-width is-center"},
    button(
      {
        class: "button primary",
        onclick: () => text.innerText = getNextPrompt()
      }, 
      "New Prompt"
    ),
  ),
  p({}, 
    "The more prompts you go through, the more they'll require you to disclose. This reciprocal and escalating self-disclosure ", 
    a(
      {href: "https://journals.sagepub.com/doi/abs/10.1177/0146167297234003", target: "blank"}, 
      "has been shown"
    ), 
    " to lead to a feeling of closeness between conversational partners."
  ),
  footer({},
    small({class: "text-grey"},
      "Built with 💜 by ",
      a({href:"https://github.com/tylermercer", target: "blank"}, "Tyler Mercer"),
      ".",
    ),
  ),
);

document.getElementById("app")?.appendChild(app);