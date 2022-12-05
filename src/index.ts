import { createPlugin } from "sanity";
import messageTemplate from "./messageTemplate";

export const allTemplatesQuery = `*[_type == "messageTemplate"]`;
export const templateQuery = `*[_type == "messageTemplate" && slug.current == $slug][0]`;

export const messageTemplatePlugin = createPlugin((config) => {
  return {
    name: "stacc-sanity-plugin-message-templates",
    schema: {
      types: [messageTemplate],
    },
  };
});
