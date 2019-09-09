export default function rootReducer(state = {
  isFetchingStartingLocation: false,
  isFetchingDropOff: false,
  suggestedPickupLocations: [],
  suggestedDropOff: [],
  isFetchingUberEstimate: false,
  isFetchingLyftEstimate: false,
  uberEstimates:  [{type: "UberX", costEstimate: '$10-12'}, {type: "UberX", costEstimate: '$10-12'}, {type: "UberX", costEstimate: '$10-12'}, {type: "UberX", costEstimate: '$10-12'}, {type: "UberX", costEstimate: '$10-12'}, {type: "UberX", costEstimate: '$10-12'}],
  lyftEstimates:  [{type: "LyftA", costEstimate: '$10-12'}, {type: "LyftA", costEstimate: '$10-12'}, {type: "LyftA", costEstimate: '$10-12'}, {type: "LyftA", costEstimate: '$10-12'}, {type: "LyftA", costEstimate: '$10-12'}, {type: "LyftA", costEstimate: '$10-12'}],
    }, action) {
    switch(action.type){
      case "DISPLAY_PICKUP_LOCATIONS":
        return {...state, isFetchingPickupLocation: false, suggestedPickupLocations: action.suggestedPickupLocations}
      case "FETCHING_SUGGESTED_DROPOFFS": 
        return {...state, isFetchingDropOff: true, suggestedDropOffs: []}
      case "DISPLAY_DROPOFFS":
        return {...state, isFetchingDropOff: false, suggestedDropOffs: action.suggestedDropOffs}
      case "RETURN_UBER_ESTIMATE":
        return {...state, isFetchingUberEstimate: true, uberEstimates: []}
      case "ADD_UBER_ESTIMATE_TO_STATE":
        return {...state, isFetchingUberEstimate: false, uberestimates: action.estimates}
      case "FETCHING_LYFT_ESTIMATE":
        return {...state, isFetchingLyftEstimate: true, lyftEstimates: []}
      case "ADD_LYFT_ESTIMATES_TO_STATE":
        return {...state, isFetchingLyftEstimate: false, lyftEstimates: action.estimates}  
      default: 
        return state
    }
}