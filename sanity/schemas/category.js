export default {
  name: "category",
  type: "document",
  title: "Menu Category",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Category Name",
      valiation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      type: "image",
      title: "Image of  Category",
    },
  ],
};
