import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { HashRouter } from 'react-router-dom';
import { createStore } from 'redux';
import ticketListReducer from './reducers/ticket-list-reducer';
import reducer from './reducers/ticket-list-reducer';
import { Provider } from 'react-redux';

const store = createStore(reducer);

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <Component/>
      </HashRouter>
    </Provider>,
    document.getElementById('react-app-root')
  );
};

render(App);
/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(<HashRouter>
                  <App />
                </HashRouter>, document.getElementById('root'));
  });
}
/*eslint-enable */
