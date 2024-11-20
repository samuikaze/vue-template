import type { StringKeyObject } from '@/abstracts/GlobalTypes'
import { RequestService } from './RequestService'
import { SecureLocalStorageService } from './SecureLocalStorageService'

export const AppEnvironmentService = {
  requestService: RequestService,
  secureLocalStorageService: SecureLocalStorageService,
  /**
   * 從 assets/configs.json 取得設定值
   */
  retrievingConfigsFromJson: function (): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.requestService
        .get<StringKeyObject<any>>('configs.json')
        .then((response) => {
          let configs = '{}'
          if (response.headers['Content-Type'] === 'application/json') {
            configs = JSON.stringify(response)
          }

          configs = this.secureLocalStorageService.encrypt(configs)
          this.secureLocalStorageService.set('configs.json', configs)
          resolve(true)
        })
        .catch((errors) => {
          this.secureLocalStorageService.set(
            'configs.json',
            this.secureLocalStorageService.encrypt('{}'),
          )

          if (errors.status !== 404) {
            console.error(errors)

            reject(errors.message)

            return
          }

          resolve(true)
        })
    })
  },

  /**
   * 取得設定值
   *
   * 若 configs.json 與 environment.ts 皆存在相同值，將以 configs.json 為主
   *
   * @param key 設定值鍵名
   * @returns 設定值
   */
  getConfig: async function <T>(key: string): Promise<T | undefined> {
    const configs = JSON.parse(this.secureLocalStorageService.get('configs.json') || '{}')
    if (configs === undefined) {
      await new Promise<void>((resolve) => setTimeout(resolve, 100))
      return this.getConfig<T>(key)
    }

    if (Object.keys(configs).includes(key)) {
      return configs[key]
    }

    if (Object.keys(import.meta.env).includes(key)) {
      return import.meta.env[key]
    }

    return undefined
  },
}
