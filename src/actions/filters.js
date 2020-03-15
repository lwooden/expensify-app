

// SET_FILTER
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})


// SORT_BY_AMOUNT
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
})


// SORT_BY_DATE
export const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
})

// SET_BY_START
export const setStartDate = (startDate) => ({
    type: 'SET_BY_START',
    startDate
    //startDate: date
})

// SET_BY_END
export const setEndDate = (endDate) => ({
    type: 'SET_BY_END',
    endDate
    //endDate: date
})