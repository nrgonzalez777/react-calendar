export interface AppointmentEditorConnectProps {
  isDisabled: boolean;
  isVisible: boolean;
  appointmentTitle: string;
  appointmentStart: string;
  appointmentStartError: string;
  appointmentEnd: string;
  appointmentEndError: string;
  placeholderTitle: string;
  deleteLabel: string;
  saveLabel: string;
}

export interface AppointmentEditorDispatchProps {
  onCloseSelected: () => void;
  onUpdateTitle: (title: string) => void;
  onUpdateStart: (start: string) => void;
  onUpdateEnd: (end: string) => void;
  onSaveAppointment: () => void;
  onDeleteAppointment: () => void;
}

export interface AppointmentEditorProps
  extends AppointmentEditorConnectProps, AppointmentEditorDispatchProps {}