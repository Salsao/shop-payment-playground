import { createContext } from 'react';

export const SneakerContext = createContext({
  sneaker: null,
  setSneaker: () => {}
});
