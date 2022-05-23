import React, { Suspense } from "react"
import { Route, Routes, Navigate, Link } from "react-router-dom"

// import AllQuotes from "./Pages/AllQuotes"
// import QuoteDetail from "./Pages/QuoteDetail"
// import NewQuotes from "../src/Pages/NewQuotes"
// import NotFound from "./Pages/NotFound"
import Layout from "./components/layout/Layout"
import Comments from "./components/comments/Comments"
import LoadingSpinner from "./components/UI/LoadingSpinner"

const AllQuotes = React.lazy(() => import("./Pages/AllQuotes"))
const QuoteDetail = React.lazy(() => import("./Pages/QuoteDetail"))
const NotFound = React.lazy(() => import("./Pages/NotFound"))
const NewQuotes = React.lazy(() => import("../src/Pages/NewQuotes"))

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Navigate replace to="/quotes" />} />
          <Route path="/quotes" element={<AllQuotes />} />
          <Route path="/quotes/:quoteId" element={<QuoteDetail />}>
            <Route
              path=""
              element={
                <div className="centered">
                  <Link className="btn--flat" to={`comments`}>
                    Load Comments
                  </Link>
                </div>
              }
            />
            <Route path={`comments`} element={<Comments />} />
          </Route>
          <Route path="/new-quote" element={<NewQuotes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}

export default App
