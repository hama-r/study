// import $ from 'jquery'

export default class {
  constructor () {
    this.NGsum = 0
    this.KGsum = 0
    this.NGsum12 = 0
    this.KGsum12 = 0
  }
  check (obj) {
    if (obj.inp.value === '') {
      window.alert('電力使用量をご入力ください。')
      return false
    } else if (obj.inp.value.match(/[^0-9]/g)) {
      window.alert('半角数字でご入力お願いします。')
      return false
    }
    // const inpinp = Array.from(document.querySelectorAll('' + obj.inp))
    // inpinp.forEach(el => {
    //   el.value = obj.inp.value
    // })
    // -----計算結果表示-----
    const nsum = obj.inp.value
    // 奈良電力計算
    let nwsum = 0
    nwsum = +333.71
    if (nsum > 15) {
      if (nsum <= 120) {
        nwsum = nwsum + (nsum - 15) * 20.12
      } else {
        nwsum = nwsum + (120 - 15) * 20.12
      }
    }
    if (nsum > 120) {
      if (nsum <= 200) {
        nwsum = nwsum + (nsum - 120) * 26.67
      } else {
        nwsum = nwsum + (200 - 120) * 26.67
      }
    }
    if (nsum > 200) {
      if (nsum <= 300) {
        nwsum = nwsum + (nsum - 200) * 21.33
      } else {
        nwsum = nwsum + (300 - 200) * 21.33
      }
    }
    if (nsum > 300) {
      nwsum = nwsum + (nsum - 300) * 24.39
    }

    nwsum = Math.floor(nwsum)

    this.NGsum = nwsum
    this.NGsum12 = this.NGsum * 12

    // 関電電力計算
    let ksum = nsum
    let kwsum = 0

    kwsum = +341.02

    if (ksum > 15) {
      if (ksum <= 120) {
        kwsum = kwsum + (ksum - 15) * 20.32
      } else {
        kwsum = kwsum + (120 - 15) * 20.32
      }
    }
    if (ksum > 120) {
      if (ksum <= 300) {
        kwsum = kwsum + (ksum - 120) * 25.8
      } else {
        kwsum = kwsum + (300 - 120) * 25.8
      }
    }
    if (ksum > 300) {
      kwsum = kwsum + (ksum - 300) * 29.29
    }

    kwsum = Math.floor(kwsum)
    this.KGsum = kwsum
    this.KGsum12 = this.KGsum * 12

    // -----合計額を計算-----
    // 月間節約額
    let otoku = this.KGsum - this.NGsum
    // 年間節約額
    let notoku = this.KGsum12 - this.NGsum12

    this.NGsum = this.NGsum.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
    this.KGsum = this.KGsum.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
    const addText = '円'

    // 月間電気料金
    // const hoges = Array.from(naradenSum)
    Array.from(obj.naradenSum).forEach(el => {
      el.innerHTML = this.NGsum + addText
    })
    Array.from(obj.kandenSum).forEach(el => {
      el.innerHTML = this.KGsum + addText
    })
    // 月間節約額
    otoku = otoku.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
    Array.from(obj.naradenSumOtoku).forEach(el => {
      el.innerHTML = '<span>' + otoku + addText + '</span>'
    })
    // 年間節約額
    notoku = notoku.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
    Array.from(obj.kandenSumOtoku).forEach(el => {
      el.innerHTML = '<span>' + notoku + addText + '</span>'
    })
    Array.from(obj.result).forEach(el => {
      console.log(el)
      el.classList.add('is-active')
    })
  }
}
