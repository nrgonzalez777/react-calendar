export interface AppointmentEditorConnectProps {
  isVisible: boolean;
}

export interface AppointmentEditorDispatchProps {
  onCloseSelected: () => void;
}

export interface AppointmentEditorProps
  extends AppointmentEditorConnectProps, AppointmentEditorDispatchProps {}