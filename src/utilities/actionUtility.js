/**
 * Interface for creating action to maintain the parameter consistency
 *
 * @param type
 * @param payload
 * @param error
 * @param meta
 * @returns {{payload: undefined, meta: null, type, error: boolean}}
 */
const action = (type, payload = undefined, error = false, meta = null) => ({
  type, payload, error, meta
});

export {
  action
};
