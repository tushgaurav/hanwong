"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "@/db/drizzle";
import { tournament } from "@/db/schema";

export const getTournaments = async () => {
    const data = await db.select().from(tournament);
    return data;
};

export const addTournament = async (id: number, title: string, description: string, start_date: string, end_date: string, location: string, organizer: string, organizer_email: string, registration_count: number, tags: string[]) => {
    await db.insert(tournament).values({
        title,
        description,
        start_date: new Date(start_date),
        end_date: new Date(end_date),
        location,
        organizer,
        organizer_email,
        registration_count,
        tags,
    });
};

export const deleteTournament = async (id: number) => {
    await db.delete(tournament).where(eq(tournament.id, id));

    revalidatePath("/");
};
export const editTournament = async (id: number, title: string, description: string, start_date: string, end_date: string, location: string, organizer: string, organizer_email: string, registration_count: number, tags: string[]) => {
    await db
        .update(tournament)
        .set({
            title: title,
            description: description,
            start_date: new Date(start_date),
            end_date: new Date(end_date),
            location: location,
            organizer: organizer,
            organizer_email: organizer_email,
            registration_count: registration_count,
            tags: tags,
        })
        .where(eq(tournament.id, id));

    revalidatePath("/");
};
