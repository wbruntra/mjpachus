import { useState, useEffect } from 'react'
import './styles/grayscale.css'
import './styles/grayscale-custom.scss'
import SpainFlag from './img/spain-flag.png'
import UnionJack from './img/union-jack.png'
import { useScrollYPosition } from 'react-use-scroll-position'

function App() {
  const [atTop, setAtTop] = useState(true)
  const scrollY = useScrollYPosition()
  const [language, setLanguage] = useState('en')

  const toggleLanguage = () => {
    if (language === 'es') {
      setLanguage('en')
    } else {
      setLanguage('es')
    }
  }

  useEffect(() => {
    if (scrollY < 50) {
      setAtTop(true)
    } else {
      setAtTop(false)
    }
  }, [scrollY])

  const texts = {
    en: {
      otherFlag: SpainFlag,
      intro: (
        <p className="intro-text">
          Beauty is in the
          <br />
          eye of the beholder
        </p>
      ),
      middle: (
        <>
          <p>
            Black and white photography captures the essence of a scene without distraction,
            without words, without the need for superfluous ornamentation. The mere contrast
            between light and shadow is capable of expressing abstract concepts.
          </p>
          <p>
            Black and white represent the undeniable duality present in life as in the yin and
            yang, reality versus virtuality, dreams versus rationality.
          </p>
          <p>
            Each shot is the result of critical reflection in search of lost essence and
            self-knowledge.
          </p>
        </>
      ),
    },
    es: {
      otherFlag: UnionJack,
      intro: (
        <p class="intro-text">
          La belleza está
          <br />
          en los ojos del que mira
        </p>
      ),
      middle: (
        <>
          <p>
            La fotografía en blanco y negro es capaz de captar el alma de la escena sin
            distracción, sin palabras, sin necesidad de adornos superfluos. Solo a través del
            contraste de la luz y la sombra, una imagen puede llegar a expresar conceptos
            abstractos.
          </p>
          <p>
            El blanco y el negro implica la dualidad incuestionablemente presente en la vida como
            el yin y el yang, la realidad versus la virtualidad, el sueño versus la razón. La
            efemeridad, realidad, paso del tiempo, evolución, arquitectura o simplemente la belleza
            de una flor es plasmada en su esencia, transformada, recreada, inmortalizada.
          </p>
          <p>
            Cada captura es el resultado de una reflexión crítica en busca de la esencia perdida,
            del conocimiento personal.
          </p>
        </>
      ),
    },
  }

  return (
    <div>
      <nav className={`navbar navbar-custom navbar-fixed-top ${!atTop && 'top-nav-collapse'}`}>
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-main-collapse"
            >
              Menu <i className="fa fa-bars" />
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              <span className="light">María Jesús</span> Peña
            </a>
          </div>

          <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
            <ul className="nav navbar-nav">
              <li className="hidden">
                <a href="#page-top" />
              </li>
              <li>
                <a className="page-scroll" href="#about">
                  Profile
                </a>
              </li>
              <li>
                <a className="page-scroll" href="#galleries">
                  Galleries
                </a>
              </li>
              <li>
                <a className="page-scroll" href="#follow">
                  Connect
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="intro">
        <div className="intro-body">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <h1 className="brand-heading">Pachus</h1>
                {texts[language].intro}
                <button className="btn btn-circle page-scroll">
                  <a href="#about">
                    <i className="fa fa-angle-double-down animated" />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="about" className="container content-section text-center">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2">
            <h2>Profile</h2>
            <p>
              <a href="/#about">
                <img
                  className="flag"
                  onClick={() => {
                    toggleLanguage()
                  }}
                  alt="spanish-flag"
                  src={texts[language].otherFlag}
                />
              </a>
            </p>
            {texts[language].middle}
          </div>
        </div>
      </section>
      <section id="galleries" className="content-section text-center">
        <div className="download-section">
          <div className="container">
            <div className="col-lg-8 col-lg-offset-2">
              <h2>Galleries</h2>
              <ul className="list-inline col-xs-offset-1">
                <li className="col-xs-3">
                  <a href="/gallery/1">
                    <img
                      alt="cover-one"
                      src={`https://yandry5579nervous.s3.amazonaws.com/img/portfolio/1/thumbs/IMG_8512.JPG`}
                    />
                  </a>
                </li>
                <li className="col-xs-3 col-xs-offset-1">
                  <a href="/gallery/2">
                    <img
                      alt="cover-two"
                      src={`https://yandry5579nervous.s3.amazonaws.com/img/portfolio/2/thumbs/IMG_7883.JPG`}
                    />
                  </a>
                </li>
                <li className="col-xs-3 col-xs-offset-1">
                  <a href="/gallery/3">
                    <img
                      alt="cover-three"
                      src={`https://yandry5579nervous.s3.amazonaws.com/img/portfolio/3/thumbs/IMG_0484.JPG`}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="follow" className="container content-section text-center">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2">
            <h2>Follow</h2>
            <p>Follow me on social media</p>

            <ul className="list-inline banner-social-buttons">
              <li>
                <a href="https://twitter.com/Albajana2013" className="btn btn-default btn-lg">
                  <i className="fa fa-twitter fa-fw" />{' '}
                  <span className="network-name">Twitter</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/maria_bnw/" className="btn btn-default btn-lg">
                  <i className="fa fa-instagram fa-fw" />{' '}
                  <span className="network-name">Instagram</span>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/pachus74" className="btn btn-default btn-lg">
                  <i className="fa fa-facebook fa-fw" />{' '}
                  <span className="network-name">Facebook</span>
                </a>
              </li>
            </ul>
            <p>
              <a href="mailto:mjpenamillan@gmail.com">Email me</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
