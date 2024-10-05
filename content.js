const changeAllLinks = () => {
  const links = document.querySelectorAll('a')
  for (let link of links) {
    link.src = 'javascript:alert("STOP PROPAGANDA")'
  }
}


const changeAllImages = () => {
  const images = document.querySelectorAll('img')
  for (let image of images) {
    image.src = 'https://via.placeholder.com/150'
    image.src = chrome.runtime.getURL('stop_propaganda.png')
  }
}


const changeAllTagsInner = () => {
  const tags = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a')
  for (let tag of tags) {
    tag.innerText = 'STOP PROPAGANDA'
  }
}

const changeTitle = () => {
  if (document.title === 'STOP PROPAGANDA') return
  document.title = 'STOP PROPAGANDA'
}

const main = async () => {
  changeAllLinks()
  changeAllTagsInner()
  changeAllImages()
}


setInterval(() => {
  try {
    main()
  } catch (e) {
  }
}, 200)
