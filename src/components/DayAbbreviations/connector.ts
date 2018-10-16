import { connect } from 'react-redux';
import { AppState } from 'store/state';

import { getDayAbbreviations } from './store/selectors';
import { DayAbbreviationsViewProps } from './view';

const mapStateToProps = (state: AppState): DayAbbreviationsViewProps => ({
  abbreviations: getDayAbbreviations(state),
});

export default connect(mapStateToProps);