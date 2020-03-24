import { h1, p, span, div, a, footer, small, nav, img } from 'markup-as-js';
import 'chota';
import './styles.css';

import Generator from './Generator';
import UsageHelper from './UsageHelper';

// const icongram = (icon: string) => `https://icongr.am/simple/${icon}.svg`;

const app = div({ class: "container"},
  nav({class: "nav"}, 
    h1({class: "nav-left"}, "Conversation Prompt Generator"),
    a(
      {
        class: "hide-xs button clear icon-only", 
        href: "https://github.com/tylermercer/conversation-prompt-generator", 
        target: "blank", 
        title: "View source on GitHub"
      }, 
      img({src: "https://icongr.am/feather/github.svg?size=20px&color=673299", alt: "GitHub"})
    ),
  ),  
  div({class: "row hero-container"}, 
    img({class: "hero col-6", src: "/images/undraw_connection.svg"}),
    div({class: "col-6"}, 
      p({}, 
        "In our current state of social isolation in response to COVID-19, many people are experiencing ",
        a(
          {
            href: "https://www.deseret.com/opinion/2020/3/22/21185578/coronavirus-covid-19-side-effect-social-distancing-isolation-quarantine-loneliness", 
            target: "blank"
          }, 
          "profound loneliness"
        ),
        ". This web app aims to help alleviate that, by providing questions to help you have meaningful conversations, even over a video call or text message conversation."
      ),
      p({}, "We recommend that both you and your friend answer the question."),
    ),  
  ),
  Generator(),
  p({}, 
    "The more prompts you go through, the more they'll require you to disclose. This reciprocal and escalating self-disclosure ", 
    a(
      {href: "https://journals.sagepub.com/doi/abs/10.1177/0146167297234003", target: "blank"}, 
      "has been shown"
    ), 
    " to lead to a feeling of closeness between conversational partners."
  ),
  UsageHelper(),
  footer({},
    small({class: "text-grey"},
      "Built with 💜 by ",
      a({href:"https://github.com/tylermercer", target: "blank"}, "Tyler Mercer"),
      ". ",
      span({class:"hide-sm hide-md hide-lg"}, 
        a(
          {href:"https://github.com/tylermercer/conversation-prompt-generator", target: "blank"}, 
          "Contribute on GitHub!"
        ),
        " "
      ),
      "Some prompts are adapted from ",
      a({href:"https://journals.sagepub.com/doi/abs/10.1177/0146167297234003", target: "blank"}, "this article"),
      "."
    ),
  ),
);

document.getElementById("app")?.appendChild(app);