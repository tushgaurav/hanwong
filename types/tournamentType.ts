export type Tournament = {
    id: number;
    title: string;
    description: string;
    start_date: Date;
    end_date: Date;
    location: string;
    organizer: string;
    organizer_email: string;
    registration_count: number;
    tags: string[];
};