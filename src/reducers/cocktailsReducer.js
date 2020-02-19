const cocktailsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_COCKTAILS_LIST':
            return [
                ...action.cocktails
            ]

        case 'CLEAR_COCKTAILS_LIST':
            return []

        default:
            return state
    }
}

export { cocktailsReducer as default }