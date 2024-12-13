import React from "react"
import Home from "./Pages/Home"
import { ThemeProvider } from "./context"
export default function App() {
  return (
    <ThemeProvider>
    <Home/>
    </ThemeProvider>
    )
}