import * as Tabs from '@radix-ui/react-tabs'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const tabArr = [
  {
    name: 'All',
    value: 'all',
  },
  {
    name: 'Pending',
    value: 'pending',
  },
  {
    name: 'Completed',
    value: 'completed',
  },
]

const Index = () => {
  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="flex flex-col gap-10 rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>

        <div>
          <Tabs.Root defaultValue="all">
            <Tabs.List
              aria-label="todo status"
              className="flex items-center gap-2"
            >
              {tabArr.map((tab, index) => (
                <Tabs.Trigger
                  key={index}
                  value={tab.value}
                  className="rounded-full border border-gray-200 px-6 py-3 text-sm font-bold text-gray-700 data-[state=active]:bg-gray-700 data-[state=active]:text-white"
                >
                  {tab.name}
                </Tabs.Trigger>
              ))}
            </Tabs.List>
            {tabArr.map((tab, index) => (
              <Tabs.Content key={index} value={tab.value}>
                <div className="pt-10">
                  <TodoList tabValue={tab.value} />
                </div>
              </Tabs.Content>
            ))}
          </Tabs.Root>
        </div>

        <div>
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
