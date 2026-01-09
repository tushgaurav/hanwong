export * from "@/db/auth-schema";
import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const tournament = pgTable("tournament", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    description: text("description").notNull(),
    start_date: timestamp("start_date").notNull(),
    end_date: timestamp("end_date").notNull(),
    location: text("location").notNull().default("Online"),
    organizer: text("organizer").notNull().default("Han Wong International"),
    organizer_email: text("organizer_email").notNull().default("hello@hanwong.org"),
    registration_count: integer("registration_count").notNull().default(0),
    tags: text("tags").array().notNull().default([]),
});