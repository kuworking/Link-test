import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { CssMasonry } from "../components/cssmasonry"

export default function Home() {
  const masonryProps = {
    columns: [
      ["(min-width: 1000px)", "(min-width: 800px)", "(min-width: 600px)"],
      [4, 4, 3],
      1,
    ],
    elements: items,
  }

  return (
    <Main>
      <Link to="/index2">Going to index2 with {`<LINK>`} that DOES NOT work</Link>
      <a href="/index2">Going to index2 with {`<A>`} that DOES work</a>
      <Div>
        <CssMasonry {...masonryProps}>
          {el => (
            <a href={el.link} target="_blank" rel="noopener noreferrer">
              <div>
                <div>{el.name}</div>
                <div>{el.description}</div>
              </div>
            </a>
          )}
        </CssMasonry>
      </Div>
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

const Div = styled.div`
  & .cssmasonry_masonry {
    position: relative;
    align-self: center;
    width: 100%;
    height: 100%;

    & > div {
      transition: transform 0.2s cubic-bezier(0.05, 0.9, 0.69, 0.96);
    }

    & .cssmasonry_masonry_element {
      position: absolute;

      & > div {
        padding: 10px;

        & > a {
          display: block;
          background: #ecece4;
          border-radius: 8px;
          padding: 10px;
        }
      }
    }
  }

  width: 100%;
`

const items = [
  {
    name: "blah",
    description: "blah",
  },
  {
    name: "blah",
    description: "blah",
  },
  {
    name: "blah",
    description: "blah",
  },
  {
    name: "blah",
    description: "blah",
  },
  {
    name: "blah",
    description: "blah",
  },
  {
    name: "blah",
    description: "blah",
  },
  {
    name: "blah",
    description: "blah",
  },
  {
    name: "blah",
    description: "blah",
  },
  {
    name: "blah",
    description: "blah",
  },
  {
    name: "blah",
    description: "blah",
  },
]
