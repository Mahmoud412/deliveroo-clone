export default {
  name: "featured",
  type: "document",
  title: "Featured Menu categories",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Featured Category Name",
      valiation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Image of  Category",
      valiation: (Rule) => Rule.required(),
    },
    {
      name: "restaurants",
      type: "array",
      title: "Restaurants",
      of: [{ type: "reference", to: [{ type: "restaurant" }] }],
    },
  ],
};
