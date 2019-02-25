module.exports = class NormalizeContent {
    static lowerCase (data) {
      return new Promise(async (resolve, reject) => {
        try {
          resolve(data.toLowerCase())
        } catch (error) {
          reject(error)
        }
      })
    }
    static removeAccents (data) {
      return new Promise(async (resolve, reject) => {
        try {
          resolve(data.normalize('NFD').replace(/[\u0300-\u036f]/g, ''))
        } catch (error) {
          reject(error)
        }
      })
    }
  
    static removeSpecialCaracters (data) {
      return new Promise(async (resolve, reject) => {
        try {
          resolve(data.normalize('NFD').replace(/[^\w\s]|_/gi, ''))
        } catch (error) {
          reject(error)
        }
      })
    }
  
    static clean (data) {
      return new Promise(async (resolve, reject) => {
        try {
          data = await this.lowerCase(data)
          data = await this.removeAccents(data)
          resolve(await this.removeSpecialCaracters(data))
        } catch (error) {
          reject(error)
        }
      })
    }
  }
  