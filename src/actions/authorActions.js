import AuthorApi from '../api/mockAuthorApi';
import {beginAjaxCall} from './ajaxStatusActions';
import * as types from './actionTypes';

export function loadAuthorsSuccess(authors) {
    return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
    return dispatch => {
        dispatch(beginAjaxCall());
        AuthorApi.getAllAuthors()
            .then(authors => dispatch(loadAuthorsSuccess(authors)))
            .catch(error => { throw(error); });
    }
}