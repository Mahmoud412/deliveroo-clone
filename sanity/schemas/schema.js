// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Then we give our schema to the builder and provide the result to Sanity

import restaurant from "./restaurant";
import category from "./category";
import dish from "./dish";
import featured from "./featured";
export default createSchema({
  name: "default",
  types: schemaTypes.concat([restaurant, category, dish, featured]),
});
