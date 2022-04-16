import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import PlayerWidget from './src/components/PlayerWidget';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';

import { Amplify } from "aws-amplify";
import config from "./src/aws-exports";
import { AppContext } from "./AppContext";
import { useState } from 'react';

Amplify.configure(config)

export default function App () {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [songId, setSongId] = useState<string | null>(null)
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AppContext.Provider value={{
          songId,
          setSongId,
        }}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
          <PlayerWidget />
        </AppContext.Provider>
      </SafeAreaProvider >
    );
  }
}
