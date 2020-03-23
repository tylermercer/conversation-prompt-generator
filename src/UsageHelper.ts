import { p, h3, details, summary } from "markup-as-js"

const UsageHelper = () => {
  return details({}, 
    summary({}, h3({},"How do I use this?")),
    p({}, "Usage Helper"),
  );
}

export default UsageHelper;