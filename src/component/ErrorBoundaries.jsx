

function ErrorBoundaries({error, resetErrorBoundary}) {
  return (
    <div role="alert">
      <p className="red-link">Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}
export default ErrorBoundaries;