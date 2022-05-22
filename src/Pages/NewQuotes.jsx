import { useHistory } from "react-router-dom"
import QuoteForm from "../components/quotes/QuoteForm"
import useHttp from "../hooks/use-http"

const NewQuotes = () => {
  useHttp()
  const history = useHistory()
  const addNewQuotesHandler = (quoteData) => {
    console.log(quoteData)
    history.push("/quotes")
  }
  return <QuoteForm onAddQuote={addNewQuotesHandler} />
}

export default NewQuotes
