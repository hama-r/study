import { setting } from '../../site.config.json'
import SmoothScroll from 'smooth-scroll'
import Naraden from './Naraden.js'

document.addEventListener('DOMContentLoaded', () => {
  const scr = new SmoothScroll('a[href*="#"]', setting.scroll) // eslint-disable-line no-unused-vars
  const nara = new Naraden()
  // document
  //   .querySelector('input[name="kWh-A"]')
  //   .addEventListener('change', (e) => {
  //     nara.check({
  //       inp: e.target,
  //       naradenSum: document.querySelectorAll('.naraden-sum'),
  //       kandenSum: document.querySelectorAll('.kanden-sum'),
  //       naradenSumOtoku: document.querySelectorAll('.naraden-sum-otoku'),
  //       kandenSumOtoku: document.querySelectorAll('.kanden-sum-otoku')
  //     })
  //   })
  Array.from(document.querySelectorAll('input[name="kWh-A"]')).forEach((el) => {
    el.addEventListener('change', (e) => {
      Array.from(document.querySelectorAll('input[name="kWh-A"]')).forEach(
        (el2) => {
          el2.value = e.target.value
        }
      )
      nara.check({
        inp: e.target,
        result: document.querySelectorAll('.electricbill__simulation__result'),
        naradenSum: document.querySelectorAll('.naraden-sum'),
        kandenSum: document.querySelectorAll('.kanden-sum'),
        naradenSumOtoku: document.querySelectorAll('.naraden-sum-otoku'),
        kandenSumOtoku: document.querySelectorAll('.kanden-sum-otoku'),
      })
    })
  })
})

document.addEventListener('DOMContentLoaded', () => {
  // トリガークラス'.qa-list-box__contents__ttl'を持つ要素を取得
  const accordionTrigger = document.querySelectorAll(
    '.qa-list-box__contents__ttl'
  )

  for (let i = 0; i < accordionTrigger.length; i++) {
    // '.is-opened'がついていて展開している要素に高さを付加
    if (accordionTrigger[i].classList.contains('is-opened')) {
      // scrollHeightプロパティはpaddingを含む表示されていない要素の高さを取得
      accordionTrigger[i].nextElementSibling.style.height =
        accordionTrigger[i].nextElementSibling.scrollHeight + 'px'
    }

    // トリガーを押した時のアクション
    accordionTrigger[i].addEventListener('click', (e) => {
      // クリックされた要素（トリガー要素）を取得
      let currentElement = e.currentTarget

      // 同じ親要素を持つ隣接した次の要素'.js-accordion-target'（展開対象の要素）を取得
      let accordionTarget = currentElement.nextElementSibling

      if (accordionTarget.style.height) {
        //トリガーの'is-opened'クラスを削除
        currentElement.classList.remove('is-opened')
        //
        accordionTarget.style.height = null
      } else {
        //トリガーの'is-opened'クラスを追加
        currentElement.classList.add('is-opened')

        // scrollHeightプロパティはpaddingを含む表示されていない要素の高さを取得
        accordionTarget.style.height = accordionTarget.scrollHeight + 'px'
      }
    })
  }
})

// イージング関数
var Ease = {
  easeInOut: (t) =>
    t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
}

// アニメーションの Duration の設定
var duration = 500

window.addEventListener('DOMContentLoaded', () => {
  // スムーススクロールのトリガーを取得
  var smoothScrollTriggers = document.querySelectorAll('a[href^="#"]')

  smoothScrollTriggers.forEach(function (smoothScrollTrigger) {
    // トリガーをクリックした時に実行
    smoothScrollTrigger.addEventListener('click', function (e) {
      // href属性の値を取得
      var href = smoothScrollTrigger.getAttribute('href')

      // 現在のスクロール位置を取得（クロスブラウザに対応）
      var currentPostion =
        document.documentElement.scrollTop || document.body.scrollTop

      // スクロール先の要素を取得
      var targetElement = document.getElementById(href.replace('#', ''))

      // スクロール先の要素が存在する場合はスムーススクロールを実行
      if (targetElement) {
        // デフォルトのイベントアクションをキャンセル
        e.preventDefault()
        e.stopPropagation()

        // スクロール先の要素の位置を取得
        var targetPosition =
          window.pageYOffset + targetElement.getBoundingClientRect().top - 115 // headerと余白の分だけずらす

        // スタート時点の時間を取得
        var startTime = performance.now()

        // アニメーションのループを定義
        var loop = function (nowTime) {
          // スタートからの経過時間を取得
          var time = nowTime - startTime

          // duration を1とした場合の経過時間を計算
          var normalizedTime = time / duration

          // duration に経過時間が達していない場合はアニメーションを実行
          if (normalizedTime < 1) {
            // 経過時間とイージングに応じてスクロール位置を変更
            window.scrollTo(
              0,
              currentPostion +
                (targetPosition - currentPostion) *
                  Ease.easeInOut(normalizedTime)
            )

            // アニメーションを継続
            requestAnimationFrame(loop)

            // duration に経過時間が達したら、アニメーションを終了
          } else {
            window.scrollTo(0, targetPosition)
          }
        }

        // アニメーションをスタート
        requestAnimationFrame(loop)
      }
    })
  })
})
