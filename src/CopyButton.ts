import { button, img, Observable } from "markup-as-js";

const CopyButton = (text:Observable<string>) => {
  let toCopy = "";
  text.subscribe(v => toCopy = v);
  
  return button(
    {
      class: "button icon-only outline primary",
      onclick: () => navigator.clipboard.writeText(toCopy),
      title: "Copy to clipboard"
    }, 
    img({src: "https://icongr.am/feather/copy.svg?size=16px&color=673299"}),
  );
}

export default CopyButton;