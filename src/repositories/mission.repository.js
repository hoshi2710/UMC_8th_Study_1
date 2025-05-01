import { pool } from "../db.config.js";

export const addMission = async (data) => {
  const conn = await pool.getConnection();
  try {
    const [locationId] = await pool.query(
      `select location_id from store where id=?`,
      [data.storeId]
    );
    if (locationId.length == 0) {
      return null;
    }
    const [mission] = await pool.query(
      `INSERT INTO missions (store_id,goal,rewards,expire_date,location_id) VALUES (?, ?, ?, ?, ?);`,
      [
        data.storeId,
        data.goal,
        data.rewards,
        data.expireDate,
        locationId[0].location_id,
      ]
    );
    return mission.insertId;
  } catch (err) {
    throw new Error(
      `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
    );
  } finally {
    conn.release();
  }
};

export const getMission = async (missionId) => {
  const conn = await pool.getConnection();
  try {
    const [mission] = await pool.query(
      `select store.name as storeName, goal,rewards,expire_date,locations.name as location ` +
        `from store join missions on store.id = missions.store_id ` +
        `join locations on missions.location_id = locations.id where missions.id = ?`,
      [missionId]
    );
    return mission;
  } catch (err) {
    throw new Error(
      `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
    );
  } finally {
    conn.release();
  }
};

export const startMission = async (data) => {
  const conn = await pool.getConnection();
  try {
    const [confirm] = await pool.query(
      `
      select * from missions where id=?
      `,
      [data.missionId]
    );
    if (confirm.length == 0) return null;
    const [mission] = await pool.query(
      `insert into accepted_missions (mission_id,user_id,verification_code) values (?,?,?)`,
      [data.missionId, data.userId, data.verificationCode]
    );
    return mission.insertId;
  } catch (err) {
    throw new Error(
      `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
    );
  } finally {
    conn.release();
  }
};

export const getOnGoingMission = async (missionId) => {
  const conn = await pool.getConnection();
  try {
    const [mission] = await pool.query(
      `select store.name as storeName,goal, rewards, expire_date, verification_code from missions ` +
        `join accepted_missions on missions.id = accepted_missions.mission_id ` +
        `join store on missions.store_id = store.id where accepted_missions.id = ?`,
      [missionId]
    );
    return mission;
  } catch (err) {
    throw new Error(
      `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
    );
  } finally {
    conn.release();
  }
};
