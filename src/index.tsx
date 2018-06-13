import * as React from 'react'
import { render } from 'react-dom'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import RefreshIcon from '@material-ui/icons/Refresh'

const App = () => (
  <div>
    <h1>App</h1>
    <Tooltip title="Refresh">
      <IconButton aria-label="Refresh">
        <RefreshIcon />
      </IconButton>
    </Tooltip>
  </div>
)

render(<App />, document.getElementById('app'))
