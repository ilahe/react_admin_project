import {
    DELETE_CONTACT, FIND_CONTACT,
    RETRIEVE_CONTACTS,
} from "./types";
import ContactsService from "../../services/contacts.service";

export const retrieveContacts= (currentType, currentPage) => async (dispatch) => {
    try {
        const res = await ContactsService.getAll(currentType, currentPage);
        dispatch({
            type: RETRIEVE_CONTACTS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const deleteContact = (id) => async (dispatch) => {
    try {
        await ContactsService.remove(id);
        dispatch({
            type: DELETE_CONTACT,
            payload: { id },
        });
    } catch (err) {
        console.log(err);
    }
};

export const findContact = (id) => async (dispatch) => {
    try {
        const res = await ContactsService.get(id);
        dispatch({
            type: FIND_CONTACT,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};