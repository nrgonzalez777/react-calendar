import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';

import Close from 'resources/icons/Close';

export interface AppointmentEditorViewInputProps {
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

export interface AppointmentEditorViewOutputProps {
  onCloseSelected: () => void;
  onUpdateTitle: (title: string) => void;
  onUpdateStart: (start: string) => void;
  onUpdateEnd: (end: string) => void;
  onSaveAppointment: () => void;
  onDeleteAppointment: () => void;
}

export interface AppointmentEditorViewProps
  extends AppointmentEditorViewInputProps, AppointmentEditorViewOutputProps {}

const AppointmentEditorView = (props: AppointmentEditorViewProps) =>
props.isVisible ? (
    <div className={css(styles.content)}>
      <div className={css(styles.background)} onClick={props.onCloseSelected}/>
      <div className={css(styles.modal)}>
        <div className={css(styles.header)}>
          <input
            className={css(styles.title)}
            type="text"
            autoFocus={true}
            placeholder={props.placeholderTitle}
            value={props.appointmentTitle}
            onChange={evt => props.onUpdateTitle(evt.target.value)}
          />
          <div className={css(styles.close)} onClick={props.onCloseSelected}>
            <Close />
          </div>
        </div>
        <div className={css(styles.form)}>
          <label htmlFor="start">Start</label>
          <input
            className={css(styles.datetime)}
            type="datetime-local"
            id="start"
            value={props.appointmentStart}
            onChange={evt => props.onUpdateStart(evt.target.value)}
          />
          <div className={css(styles.error)}>{props.appointmentStartError}</div>
          <label htmlFor="end">End</label>
          <input
            className={css(styles.datetime)}
            type="datetime-local"
            id="end"
            value={props.appointmentEnd}
            onChange={evt => props.onUpdateEnd(evt.target.value)}
          />
          <div className={css(styles.error)}>{props.appointmentEndError}</div>
          <input
            type="button"
            className={css(styles.delete)}
            value={props.deleteLabel}
            onClick={props.onDeleteAppointment}
          />
          <input
            type="button"
            className={css(styles.save)}
            value={props.saveLabel}
            disabled={props.isDisabled}
            onClick={props.onSaveAppointment}
          />
        </div>
      </div>
    </div>
) : null;

const styles = StyleSheet.create({
  content: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modal: {
    position: 'relative',
    backgroundColor: 'white',
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '40px',
    backgroundColor: '#00add7',
    paddingLeft: '15px',
    paddingRight: '15px',
  },
  title: {
    color: 'white',
    width: '75%',
    '::placeholder': {
      color: 'white',
    },
  },
  close: {
    cursor: 'pointer',
  },
  form: {
    padding: '15px',
    flex: '1',
  },
  label: {
    fontSize: '14px',
  },
  datetime: {
    width: '75%',
    fontSize: '14px',
    marginRight: '25%',
  },
  delete: {
    backgroundColor: '#00add7',
    color: 'white',
    padding: '5px 10px',
    cursor: 'pointer',
    ':disabled': {
      backgroundColor:  'rgba(209, 214, 221, 0.5)',
      cursor: 'default',
    },
    ':hover': {
      transform: 'scale(1.1)',
    },
    ':hover:disabled': {
      transform: 'scale(1)',
    },
  },
  save: {
    float: 'right',
    backgroundColor: '#00add7',
    color: 'white',
    padding: '5px 10px',
    cursor: 'pointer',
    ':disabled': {
      backgroundColor:  'rgba(209, 214, 221, 0.5)',
      cursor: 'default',
    },
    ':hover': {
      transform: 'scale(1.1)',
    },
    ':hover:disabled': {
      transform: 'scale(1)',
    },
  },
  error: {
    fontSize: '12px',
    height: '14px',
    color: 'red',
    marginTop: '5px',
    marginBottom: '15px',
  },
});

export default AppointmentEditorView;