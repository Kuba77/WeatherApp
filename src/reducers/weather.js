import Immutable from 'seamless-immutable';

const defaultState = Immutable({
  status: 'INITIAL',
  temperature: null,
  text: null,
});

export default function weather(state = defaultState, action) {
  switch (action.type) {
    case 'UPDATE_WEATHER_SUCCESS': {
      const { temperature, text } = action;
      return {
        status: 'UPDATED',
        temperature,
        text,
      };
    }
    case 'UPDATE_WEATHER_ERROR': {
      return {
        ...state,
        status: 'ERROR',
      };
    }
    default:
      return state;
  }
}
