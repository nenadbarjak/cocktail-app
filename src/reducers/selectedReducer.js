const selectedReducer = (state, action) => {
    switch (action.type) {
        case 'SET_SELECTED_COCKTAIL':
            return action.cocktail
        
        case 'CLEAT_SELECTED_COCKTAIL':
            return {}
        default:
            return {}
    }
}

export { selectedReducer as default }