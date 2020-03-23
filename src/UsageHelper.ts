import { div, p, h3 } from "markup-as-js"

const UsageHelper = () => {
  return div({}, 
    h3({}, "How do I use this?"),
    p({}, "Usage Helper"),
  );
}

export default UsageHelper;