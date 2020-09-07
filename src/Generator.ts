import { p, div, button, blockquote, SimpleObservable } from 'markup-as-js';

import prompts from './prompts';
import CopyButton from './CopyButton';

const Generator = (): HTMLElement => {
  var remainingPrompts: string[] = [...prompts];

  var usedPrompts: string[] = [];

  const alert = p({class: "is-center full-width"}, div({ class: "alert", disabled: true}, "You've seen all the prompts! But you're more than welcome to go through them again. 🙂"));
  
  alert.style.display = "none";

  const getNextPrompt = ():string => {
    let index = Math.floor(Math.random() * Math.min(remainingPrompts.length, 3));
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
  
  const prompt = new SimpleObservable(getNextPrompt());
  
  return div({}, 
    blockquote({class: "main-text"}, prompt),
    alert,
    p({class: "row full-width is-center"},
      button(
        {
          class: "button primary",
          onclick: () => prompt.set(getNextPrompt())
        }, 
        "New Prompt"
      ),
      CopyButton(prompt)
    ),
  );
}

export default Generator;