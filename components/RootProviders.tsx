import { Provider as ReduxProvider } from 'react-redux'

import store from 'lib/config/redux/store'

type Props = {
  children: React.ReactElement | React.ReactElement[]
}

export default function RootProviders({ children }: Props) {
  return <ReduxProvider store={store}>{children}</ReduxProvider>
}
