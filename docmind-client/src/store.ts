import { configureStore } from '@reduxjs/toolkit';

let initialState = {
    isMenuPanelShown: true
};

const ACTIONS = {
    TOGGLE_MENU_PANEL: 'TOGGLE_MENU_PANEL'
}

export const toggleMenuPanel = () => {
    return {
        type: ACTIONS.TOGGLE_MENU_PANEL
    }
};

function rootReducer(state = initialState, action: any) {
    switch (action.type) {
        case ACTIONS.TOGGLE_MENU_PANEL:
            var isMenuPanelShown = !state.isMenuPanelShown;
            return { ...state, isMenuPanelShown }
        default:
            return state;
    }
}

const store = configureStore({
    reducer: rootReducer
});

export default store;
