import {User} from "../../src";

const MOCK_USERS: User[] = [
    {
        phone_number: '+1-555-0123',
        bio: 'Travel enthusiast and coffee lover. Always seeking new adventures!',
        first_name: 'Sarah',
        last_name: 'Chen',
        date_of_birth: new Date('1992-03-15'),
        location: [-122.419416, 37.774929],
        photos: [
            'https://example.com/users/sarah/profile1.jpg',
            'https://example.com/users/sarah/travel1.jpg',
            'https://example.com/users/sarah/coffee.jpeg',
        ],
    },
    {
        phone_number: '+44-7700-900123',
        bio: 'Professional chef, foodie, and amateur photographer',
        first_name: 'James',
        last_name: 'Wilson',
        date_of_birth: new Date('1988-11-27'),
        location: [-0.127758, 51.507351],
        photos: [
            'https://example.com/users/james/chef1.jpg',
            'https://example.com/users/james/food1.jpeg',
            'https://example.com/users/james/portrait.jpg',
            'https://example.com/users/james/kitchen.png',
        ],
    },
    {
        phone_number: '+61-4-1234-5678',
        bio: 'This is a long bio',
        first_name: 'Emma',
        last_name: 'Taylor',
        date_of_birth: new Date('1995-07-08'),
        location: [151.2099, -33.865143], // Sydney coordinates
        photos: [],
    },
    {
        phone_number: '+1-555-0124',
        bio: 'Tech entrepreneur by day, rock climber by weekend. Building the future one line of code at a time.',
        first_name: 'Michael',
        last_name: 'Rodriguez',
        date_of_birth: new Date('1991-08-22'),
        location: [-118.243683, 34.052235], // Los Angeles
        photos: [
            'https://example.com/users/michael/coding.jpg',
            'https://example.com/users/michael/climbing1.jpg',
            'https://example.com/users/michael/summit.jpeg',
        ],
    },
    {
        phone_number: '+33-6-12345678',
        bio: 'Ballet dancer and yoga instructor. Finding balance in life through movement.',
        first_name: 'Sophie',
        last_name: 'Laurent',
        date_of_birth: new Date('1994-05-17'),
        location: [2.352222, 48.856614], // Paris
        photos: [
            'https://example.com/users/sophie/dance1.jpg',
            'https://example.com/users/sophie/yoga.jpeg',
            'https://example.com/users/sophie/studio.png',
        ],
    },
    {
        phone_number: '+81-80-1234-5678',
        bio: 'Game developer and anime enthusiast. Creating virtual worlds and exploring real ones.',
        first_name: 'Yuki',
        last_name: 'Tanaka',
        date_of_birth: new Date('1993-12-03'),
        location: [139.6917, 35.6895], // Tokyo
        photos: [
            'https://example.com/users/yuki/gaming.jpg',
            'https://example.com/users/yuki/cosplay.jpeg',
        ],
    },
    {
        phone_number: '+49-151-12345678',
        bio: 'Environmental scientist working on climate solutions. Plant parent and urban gardener.',
        first_name: 'Lisa',
        last_name: 'Mueller',
        date_of_birth: new Date('1990-02-28'),
        location: [13.404954, 52.520007], // Berlin
        photos: [
            'https://example.com/users/lisa/garden1.jpg',
            'https://example.com/users/lisa/plants.jpeg',
            'https://example.com/users/lisa/research.png',
        ],
    },
    {
        phone_number: '+55-11-98765-4321',
        bio: 'Professional surfer and marine conservation advocate. Living life one wave at a time.',
        first_name: 'Rafael',
        last_name: 'Santos',
        date_of_birth: new Date('1996-09-14'),
        location: [-43.1729, -22.9068], // Rio de Janeiro
        photos: [
            'https://example.com/users/rafael/surf1.jpg',
            'https://example.com/users/rafael/beach.jpeg',
            'https://example.com/users/rafael/ocean.png',
        ],
    },
    {
        phone_number: '+1-555-0125',
        bio: 'Veterinarian specializing in exotic animals. Animal lover and wildlife photographer.',
        first_name: 'Alexandra',
        last_name: 'Martinez',
        date_of_birth: new Date('1989-07-30'),
        location: [-80.19179, 25.76168], // Miami
        photos: [
            'https://example.com/users/alexandra/vet1.jpg',
            'https://example.com/users/alexandra/wildlife.jpeg',
        ],
    },
    {
        phone_number: '+971-50-123-4567',
        bio: 'Architect and urban designer. Creating spaces that inspire and connect communities.',
        first_name: 'Omar',
        last_name: 'Al-Rashid',
        date_of_birth: new Date('1987-11-05'),
        location: [55.2708, 25.2048], // Dubai
        photos: [
            'https://example.com/users/omar/architecture1.jpg',
            'https://example.com/users/omar/design.jpeg',
            'https://example.com/users/omar/project.png',
        ],
    },
    {
        phone_number: '+27-71-234-5678',
        bio: 'Jazz musician and music teacher. Finding harmony in life through rhythms and melodies.',
        first_name: 'Thabo',
        last_name: 'Ndlovu',
        date_of_birth: new Date('1992-04-19'),
        location: [28.0473, -26.2041], // Johannesburg
        photos: [
            'https://example.com/users/thabo/music1.jpg',
            'https://example.com/users/thabo/performance.jpeg',
            'https://example.com/users/thabo/studio.png',
        ],
    },
    {
        phone_number: '+64-21-123-456',
        bio: 'Documentary filmmaker exploring indigenous stories. Storyteller and adventure seeker.',
        first_name: 'Marama',
        last_name: 'Walker',
        date_of_birth: new Date('1994-01-23'),
        location: [174.7633, -36.8485], // Auckland
        photos: [
            'https://example.com/users/marama/film1.jpg',
            'https://example.com/users/marama/documentary.jpeg',
        ],
    },
    {
        phone_number: '+46-70-123-45-67',
        bio: 'Sustainable fashion designer and vintage collector. Creating eco-friendly fashion for the future.',
        first_name: 'Astrid',
        last_name: 'Bergstrom',
        date_of_birth: new Date('1993-06-12'),
        location: [18.0686, 59.3293], // Stockholm
        photos: [
            'https://example.com/users/astrid/fashion1.jpg',
            'https://example.com/users/astrid/design.jpeg',
            'https://example.com/users/astrid/collection.png',
        ],
    },
];

export const getMockUsers = (limit: number): User[] => MOCK_USERS.splice(0, limit)