
interface HeaderProps {
  title?: string
}

function Header({ title = "" }: HeaderProps) {
  return (
    <div className="h-16 bg-blue-700 w-screen flex">
      
      {title}
    </div>
  )
}

function App() {
  return (
    <div>
      <Header title="1234" />
    </div>
  )
}

export default App
