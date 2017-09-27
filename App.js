import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { ChooseScreen, PlayScreen } from './Screens';

const Navigation = StackNavigator({
  Choose: {
    screen: ChooseScreen
  },
  Play: {
    screen: PlayScreen
  },
});

AppRegistry.registerComponent('hangman', () => Navigation);
