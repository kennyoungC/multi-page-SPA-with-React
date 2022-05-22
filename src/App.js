import { Route } from "react-router-dom"
import { Switch } from "react-router-dom"
import AllQuotes from "./Pages/AllQuotes"
import QuoteDetails from "./Pages/QuoteDetails"
import NewQuote from "./Pages/NewQuotes"

function App() {
  return (
    <Switch>
      <Route path="/quotes" exact>
        <AllQuotes />
      </Route>
      <Route path="/quotes/:quoteId">
        <QuoteDetails />
      </Route>
      <Route path="/new-quotes">
        <NewQuote />
      </Route>
    </Switch>
  )
}

export default App
