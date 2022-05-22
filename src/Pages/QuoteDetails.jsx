import { Link } from "react-router-dom"
import { useRouteMatch } from "react-router-dom"
import { useParams, Route } from "react-router-dom"
import Comments from "../components/comments/Comments"
import HighlightedQuote from "../components/quotes/HighlightedQuote"

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun" },
  { id: "q2", author: "Kenneth", text: "Better Days Ahead" },
  { id: "q3", author: "Favour", text: "Live With a Purpose" },
]

const QuoteDetails = () => {
  const param = useParams()
  const match = useRouteMatch()
  console.log(param.quoteId)
  console.log(match)
  const currentQuote = DUMMY_QUOTES.find((quote) => quote.id === param.quoteId)
  if (!currentQuote) {
    return <p>No quote found</p>
  }
  const { text, author } = currentQuote
  return (
    <>
      <HighlightedQuote text={text} author={author} />
      <Route path={match.path} exact>
        <div className="centered">
          {" "}
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Show Comments
          </Link>
        </div>
      </Route>
      <Route path={`/quotes/${param.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  )
}

export default QuoteDetails
