import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

export default function Home() {
  return (
    <Main>
      <Link to="/">Link to main</Link>
      <a href="/">a to main</a>
    </Main>
  )
}

const Main = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  & > a {
    width: 100px;
    background: #efb5b5;
    padding: 30px;
    border-radius: 8px;
    margin: 10px;
  }
`
