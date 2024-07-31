import {combineReducers} from 'redux';
import searchReducer from './searchReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['search'],
};
const rootReducer = combineReducers({
  search: searchReducer,
});
export default persistReducer(persistConfig, rootReducer);
