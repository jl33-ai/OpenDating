import { User } from '../../src';

// TODO(jl) change to User[]
const MOCK_USERS: any[] = [
    {
        bio: 'Adventure seeker and coffee enthusiast. Always looking for the next mountain to climb! 📸',
        date_of_birth: '1975-10-19T18:04:01.219Z',
        first_name: 'Emma',
        gender: 'male',
        location: [55.2708, 25.2048],
        photos: [
            'https://example.com/photos/user_profile_1.jpg',
            'https://example.com/photos/adventure_2.jpg',
        ],
        preferred_genders: ['female'],
    },
    {
        bio: 'Book lover, aspiring chef, and proud cat parent. Living life one page at a time 📚',
        date_of_birth: '2005-05-12T20:18:22.805Z',
        first_name: 'Liam',
        gender: 'female',
        location: [-79.3832, 43.6532],
        photos: [
            'https://example.com/photos/user_profile_1.jpg',
            'https://example.com/photos/adventure_2.jpg',
        ],
        preferred_genders: ['female'],
    },
    {
        bio: 'Tech professional by day, musician by night. Seeking harmony in all things 🎵',
        date_of_birth: '2000-12-14T09:05:05.567Z',
        first_name: 'Olivia',
        gender: 'female',
        location: [18.0686, 59.3293],
        photos: [
            'https://example.com/photos/user_profile_1.jpg',
            'https://example.com/photos/adventure_2.jpg',
            'https://example.com/photos/travel_3.jpg',
        ],
        preferred_genders: ['male'],
    },
    {
        bio: "Travel photographer capturing moments around the globe. Let's explore together! ✈️",
        date_of_birth: '1992-09-23T11:32:18.515Z',
        first_name: 'Noah',
        gender: 'female',
        location: [55.2708, 25.2048],
        photos: [
            'https://example.com/photos/user_profile_1.jpg',
            'https://example.com/photos/adventure_2.jpg',
            'https://example.com/photos/travel_3.jpg',
        ],
        preferred_genders: ['female'],
    },
    {
        bio: 'Fitness fanatic and nutrition nerd. Believe in balance and sustainable living 💪',
        date_of_birth: '2001-10-30T13:29:13.987Z',
        first_name: 'Ava',
        gender: 'male',
        location: [-74.006, 40.7128],
        photos: [
            'https://example.com/photos/user_profile_1.jpg',
            'https://example.com/photos/adventure_2.jpg',
            'https://example.com/photos/travel_3.jpg',
            'https://example.com/photos/hobby_4.jpg',
        ],
        preferred_genders: ['female'],
    },
    {
        bio: 'Art curator with a passion for contemporary pieces. Coffee and gallery walks are my thing 🎨',
        date_of_birth: '1997-01-17T02:51:33.561Z',
        first_name: 'Isabella',
        gender: 'male',
        location: [-0.1276, 51.5074],
        photos: [
            'https://example.com/photos/user_profile_1.jpg',
            'https://example.com/photos/adventure_2.jpg',
            'https://example.com/photos/travel_3.jpg',
            'https://example.com/photos/hobby_4.jpg',
        ],
        preferred_genders: ['female'],
    },
    {
        bio: 'Startup founder building the future of AI. Love dogs and hiking on weekends 🐕',
        date_of_birth: '1976-01-20T05:57:59.831Z',
        first_name: 'Sophia',
        gender: 'female',
        location: [139.6917, 35.6895],
        photos: [
            'https://example.com/photos/user_profile_1.jpg',
            'https://example.com/photos/adventure_2.jpg',
            'https://example.com/photos/travel_3.jpg',
            'https://example.com/photos/hobby_4.jpg',
        ],
        preferred_genders: ['female'],
    },
    {
        bio: 'Environmental scientist working on climate solutions. Avid surfer and beach cleaner 🌊',
        date_of_birth: '2004-11-06T01:59:49.874Z',
        first_name: 'Mia',
        gender: 'female',
        location: [151.2093, -33.8688],
        photos: [
            'https://example.com/photos/user_profile_1.jpg',
            'https://example.com/photos/adventure_2.jpg',
            'https://example.com/photos/travel_3.jpg',
            'https://example.com/photos/hobby_4.jpg',
        ],
        preferred_genders: ['male'],
    },
    {
        bio: 'Food blogger exploring culinary traditions. Always hungry for new experiences 🍜',
        date_of_birth: '2004-07-14T12:34:38.175Z',
        first_name: 'Charlotte',
        gender: 'male',
        location: [2.3522, 48.8566],
        photos: [
            'https://example.com/photos/user_profile_1.jpg',
            'https://example.com/photos/adventure_2.jpg',
            'https://example.com/photos/travel_3.jpg',
        ],
        preferred_genders: ['female'],
    },
    {
        bio: 'Yoga instructor spreading mindfulness. Finding peace in chaos 🧘‍♀️',
        date_of_birth: '1996-10-15T14:41:31.444Z',
        first_name: 'Amelia',
        gender: 'female',
        location: [-0.1276, 51.5074],
        photos: [
            'https://example.com/photos/user_profile_1.jpg',
            'https://example.com/photos/adventure_2.jpg',
            'https://example.com/photos/travel_3.jpg',
            'https://example.com/photos/hobby_4.jpg',
        ],
        preferred_genders: ['female'],
    },
];

export const getMockUsers = (limit: number | null = null): User[] => {
    if (limit === null) {
        return MOCK_USERS;
    }
    return MOCK_USERS.splice(0, limit);
};
