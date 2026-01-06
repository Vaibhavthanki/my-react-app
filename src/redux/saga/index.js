import { watchFetchUserData } from "./userSaga";

// Root saga: combines all sagas
export default function* rootSaga() {
  yield watchFetchUserData();
}
