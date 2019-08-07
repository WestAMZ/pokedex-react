
export const config = {
    rootMargin: '600px',
    threshold: 0.5
  }
  
  export default function lazyLoadImage(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target)
        entry.target.src = entry.target.dataset.src
      }
    })
  }
/*
  height de img =  200
  we will load the images when they are at 600 px 
  so that they are visible
*/ 