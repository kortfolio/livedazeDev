import { compose } from 'recompose';

import { withStyles } from '@material-ui/core/styles';
import theme from './PomodoroTimer.styles';

export default compose(withStyles(theme));
