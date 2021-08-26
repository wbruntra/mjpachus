import { ProGallery } from 'pro-gallery'
import 'pro-gallery/dist/statics/main.css'
import photos from './constants/photos.js'

export default function Gallery() {
  const h = 800
  const w = 800

  // Add your images here...
  const photoSet = photos[0]
  const items = photoSet.slice(0, 8).map((photo) => {
    return {
      itemId: `id-${photo.thumbnail.slice(-15, -3)}`,
      mediaUrl: photo.thumbnail,
      metaData: {
        type: 'image',
        // height: 800,
        // width: 800,
        // title: 'sample-title',
        // description: 'sample-description',
        focalPoint: [0, 0],
        link: {
          url: photo.original,
          target: '_blank',
        },
      },
    }
  })

  // The options of the gallery (from the playground current state)
  const options = {
    galleryLayout: 3,
    cubeType: 'fit',
    hoveringBehaviour: 'NEVER_SHOW',
    useMaxDimensions: true,
  }

  // The size of the gallery container. The images will fit themselves in it
  const container = {
    width: window.innerWidth,
    height: window.innerHeight,
  }

  // The eventsListener will notify you anytime something has happened in the gallery.
  const eventsListener = (eventName, eventData) => console.log({ eventName, eventData })

  // The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here
  const scrollingElement = window

  return (
    <ProGallery
      items={items}
      options={options}
      container={container}
      eventsListener={eventsListener}
      scrollingElement={scrollingElement}
    />
  )
}

// Enjoy using your new gallery!
// For more options, visit https://github.com/wix/pro-gallery
