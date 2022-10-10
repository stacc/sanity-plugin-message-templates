export default {
  type: "document",
  name: "messageTemplate",
  title: "Message Templates",
  fields: [
    {
      type: "string",
      name: "title",
      title: "Title",
    },
    {
      type: "slug",
      name: "slug",
      title: "Slug",
      options: {
        source: "title",
      },
    },
    {
      title: "Type of message",
      name: "typeOfMessage",
      type: "string",
      options: {
        list: [
          { title: "E-Mail", value: "email" },
          { title: "SMS", value: "sms" },
        ],
      },
    },
    {
      type: "text",
      name: "subject",
      title: "Subject",
    },
    {
      type: "array",
      name: "body",
      title: "Body",
      of: [{ type: "block" }],
      hidden: ({ parent }: { parent: any }) => parent?.typeOfMessage === "sms",
    },
  ],
};
