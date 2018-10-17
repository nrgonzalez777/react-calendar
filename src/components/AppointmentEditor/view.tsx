import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';

import Button from 'components/common/Button';
import DatetimePicker from 'components/common/DatetimePicker';
import Modal from 'components/common/Modal';

export type AppointmentEditorViewInputProps = {
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
};

export type AppointmentEditorViewOutputProps = {
  onCloseSelected: () => void;
  onUpdateTitle: (title: string) => void;
  onUpdateStart: (start: string) => void;
  onUpdateEnd: (end: string) => void;
  onSaveAppointment: () => void;
  onDeleteAppointment: () => void;
};

export type AppointmentEditorViewProps = AppointmentEditorViewInputProps &
  AppointmentEditorViewOutputProps;

const AppointmentEditorView = (props: AppointmentEditorViewProps) =>
  props.isVisible ? (
    <Modal onClose={props.onCloseSelected}>
      {{
        header: (
          <input
            className={css(styles.title)}
            type="text"
            autoFocus={true}
            placeholder={props.placeholderTitle}
            value={props.appointmentTitle}
            onChange={evt => props.onUpdateTitle(evt.target.value)}
          />
        ),
        content: (
          <React.Fragment>
            <DatetimePicker
              id="start"
              label="Start"
              value={props.appointmentStart}
              onChange={props.onUpdateStart}
            />
            <div className={css(styles.error)}>
              {props.appointmentStartError}
            </div>
            <DatetimePicker
              id="end"
              label="End"
              value={props.appointmentEnd}
              onChange={props.onUpdateEnd}
            />
            <div className={css(styles.error)}>{props.appointmentEndError}</div>
          </React.Fragment>
        ),
        actions: (
          <React.Fragment>
            <Button
              value={props.deleteLabel}
              onClick={props.onDeleteAppointment}
            />
            <Button
              classes={[styles.save]}
              value={props.saveLabel}
              disabled={props.isDisabled}
              onClick={props.onSaveAppointment}
            />
          </React.Fragment>
        )
      }}
    </Modal>
  ) : null;

const styles = StyleSheet.create({
  title: {
    color: 'white',
    width: '75%',
    '::placeholder': {
      color: 'white'
    }
  },
  save: {
    float: 'right'
  },
  error: {
    fontSize: '12px',
    height: '14px',
    color: 'red',
    marginTop: '5px',
    marginBottom: '15px'
  }
});

export default AppointmentEditorView;
