import SpainFlag from './img/spain-flag.png'
import UnionJack from './img/union-jack.png'

const pageText = {
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
          Black and white photography captures the essence of a scene without distraction, without
          words, without the need for superfluous ornamentation. The mere contrast between light
          and shadow is capable of expressing abstract concepts.
        </p>
        <p>
          Black and white represent the undeniable duality present in life as in the yin and yang,
          reality versus virtuality, dreams versus rationality.
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
          La fotografía en blanco y negro es capaz de captar el alma de la escena sin distracción,
          sin palabras, sin necesidad de adornos superfluos. Solo a través del contraste de la luz
          y la sombra, una imagen puede llegar a expresar conceptos abstractos.
        </p>
        <p>
          El blanco y el negro implica la dualidad incuestionablemente presente en la vida como el
          yin y el yang, la realidad versus la virtualidad, el sueño versus la razón. La
          efemeridad, realidad, paso del tiempo, evolución, arquitectura o simplemente la belleza
          de una flor es plasmada en su esencia, transformada, recreada, inmortalizada.
        </p>
        <p>
          Cada captura es el resultado de una reflexión crítica en busca de la esencia perdida, del
          conocimiento personal.
        </p>
      </>
    ),
  },
}

export default pageText