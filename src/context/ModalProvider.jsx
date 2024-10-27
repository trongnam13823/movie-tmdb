import { createContext, useContext, useState } from 'react'

const ModalContext = createContext()

export default function ModalProvider({ children }) {
  const [content, setContent] = useState(null)

  return (
    <ModalContext.Provider value={{ setContent }}>
      {children}
      <div
        onClick={() => setContent(null)}
        className={'fixed inset-0 z-50 bg-gray-950/60 grid place-items-center' + (content ? '' : ' hidden')}
      >
        {content}
      </div>
    </ModalContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useModalContext = () => useContext(ModalContext)
