import './styles/grayscale.css'
import './styles/grayscale-custom.scss'

import { useEffect, useState } from 'react'

import React from 'react'
import { Scrollchor } from 'react-scrollchor'
import SpainFlag from './img/spain-flag.png'
import UnionJack from './img/union-jack.png'
import pageTexts from './pageText'
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

  const texts = pageTexts

  return (
    <div>
      <nav className={`navbar navbar-custom navbar-fixed-top ${!atTop && 'top-nav-collapse'}`}>
        <div className="container">
          <div className="navbar-header">
            {/* <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-main-collapse"
            >
              Menu <i className="fa fa-bars" />
            </button> */}
            <Scrollchor to="#page-top" className="navbar-brand page-scroll">
              <span className="light">María Jesús</span> Peña
            </Scrollchor>
          </div>

          <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
            <ul className="nav navbar-nav">
              <li className="hidden">
                <a href="#page-top" />
              </li>
              <li>
                <Scrollchor to="#about" className="page-scroll">
                  Profile
                </Scrollchor>
              </li>
              <li>
                <Scrollchor to="#galleries" className="page-scroll">
                  Galleries
                </Scrollchor>
              </li>
              <li>
                <Scrollchor to="#follow" className="page-scroll">
                  Connect
                </Scrollchor>
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
                  {/* <a href="#about">
                  </a> */}
                  <Scrollchor to="#about" className="nav-link">
                    <i className="fa fa-angle-double-down animated" />
                  </Scrollchor>
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
                  alt={`flag-${language}`}
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
