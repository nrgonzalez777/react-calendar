export type Strings = {
  appointmentEditor: AppointmentEditorStrings;
  dayAbbr: {
    sunday: string;
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
  };
};

export type AppointmentEditorStrings = {
  placeholderTitle: string;
  saveLabel: string;
  deleteLabel: string;
  startInvalidError: string;
  startPastError: string;
  startGreaterError: string;
  endInvalidError: string;
  endPastError: string;
  conflictErrorFormat: string;
};
