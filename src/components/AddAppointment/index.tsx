import * as React from 'react';
import Plus from 'resources/icons/Plus';

import connector from './connector';
import { AddAppointmentProps } from './props';
import * as styles from './styles.css';

const AddAppointmentView = (props: AddAppointmentProps) => (
    <div className={styles.content} onClick={props.onAddAppointment}>
      <Plus />
    </div>
  );

export default connector(AddAppointmentView);