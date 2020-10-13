import React from 'react';
import { 
    FOLLOW_TO_TASK_THIS_WEEK
} from '../actions/actions';

const nextToWeek = (state = [], action) => {
    switch(action.type) {
      case FOLLOW_TO_TASK_THIS_WEEK:
        const stack = { task: action.task, week: action.week, category: action.category }
        const length = state.length
        const id = length === 0 ? 1 : state[length - 1].id + 1
        return [...state, { id, ...nextToWeek}]
      default:
        return state
    }
}

export default nextToWeek