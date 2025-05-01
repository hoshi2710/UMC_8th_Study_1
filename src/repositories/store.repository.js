import { pool } from "../db.config.js";

export const addStore = async (data) => {
  const conn = await pool.getConnection();
  try {
    const [confirm1] = await pool.query(`select * from store where name=?`, [
      data.storeName,
    ]);
    if (confirm1.length != 0) return -1;
    const [confirm2] = await pool.query(`select * from food_type where id=?`, [
      data.foodTypeId,
    ]);
    if (confirm2.length == 0) return -2;
    const [confirm3] = await pool.query(
      `select * from locations where id = ?`,
      [data.locationId]
    );
    if (confirm3.length == 0) return -3;

    const [store] = await pool.query(
      `insert into store (name,food_type_id,address,open_time,close_time,location_id) values (?,?,?,?,?,?)`,
      [
        data.storeName,
        data.foodTypeId,
        data.address,
        data.openTime,
        data.closeTime,
        data.locationId,
      ]
    );
    const [storeStatus] = await pool.query(
      `insert into store_status (store_id,reviews_count,star_total) values (?,0,0)`,
      [store.insertId]
    );
    return store.insertId;
  } catch (err) {
    throw new Error(
      `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
    );
  } finally {
    conn.release();
  }
};
export const getStore = async (storeId) => {
  const conn = await pool.getConnection();
  try {
    const [store] = await pool.query(
      `select store.name as storeName, address, open_time, close_time, food_type.store_type_name as storeType, locations.name as location from store ` +
        `join food_type on store.food_type_id = food_type.id join locations on store.location_id = locations.id where store.id = ?`,
      [storeId]
    );
    return store;
  } catch (err) {
    throw new Error(
      `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
    );
  } finally {
    conn.release();
  }
};
