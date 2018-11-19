import { takeLatest, all } from 'redux-saga/effects'
import { Types as BreweryActions } from '../ducks/brewery';
import { addBreweries } from './brewery'

export default function* root() {
    return yield all([takeLatest(BreweryActions.ADD_BREWERY_REQUEST, addBreweries)])
}