import { useState, useEffect, useCallback } from 'react'

export function useTypingEffect(words: string[], typingSpeed = 80, deletingSpeed = 55, pauseDuration = 1400) {
  const [displayText, setDisplayText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const tick = useCallback(() => {
    const currentWord = words[wordIndex]

    if (!isDeleting) {
      setDisplayText(currentWord.slice(0, displayText.length + 1))
      if (displayText.length + 1 === currentWord.length) {
        setTimeout(() => setIsDeleting(true), pauseDuration)
        return
      }
    } else {
      setDisplayText(currentWord.slice(0, displayText.length - 1))
      if (displayText.length - 1 === 0) {
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % words.length)
        return
      }
    }
  }, [displayText, wordIndex, isDeleting, words, pauseDuration])

  useEffect(() => {
    const timeout = setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed)
    return () => clearTimeout(timeout)
  }, [tick, isDeleting, typingSpeed, deletingSpeed])

  return displayText
}
