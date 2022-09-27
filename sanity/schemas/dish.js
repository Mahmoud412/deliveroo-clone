export default {
  name: "dish",
  type: "document",
  title: "Dish",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name of dish",
      valiation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Image of  Category",
      valiation: (Rule) => Rule.required(),
    },
    {
      name: "price",
      type: "number",
      title: "Price of the dish GBP",
    },
    {
      name: "image",
      type: "image",
      title: "Image of the Dish",
    },
  ],
};
