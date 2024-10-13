import { compose,legacy_createStore,applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(Boolean)
const composeEnahncer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVETOOL_EXTENSION_COMPOSE__) || compose

const composedEnahncers = composeEnahncer(applyMiddleware(...middleWares))
const persistConfig = {

    key:'root', // persist the data from root level 
    storage:storage, //storage uses local memorey 
    blacklist: ['movielist'] //don't persist reducers mention in this array
}

const persistedReducer = persistReducer(persistConfig,rootReducer)
//replace rootReducer with persistedReducer
export const store = legacy_createStore(persistedReducer,undefined,composedEnahncers) //optional second paramter

export const persistor = persistStore(store)