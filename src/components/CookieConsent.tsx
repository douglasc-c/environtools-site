import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const COOKIE_CONSENT_KEY = 'environtools-cookie-consent'

type ConsentChoice = 'accepted' | 'rejected'

interface CookieConsentProps {
  onChoice: (choice: ConsentChoice) => void
}

function CookieConsent({ onChoice }: CookieConsentProps) {
  const [choice, setChoice] = useState<ConsentChoice | null>(null)

  useEffect(() => {
    const savedChoice = window.localStorage.getItem(COOKIE_CONSENT_KEY)

    if (savedChoice === 'accepted' || savedChoice === 'rejected') {
      setChoice(savedChoice)
    }
  }, [])

  function handleChoice(nextChoice: ConsentChoice) {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, nextChoice)
    setChoice(nextChoice)
    onChoice(nextChoice)
  }

  if (choice) {
    return null
  }

  return (
    <aside
      className="cookie-consent"
      aria-labelledby="cookie-consent-title"
      role="dialog"
    >
      <div className="cookie-consent-copy">
        <span className="cookie-consent-label">Sua privacidade importa</span>
        <h2 id="cookie-consent-title">Podemos usar cookies?</h2>
        <p>
          Usamos cookies para entender como o site é utilizado e melhorar sua
          experiência. Você pode aceitar ou recusar a medição de navegação.
        </p>
        <Link className="cookie-consent-policy" to="/privacy-policy">
          Ler política de privacidade
        </Link>
      </div>

      <div className="cookie-consent-actions">
        <button
          className="btn btn-cookie-reject"
          type="button"
          onClick={() => handleChoice('rejected')}
        >
          Recusar
        </button>
        <button
          className="btn btn-cookie-accept"
          type="button"
          onClick={() => handleChoice('accepted')}
        >
          Aceitar cookies
        </button>
      </div>
    </aside>
  )
}

export default CookieConsent
