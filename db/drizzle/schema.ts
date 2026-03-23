import {
  boolean,
  index,
  integer,
  pgEnum,
  pgTable,
  primaryKey,
  text,
  timestamp,
  uniqueIndex,
  uuid,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const userRoleEnum = pgEnum("user_role", ["admin", "editor", "viewer"]);
export const curationStatusEnum = pgEnum("curation_status", [
  "draft",
  "published",
  "archived",
]);
export const messageStatusEnum = pgEnum("message_status", [
  "new",
  "read",
  "replied",
  "archived",
]);

export const users = pgTable(
  "users",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    email: text("email").notNull(),
    name: text("name").notNull(),
    role: userRoleEnum("role").default("viewer").notNull(),
    passwordHash: text("password_hash"),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => ({
    emailUnique: uniqueIndex("users_email_unique").on(table.email),
  })
);

export const curations = pgTable(
  "curations",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    title: text("title").notNull(),
    slug: text("slug").notNull(),
    coverImageUrl: text("cover_image_url").notNull(),
    description: text("description"),
    status: curationStatusEnum("status").default("draft").notNull(),
    createdBy: uuid("created_by")
      .notNull()
      .references(() => users.id, { onDelete: "restrict" }),
    publishedAt: timestamp("published_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => ({
    slugUnique: uniqueIndex("curations_slug_unique").on(table.slug),
    statusIdx: index("idx_curations_status").on(table.status),
    createdByIdx: index("idx_curations_created_by").on(table.createdBy),
  })
);

export const curationItems = pgTable(
  "curation_items",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    curationId: uuid("curation_id")
      .notNull()
      .references(() => curations.id, { onDelete: "cascade" }),
    title: text("title").notNull(),
    content: text("content"),
    imageUrl: text("image_url"),
    linkUrl: text("link_url"),
    sortOrder: integer("sort_order").default(0).notNull(),
    isVisible: boolean("is_visible").default(true).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => ({
    curationSortIdx: index("idx_curation_items_curation_sort").on(
      table.curationId,
      table.sortOrder
    ),
  })
);

export const messages = pgTable(
  "messages",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    subject: text("subject"),
    message: text("message").notNull(),
    status: messageStatusEnum("status").default("new").notNull(),
    assignedTo: uuid("assigned_to").references(() => users.id, { onDelete: "set null" }),
    repliedAt: timestamp("replied_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => ({
    statusIdx: index("idx_messages_status").on(table.status),
    assignedToIdx: index("idx_messages_assigned_to").on(table.assignedTo),
  })
);

export const tags = pgTable(
  "tags",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    name: text("name").notNull(),
    slug: text("slug").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => ({
    nameUnique: uniqueIndex("tags_name_unique").on(table.name),
    slugUnique: uniqueIndex("tags_slug_unique").on(table.slug),
  })
);

export const curationTags = pgTable(
  "curation_tags",
  {
    curationId: uuid("curation_id")
      .notNull()
      .references(() => curations.id, { onDelete: "cascade" }),
    tagId: uuid("tag_id")
      .notNull()
      .references(() => tags.id, { onDelete: "cascade" }),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.curationId, table.tagId] }),
  })
);

export const usersRelations = relations(users, ({ many }) => ({
  createdCurations: many(curations),
  assignedMessages: many(messages),
}));

export const curationsRelations = relations(curations, ({ one, many }) => ({
  creator: one(users, {
    fields: [curations.createdBy],
    references: [users.id],
  }),
  items: many(curationItems),
  curationTags: many(curationTags),
}));

export const curationItemsRelations = relations(curationItems, ({ one }) => ({
  curation: one(curations, {
    fields: [curationItems.curationId],
    references: [curations.id],
  }),
}));

export const messagesRelations = relations(messages, ({ one }) => ({
  assignee: one(users, {
    fields: [messages.assignedTo],
    references: [users.id],
  }),
}));

export const tagsRelations = relations(tags, ({ many }) => ({
  curationTags: many(curationTags),
}));

export const curationTagsRelations = relations(curationTags, ({ one }) => ({
  curation: one(curations, {
    fields: [curationTags.curationId],
    references: [curations.id],
  }),
  tag: one(tags, {
    fields: [curationTags.tagId],
    references: [tags.id],
  }),
}));
