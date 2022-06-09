import { defineRule, configure } from 'vee-validate'

// rules:case1
// import AllRules from '@vee-validate/rules'

// rules:case2
import { required, email, max, min } from '@vee-validate/rules'

// i18n
import { localize, setLocale } from '@vee-validate/i18n'

// locale
import zh_TW from '@vee-validate/i18n/dist/locale/zh_TW.json';

export default () => {
  // rules:case1
  // Object.keys(AllRules).forEach(rule => {
  //   defineRule(rule, AllRules[rule])
  // })

  // rules:case2
  defineRule('required', required)
  defineRule('email', email)
  defineRule('max', max)
  defineRule('min', min)

  configure({
    generateMessage: localize({ zh_TW }),
    // validateOnInput: true
  })

  setLocale('zh_TW')
}
