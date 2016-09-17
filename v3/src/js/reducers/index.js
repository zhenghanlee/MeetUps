// @flow
import type { FSA } from 'redux';

import { routerReducer } from 'react-router-redux';

import requests from './requests';
import entities from './entities';
import timetables from './timetables';
import app from './app';
import theme from './theme';

type State = {
  entities: Object,
  requests: Object,
  timetables: Object,
  routing: Object,
  app: Object,
  theme: Object,
};

// $FlowFixMe: State default is delegated to its child reducers.
const defaultState: State = {};

export default function (state: State = defaultState, action: FSA) {
  return {
    entities: entities(state.entities, action),
    requests: requests(state.requests, action),
    timetables: timetables(state.timetables, action, state.entities),
    routing: routerReducer(state.routing, action),
    app: app(state.app, action),
    theme: theme(state.theme, action),
  };
}
