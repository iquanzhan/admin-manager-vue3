class LocalCache {
  /**
   * 保存键值到本地存储
   * @param key 键
   * @param value 值
   */
  setCache(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
  /**
   * 根据键获取本地存储的值
   * @param key 键
   * @returns 值
   */
  getCache(key: string) {
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  /**
   * 根据键删除本地存储
   * @param key 键
   */
  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }

  /**
   * 清空本地存储信息
   */
  clearCache() {
    window.localStorage.clear()
  }
}

export default new LocalCache()
