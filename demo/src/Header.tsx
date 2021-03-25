import React, { useEffect, useRef } from "react"
import { css } from "@emotion/react"
import { raf } from "./utils"
import Navigation from "./Navigation"

const emojis = [..."🌈🌼🌸🍔🍟🍕🌮🥞🥐🌭🍫🍩🍪🍿🍣🥪🍜🥟🍬🍮💛💖🥡💊🎁🎀"]

function randomEmoji() {
  return emojis[Math.floor(Math.random() * emojis.length)]
}

function useEmojiEffect() {
  const elt = useRef<HTMLElement>(null)

  useEffect(() => {
    const stop = raf(() => {
      if (elt.current) {
        elt.current.innerHTML = randomEmoji()
      }
    }, 1000 / 2)

    return stop
  }, [])

  return elt
}

function Header() {
  return (
    <header
      css={css`
        position: relative;
        padding: 0 0 60px;
      `}
    >
      <Navigation />
      <Title />
      <Description />
    </header>
  )
}

function Title() {
  const emojiElt = useEmojiEffect()
  return (
    <h1
      title="useNft()"
      css={css`
        margin-top: 24px;
        font-size: 40px;
        text-align: center;
      `}
    >
      let{" "}
      <span
        ref={emojiElt}
        css={css`
          display: inline-block;
          width: 50px;
          text-align: center;
        `}
      >
        {randomEmoji()}
      </span>{" "}
      = useNft(address, id)
    </h1>
  )
}

function Description() {
  return (
    <p
      css={css`
        margin: 12px 0 0;
        text-align: center;
      `}
    >
      Fetch NFTs from React − no matter how they were minted.
    </p>
  )
}

export default Header
