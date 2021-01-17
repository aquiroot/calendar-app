import moment from 'moment';
import { eventAddNew, eventSetActive } from '../actions/events';
import { types } from '../types/types';

const initialState = {
	events: [
		{
			id: new Date().getTime(),
			title: 'test',
			start: moment().toDate(),
			end: moment().add(2, 'hours').toDate(),
			bgcolor: '#fafafa',
			notes: 'notas de testing',
			user: {
				_id: '123',
				name: 'Damian',
			},
		},
	],
	activeEvent: null,
};

export const calendarReducer = (state = initialState, action) => {
	switch (action.type) {
		case eventAddNew:
			return {
				...state,
				events: [],
			};

		case eventSetActive:
			return {
				...state,
				activeEvent: action.payload,
			};

		case types.eventAddNew:
			return {
				...state,
				events: [...state.events, action.payload],
			};

		case types.eventClearActiveEvent:
			return {
				...state,
				activeEvent: null,
			};

		case types.eventUpdated:
			return {
				...state,
				events: state.events.map((e) =>
					e.id === action.payload.id ? action.payload : e
				),
			};

		case types.eventDeleted:
			return {
				...state,
				events: state.events.filter((e) => e.id !== state.activeEvent.id),
				activeEvent: null,
			};

		default:
			return state;
	}
};