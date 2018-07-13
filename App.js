import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import LoginView from './views/Login/Login';
import HomeView from './views/Home/Home';
import FeedView from './views/Feed/Feed';
import CommentsView from './views/Comments/Comments';
import SplashScreen from './views/Splash/Splash';
import SettingsView from './views/Settings/Settings';

const AppStack = createStackNavigator(
  {
    Home: HomeView,
    Feed: FeedView,
    Comments: CommentsView,
    Settings: SettingsView,
  }
)

export default createSwitchNavigator(
  {
    Splash: SplashScreen,
    Auth: LoginView,
    App: AppStack
  },
  { initialRouteName: 'Splash' }
)
