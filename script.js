function showAnswer0() {
  let answerShow = document.getElementsByClassName('faq-answer_block')[0]
  let animateBlock = document.getElementsByClassName('faq-answer_block')[0]
  let changeableAnimPath = document.getElementsByClassName('changeable_svg')[0]
  let changeablePath = document.getElementsByClassName('changeable_path')[0]

  if (answerShow.style.display === 'none') {
    answerShow.style.display = 'block'
    animateBlock.animate({ opacity: [0.6, 1] }, 200)
    changeableAnimPath.animate({ opacity: [0.6, 1] }, 200)
    changeableAnimPath.setAttribute('width', '30px')
    changeablePath.setAttribute(
      'd',
      'M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z'
    )
  } else {
    answerShow.style.display = 'none'
    changeablePath.setAttribute(
      'd',
      'M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z'
    )
  }
}

function showAnswer1() {
  let answerShow = document.getElementsByClassName('faq-answer_block')[1]
  let animateBlock = document.getElementsByClassName('faq-answer_block')[1]
  let changeableAnimPath = document.getElementsByClassName('changeable_svg')[1]
  let changeablePath = document.getElementsByClassName('changeable_path')[1]

  if (answerShow.style.display === 'none') {
    answerShow.style.display = 'block'
    animateBlock.animate({ opacity: [0.6, 1] }, 200)
    changeableAnimPath.animate({ opacity: [0.6, 1] }, 200)
    changeableAnimPath.setAttribute('width', '30px')
    changeablePath.setAttribute(
      'd',
      'M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z'
    )
  } else {
    answerShow.style.display = 'none'
    changeablePath.setAttribute(
      'd',
      'M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z'
    )
  }
}
