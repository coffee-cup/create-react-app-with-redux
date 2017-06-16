import * as types from './action-types';
import { onKettleFill, onKettleHeat } from './kitchen';

export const onLightOn = () => {
  return {
    type: types.LIGHT_ON
  };
}

export const onLightOff = () => {
  return {
    type: types.LIGHT_OFF
  };
}


export const onLightDim = () => {
  return (dispatch, getState) => {

    if (getState().bedroom.light === 'OFF' && !getState().kitchen.isKettleFilled) {
      dispatch(onKettleFill());
      dispatch(onKettleHeat());
    }
    dispatch({ type: types.LIGHT_DIM });
  };
}

