import { createContext } from 'react';

interface UserConfig {
  id: number
}

export const UserContext = createContext<UserConfig>({
  id: 1
});