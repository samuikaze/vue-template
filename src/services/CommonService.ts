import { AppEnvironmentService } from './AppEnvironmentService'

export const CommonService = {
  appEnvironmentService: AppEnvironmentService,

  /**
   * 設定頁面標題
   * @param newTitle 新標題
   */
  setTitle: async function (newTitle: string): Promise<void> {
    const siteTitle = (await this.appEnvironmentService.getConfig<string>('siteTitle')) || ''
    if (newTitle.length > 0) {
      document.title = `${newTitle} - ${siteTitle}`
    } else {
      document.title = siteTitle
    }
  },

  /**
   * 處理日期時間
   *
   * @param raw 原始值
   * @param num 要返回的個數
   * @returns 處理後的值
   */
  processDateTime: function (raw: string | Date, num: number): string {
    if (num > 6) {
      num = 6
    } else if (num < 0) {
      num = 0
    }

    const rawDate = new Date(raw)
    const year = rawDate.getFullYear()
    const month = rawDate.getMonth() + 1
    const date = rawDate.getDate()
    const hour = rawDate.getHours()
    const minute = rawDate.getMinutes()
    const seconds = rawDate.getSeconds()

    const dateArray = [year, month, date, hour, minute, seconds]
    const separator = ['-', '-', ' ', ':', ':']
    let result = ''
    for (let i = 0; i < num; i++) {
      if (i != 0) {
        result += `${separator[i - 1]}`
      }

      result += dateArray[i].toString().length < 2 ? `0${dateArray[i]}` : `${dateArray[i]}`
    }

    return result
  },

  /**
   * 複製物件
   * @param original 原始物件
   * @returns 複製的物件
   */
  deepCloneObject: function (original: any): any {
    return JSON.parse(JSON.stringify(original))
  },
}
