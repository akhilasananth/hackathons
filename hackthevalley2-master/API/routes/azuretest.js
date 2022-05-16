import { DB } from '../database'
export default (req, res, next) => {
  console.log('running')
  next()
}