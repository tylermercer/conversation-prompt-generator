import { button, img } from "markup-as-js";

const CopyButton = (node:HTMLElement) => {
  const copyToClipboard = (s:string):void => {
    navigator.clipboard.writeText(s);
  }

  return button(
    {
      class: "button icon-only outline primary",
      onclick: () => copyToClipboard(node.innerText),
      title: "Copy to clipboard"
    }, 
    img({src: "https://icongr.am/feather/copy.svg?size=16px&color=673299"}),
  );
}

export default CopyButton;