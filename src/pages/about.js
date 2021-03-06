import React from 'react'
import styled from 'styled-components'
import FlexContainer from '../components/flex-container'
import { TcifAnchor } from '../data/app-style'

const Post = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-bottom: 1rem;
  }
  small {
    color: #9a86ee;
  }
`

const About = () => (
  <FlexContainer
    renderMain={() => (
      <Post>
        <h2>
          {`About the blog`}
        </h2>
        <p>
          <strong>
            <em>
              {`Try Coding, It's Fun`}
            </em>
          </strong>
          {` is dedicated to helping developers, self-taught or otherwise, love what they code. We
          strongly identify with the idea that coding, no matter the discipline or nature, is an
          extension of what's on your mind, limited only by your own creativity.`}
        </p>
        <p>
          {`Coding is an art as much as it is a science. What you create may be technical and
          sophisticated in operation, beautiful and fluid in design, or any combination of both.
          Write code that makes you excited, and you'll love the creations that follow.`}
        </p>
        <h2>
          {`About the author`}
        </h2>
        <p>
          <TcifAnchor href="https://twitter.com/rreubenreyes">
            {`Reuben Reyes`}
          </TcifAnchor>
          {` is a self-taught developer with a passion for humoring his imagination, over-sharing what
          he's excited about, and writing sometimes unnecessarily complex code. His professional
          statement is something along the lines of "...translating minimalistic and steadfast
          design style into web platforms".`}
        </p>
        <p>
          {`Currently working on `}
          <em>
            <TcifAnchor href="https://ydkjs-exercises.com">
              {`YDKJS Exercises`}
            </TcifAnchor>
          </em>
          {` (open-source, contributors welcome!) and helping out with the East Bay React Meetup Group`}
          (
          <TcifAnchor href="https://discord.gg/efHguJS">
            {`Join us on Discord!`}
          </TcifAnchor>
          )
        </p>
      </Post>
    )}
    renderSidebar={() => (
      <div>
        <h4>
          {`Shameless plugs:`}
        </h4>
        <TcifAnchor href="https://reubenreyes.com">
          <small>
            {`More about the author`}
          </small>
        </TcifAnchor>
        <br />
        <TcifAnchor href="https://ydkjs-exercises.com">
          <small>
            {`YDKJS Exercises`}
          </small>
        </TcifAnchor>
        <br />
        <TcifAnchor href="https://www.meetup.com/East-Bay-React-Meetup-Group/">
          <small>
            {`East Bay React Meetup Group`}
          </small>
        </TcifAnchor>
      </div>
    )}
  />
)
export default About
