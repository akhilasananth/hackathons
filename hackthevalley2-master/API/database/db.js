import react, { Component } from 'react'
import sql from 'mssql'

export class DB extends Component {
  constructor() {
    super()
    this.init()
  }

  async init() {
    try {
      this.db = await sql.connect('mssql://onecommunity:HackTheValley2@onecommunity-api.database.windows.net')
    } catch (e) {
      console.log(e)
    }
  }

  // INSERT method: values = { key: val[, key:val] }
  async insert(tableName, values) {
    if(!this.db) return 
    try {
      const columns = Object.keys(values)
      await sql.query`insert into ${tableName} (${columns.join()})\nvalues (${columns.map(key => values[key]).join()})`
    } catch (e) {
      console.log(e)
    }
  }

  // UPDATE method: val = {key: val[, key: val]}
  async update(tableName, values, where) {
    if(!this.db) return
    try {
      const columns = Object.keys(values)
      if (where)
        await sql.query`update ${tableName} set ${columns.reduce((key, index) => {
          if(index === 0) return `${key}=${values[key]}`
          return `,${key}=${values[key]}`
        }, '')}`
      else
        await sql.query`update ${tableName} set ${columns.reduce((key, index) => {
          if(index === 0) return `${key}=${values[key]}`
          return `,${key}=${values[key]}`
        }, '')} where ${where}`
    } catch (e) {
      console.log(e)
    }
  }
}