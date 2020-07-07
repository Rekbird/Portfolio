
import { put, takeEvery, all, call } from 'redux-saga/effects';


const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* Placeholder(){
    yield console.log("test");
  }
  
  
  
  function* rootSaga() {
      yield all([
        Placeholder()
      ])
    }
  
  export default rootSaga;