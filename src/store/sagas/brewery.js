import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import { Creators as BreweryActions} from '../ducks/brewery'

export function* addBreweries() {
    try {
        const response = yield call(api.get, '/')
        yield put(BreweryActions.addBrewerySuccess({ breweries: response.data }));
    } catch (error) {
        yield put(BreweryActions.addBreweryError({ message: 'Error loading breweries' }));
    }
}