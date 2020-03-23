import { p, h3, details, summary, blockquote, span, button, img } from "markup-as-js"
import CopyButton from "./CopyButton";

const messageTemplates: string[] = [
  "Hey! I'm trying to find ways to invest in my social relationships more. Do you want to do a video call sometime? I'd love to catch up. 🙂",
  "Hey, how are you? I'm stuck in social isolation right now and I'm trying to find ways to connect with people more. Want to catch up over a video call sometime? 💻",
  "This quarantine situation is really tough. Can I call you sometime? 📞 It'd be great to have someone to talk to.",
  "How are you doing in quarantine? It must be hard to be isolated from your friends. 😷 Want to do a video call and catch up sometime?"
]

const UsageHelper = (): HTMLElement => {

  let index = 0;

  const getNextTemplate = ():string => {
    index = (index + 1) % messageTemplates.length;
    return messageTemplates[index];
  }

  const template = span({}, getNextTemplate())

  return details({}, 
    summary({}, h3({},"How do I use this?")),
    p({}, "It's easy! Just reach out to a friend over social media or text and ask if you can catch up with them over video or phone call. For example:"),
    blockquote({}, template),
    p({class: "row full-width is-center"},
      button(
        {
          class: "button primary",
          onclick: () => template.innerText = getNextTemplate()
        }, 
        "New Template"
      ),
      CopyButton(template)
    ),
  );
}

export default UsageHelper;