import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import photos from './constants/photos.js'
import { useParams } from 'react-router-dom'
import './styles/gallery.scss'

function Gallery() {
  let { galleryId } = useParams()
  galleryId = Number(galleryId) - 1
  const images = photos[galleryId]
  return (
    <div className="container">
      <div className="row center">
        <div className="col-md-8 ">
          <ImageGallery items={images} lazyLoad={true} />
        </div>
      </div>
    </div>
  )
}

export default Gallery
