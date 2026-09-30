import { defineField, defineType } from "sanity";

export const galleryItemSchema = defineType({
  name: "galleryItem",
  title: "Gallery Photo",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title / Caption",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Photograph",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: "alt",
          title: "Alternative Text",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "location",
      title: "Location / Place",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Mountains", value: "Mountains" },
          { title: "Spiritual", value: "Spiritual" },
          { title: "Beaches", value: "Beaches" },
          { title: "Group Trips", value: "Group Trips" },
          { title: "Road Trips", value: "Road Trips" },
          { title: "People", value: "People" },
        ],
      },
      initialValue: "Mountains",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "aspectRatio",
      title: "Card Aspect Ratio",
      type: "string",
      options: {
        list: [
          { title: "Standard / Square", value: "square" },
          { title: "Tall / Portrait", value: "tall" },
          { title: "Wide / Landscape", value: "wide" },
        ],
      },
      initialValue: "square",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first (e.g. 1, 2, 3)",
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "location",
      media: "image",
    },
  },
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [
        { field: "order", direction: "asc" },
        { field: "_createdAt", direction: "desc" },
      ],
    },
  ],
});
