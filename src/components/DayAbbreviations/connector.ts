import { connect } from 'react-redux';
import { AppState } from 'store/state';

import { DayAbbreviationsProps } from './props';
import { getDayAbbreviations } from './store/selectors';

const mapStateToProps = (state: AppState): DayAbbreviationsProps => ({
  abbreviations: getDayAbbreviations(state),
});

export default connect(mapStateToProps);