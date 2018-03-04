export interface AppointmentEditorConnectProps {
  isDisabled: boolean;
  isVisible: boolean;
  appointmentTitle: string;
  placeholderTitle: string;
  saveLabel: string;
}

export interface AppointmentEditorDispatchProps {
  onCloseSelected: () => void;
  onUpdateTitle: (title: string) => void;
  onSaveAppointment: () => void;
}

export interface AppointmentEditorProps
  extends AppointmentEditorConnectProps, AppointmentEditorDispatchProps {}