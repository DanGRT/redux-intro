function movieResults(state = [], action){
  switch (action.type) {
    case 'RECEIVE_MOVIES':
      return action.movies
    default:
      return state
  }
}

export default movieResults;
