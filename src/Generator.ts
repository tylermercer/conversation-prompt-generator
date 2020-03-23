import { p, span, div, button, blockquote } from 'markup-as-js';

import prompts from './prompts';

const Generator = () => {
  var remainingPrompts: string[] = [...prompts];

  var usedPrompts: string[] = [];

  const alert = p({class: "is-center full-width"}, div({ class: "alert", disabled: true}, "You've seen all the prompts! But you're more than welcome to go through them again. 🙂"));
  
  alert.style.display = "none";

  const getNextPrompt = ():string => {
    let index = Math.floor(Math.random() * Math.min(remainingPrompts.length, 5));
    let prompt = remainingPrompts[index];
    if (remainingPrompts.length <= 1) {
      alert.style.display = "";
      remainingPrompts = [...prompts];
    }
    else {
      remainingPrompts = [...remainingPrompts.slice(0, index), ...remainingPrompts.slice(index + 1)];
    }
    usedPrompts = [...usedPrompts, prompt];
    return prompt;
  }
  
  const text = span({}, getNextPrompt());
  
  return div({}, 
    blockquote({class: "main-text"}, text),
    alert,
    p({class: "row full-width is-center"},
      button(
        {
          class: "button primary",
          onclick: () => text.innerText = getNextPrompt()
        }, 
        "New Prompt"
      ),
    ),
  );
}

export default Generator;