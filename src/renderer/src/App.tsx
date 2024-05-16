import { ActionButtonRow, Content, RootLayout, Sidebar } from '@/components'

const App = () => {
  return (
    <RootLayout>
      <Sidebar className="p-2 bg-zinc-900/50">
        <ActionButtonRow className="flex justify-between mt-1" />
      </Sidebar>
      <Content className="border-l bg-zinc-900/75 border-l-white/20">Content</Content>
    </RootLayout>
  )
}

export default App
