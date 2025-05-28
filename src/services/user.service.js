import {responseFromUser} from "../dtos/user.dto.js";
import {DuplicateUserEmailError, UserNotFoundError} from "../error.js";
import {
  addUser,
  getUser,
  modifyUser,
  getUserPreferencesByUserId,
  setPreference, updatePreference,
} from "../repositories/user.repository.js";

export const userSignUp = async (data) => {
  const joinUserId = await addUser({
    email: data.email,
    name: data.name,
    gender: data.gender,
    birth: data.birth,
    address: data.address,
    phoneNumber: data.phoneNumber,
  });

  if (joinUserId === null) {
    throw new DuplicateUserEmailError("이미 존재하는 이메일입니다.", data);
  }

  for (const preference of data.preferences) {
    await setPreference(joinUserId, preference);
  }

  const user = await getUser(joinUserId);
  const preferences = await getUserPreferencesByUserId(joinUserId);
  // console.log(user);
  // console.log(preferences);
  return responseFromUser({user, preferences});
};
export const userInfoModify = async (data) => {
  const user = await modifyUser(data);
  if (user === null) {
    throw new UserNotFoundError("존재하지 않는 사용자 입니다.", data);
  }
  const preferences = await updatePreference(data.id, data.preferences);
  return responseFromUser({user, preferences});
}