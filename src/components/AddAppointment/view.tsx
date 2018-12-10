import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';

import Plus from 'resources/icons/Plus';

export type AddAppointmentViewProps = {
  onAddAppointment: () => void;
};

const AddAppointmentView = (props: AddAppointmentViewProps) => (
  <div className={css(styles.content)} onClick={props.onAddAppointment}>
    <Plus />
  </div>
);

const styles = StyleSheet.create({
  content: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: 'red',
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    ':hover': {
      transform: 'scale(1.1)'
    }
  }
});

export default AddAppointmentView;
