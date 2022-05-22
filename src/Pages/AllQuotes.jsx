import QuoteList from "../components/quotes/QuoteList"

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun" },
  { id: "q2", author: "Kenneth", text: "Better Days Ahead" },
  { id: "q3", author: "Favour", text: "Live With a Purpose" },
]

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />
}

export default AllQuotes
