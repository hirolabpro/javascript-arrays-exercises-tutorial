
let parking_state = [
  [2,1,2],
  [0,0,0],
  [1,1,2]
]
//console.log(getParkingLotState(parking_state))



    function getParkingLotState(param){
      let state = {
        totalSlots: 0,
        availableSlots: 0,
        occupiedSlots: 0
      }
      for (let i = 0; i < param.length; i++){
          //console.log(param[i]);
        for (let x = 0; x < param[i].length; x++){
            //console.log(param[i][x]);
          if (param[i][x] === 2){
            
            state.availableSlots += 1
            state.totalSlots += 1
          }
          else if (param[i][x] === 1){
            state.occupiedSlots += 1
            state.totalSlots += 1
          }
        }
      }
    return state
    } 
    
console.log(getParkingLotState(parking_state))
    

