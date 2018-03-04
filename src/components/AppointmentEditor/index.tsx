import * as React from 'react';
import Close from 'resources/icons/Close';

import connector from './connector';
import { AppointmentEditorProps } from './props';
import * as styles from './styles.css';

const AppointmentEditorView = (props: AppointmentEditorProps) =>
props.isVisible ? (
    <div className={styles.content}>
      <div className={styles.background} onClick={props.onCloseSelected}/>
      <div className={styles.modal}>
        <div className={styles.header}>
          <input
            className={styles.title}
            type="text"
            autoFocus={true}
            placeholder={props.placeholderTitle}
            onChange={evt => props.onUpdateTitle(evt.target.value)}
          />
          <div className={styles.close} onClick={props.onCloseSelected}>
            <Close />
          </div>
        </div>
        <div className={styles.form}>
          <label htmlFor="start">Start</label>
          <input className={styles.datetime} type="datetime-local" id="start" />
          <label htmlFor="end">End</label>
          <input className={styles.datetime} type="datetime-local" id="end" />
          <input
            type="button"
            className={styles.save}
            value={props.saveLabel}
            disabled={props.isDisabled}
            onClick={props.onSaveAppointment}
          />
        </div>
      </div>
    </div>
) : null;

export default connector(AppointmentEditorView);