import { createStore } from 'redux';
import { reducer } from './reducer.js';

export const store = createStore(
    reducer,
    window.__Redux_DEVTOOLS_EXTENSION_ && window.__Redux_DEVTOOLS_EXTENSION_()
)