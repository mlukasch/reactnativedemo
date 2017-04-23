// APi calls:
export const FETCH_RECORDS = 'FETCH_RECORDS';
export const fetchRecords = () => ({
  type: FETCH_RECORDS,
});

// STate Updates
export const UPDATE_RECORDS = 'UPDATE_RECORDS';
export const updateRecords = records => ({
  type: UPDATE_RECORDS,
  records,
});
