const db = require('../../data/db-config');

const getAll = () => {
  // DO YOUR MAGIC
  return db('cars');
};

const getById = (id) => {
  // DO YOUR MAGIC
  return db("cars").where("id", id).first();
};

const create = async car => {
  // DO YOUR MAGIC
  const [id] = await db('cars').insert(car);
  return getById(id);
};

const getByVin = async (vin) => {
  return db('cars').where('vin', vin).first();
};

const updateById = async (id, car) => {
  await db('cars').where('id', id).update(car);
    return getById(id);
};

const deleteById = id => {
  //DELETE FROM accounts WHERE id='some number';
  return db('cars').where('id', id).del();
};

module.exports = {
  getAll,
  getById,
  create,
  getByVin,
  updateById,
  deleteById,
};