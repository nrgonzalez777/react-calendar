import { connect } from 'react-redux';
import { AppState } from 'store/state';

import selectors from '../../store/selectors';

import { DayAbbreviationsViewProps } from './view';

const mapStateToProps = (state: AppState): DayAbbreviationsViewProps => ({
  abbreviations: selectors.getDayAbbreviations(state)
});

export default connect(mapStateToProps);
