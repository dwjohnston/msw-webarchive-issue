import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { setupServer } from 'msw/lib/node';
import { setRequestHandlersByWebarchive } from '@tapico/msw-webarchive';

import * as traffic from './testData/example.har.json';

const server = setupServer();
setRequestHandlersByWebarchive(server, traffic, {
  domainMappings: {
    "http://localhost:3000": "http://localhost"
  }
});

beforeEach(() => {
  server.listen({
    onUnhandledRequest: 'error'
  });
});

afterEach(() => {
  server.close();
});

test('renders learn react link', async () => {
  render(<App />);

  expect(screen.getByText("loading...")).toBeInTheDocument();

  expect(await screen.findByText('{"foo":"bar"}')).toBeInTheDocument();

});
