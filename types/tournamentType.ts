export type Tournament = {
    id: number;
    title: string;
    description: string;
    start_date: string;
    end_date: string;
    location: string;
    organizer: string;
    organizer_email: string;
    registration_count: number;
    tags: string[];
};