import { Strings } from './state';

const en: Strings = {
  appointmentEditor: {
    placeholderTitle: 'Title required...',
    deleteLabel: 'Delete',
    saveLabel: 'Save',
    startInvalidError: 'Start time invalid',
    startPastError: 'Start must be in the future',
    startGreaterError: 'Start must be less than end',
    endInvalidError: 'End time invalid',
    endPastError: 'End must be in the future',
    conflictErrorFormat: 'Conflicts with '
  },
  dayAbbr: {
    sunday: 'Su',
    monday: 'M',
    tuesday: 'Tu',
    wednesday: 'W',
    thursday: 'Th',
    friday: 'F',
    saturday: 'Sa'
  }
};

export default en;