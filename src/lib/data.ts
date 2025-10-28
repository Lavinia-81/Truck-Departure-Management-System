import { addMinutes, subMinutes } from 'date-fns';
import { Departure } from './types';

const now = new Date();

export const initialDepartures: Departure[] = [
  {
    id: '1',
    carrier: 'Royal Mail',
    destination: 'London',
    via: 'Birmingham',
    trailerNumber: 'TR-12345',
    collectionTime: addMinutes(now, 30).toISOString(),
    bayDoor: 1,
    sealNumber: 'S-RM123',
    scheduleNumber: 'SCH-001',
    status: 'Waiting',
  },
  {
    id: '2',
    carrier: 'EVRI',
    destination: 'Manchester',
    trailerNumber: 'TR-67890',
    collectionTime: addMinutes(now, 5).toISOString(),
    bayDoor: 3,
    sealNumber: 'S-EV456',
    scheduleNumber: 'SCH-002',
    status: 'Loading',
  },
  {
    id: '3',
    carrier: 'Yodel',
    destination: 'Glasgow',
    via: 'Edinburgh',
    trailerNumber: 'TR-54321',
    collectionTime: subMinutes(now, 60).toISOString(),
    bayDoor: 5,
    scheduleNumber: 'SCH-003',
    status: 'Departed',
  },
  {
    id: '4',
    carrier: 'McBurney',
    destination: 'Belfast',
    trailerNumber: 'TR-09876',
    collectionTime: addMinutes(now, 120).toISOString(),
    bayDoor: 2,
    scheduleNumber: 'SCH-004',
    status: 'Waiting',
  },
  {
    id: '5',
    carrier: 'Royal Mail',
    destination: 'Cardiff',
    trailerNumber: 'TR-11223',
    collectionTime: subMinutes(now, 15).toISOString(),
    bayDoor: 4,
    scheduleNumber: 'SCH-005',
    status: 'Waiting', // This will become "Delayed"
  },
   {
    id: '6',
    carrier: 'EVRI',
    destination: 'Liverpool',
    trailerNumber: 'TR-44556',
    collectionTime: addMinutes(now, 90).toISOString(),
    bayDoor: 7,
    scheduleNumber: 'SCH-006',
    status: 'Cancelled',
  },
];
