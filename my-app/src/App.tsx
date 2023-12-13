import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import Demo from "./components/Demo";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  const [showDemo, setShowDemo] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <button onClick={() => setShowDemo(!showDemo)}>Toggle Demo</button>
      {showDemo && <Demo />}
    </QueryClientProvider>
  );
}

export default App;