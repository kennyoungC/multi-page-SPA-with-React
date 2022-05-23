import { Link } from "react-router-dom"
import { useRouteMatch } from "react-router-dom"
import { useParams, Route } from "react-router-dom"
import { useEffect } from "react"
import Comments from "../components/comments/Comments"
import HighlightedQuote from "../components/quotes/HighlightedQuote"
import useHttp from "../hooks/use-http"
import { getSingleQuote } from "../lib/api"
import LoadingSpinner from "../components/UI/LoadingSpinner"

const QuoteDetails = () => {
  const params = useParams()
  const match = useRouteMatch()

  const { quoteId } = params

  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getSingleQuote, true)

  useEffect(() => {
    sendRequest(quoteId)
  }, [sendRequest, quoteId])

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    )
  }
  if (error) {
    return <p className="centered">{error}</p>
  }

  // console.log(params.quoteId)
  // console.log(match)

  if (!loadedQuotes.text) {
    return <p>No quote found</p>
  }
  const { text, author } = loadedQuotes
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
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  )
}

export default QuoteDetails
