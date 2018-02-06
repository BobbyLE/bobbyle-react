const articlesReducerDefaultState = [];

export default (state = articlesReducerDefaultState, action) => {
  switch(action.type) {
    case 'ADD_ARTICLE':
      return [
        ...state,
        action.article
      ];
    case 'EDIT_ARTICLE':
      return state.map((article) => {
        if(article.id === action.id) {
          return {
            ...article,
            ...action.updates
          }
        } else {
          return article;
        };
      });
    case 'REMOVE_ARTICLE':
      return state.filter(({id}) => id != action.id);
    case 'SET_ARTICLES':
      return action.articles;
    default:
      return state;
  }
}