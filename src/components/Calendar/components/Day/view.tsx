import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';

import colors from 'constants/colors';

export type DayViewInputProps = {
  dayId: string;
  dayOfMonth: number;
  hasAppointment: boolean;
  isCurrentDay: boolean;
  isSelectedDay: boolean;
  isDayOutOfSelectedMonth: boolean;
};

export type DayViewOutputProps = {
  onDaySelected: (dayId: string) => void;
};

export type DayProps = DayViewInputProps & DayViewOutputProps;

const DayView = (props: DayProps) => {
  return (
    <div
      className={css(
        styles.content,
        props.isDayOutOfSelectedMonth ? styles.dayOutOfMonth : null
      )}
    >
      <div
        className={css(
          styles.day,
          props.isCurrentDay ? styles.dayCurrent : null,
          props.isSelectedDay ? styles.daySelected : null
        )}
        onClick={() => props.onDaySelected(props.dayId)}
      >
        {props.dayOfMonth}
      </div>
      {props.hasAppointment ? (
        <div className={css(styles.hasAppointment)} />
      ) : null}
    </div>
  );
};

const styles = StyleSheet.create({
  content: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: '1 0 100px',
    height: '100px'
  },
  dayOutOfMonth: {
    backgroundColor: colors.BACKGROUND_GRAY
  },
  day: {
    color: 'black',
    borderRadius: '50%',
    width: '60%',
    height: '60%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ':hover': {
      cursor: 'pointer',
      backgroundColor: 'rgba(39, 46, 57, 0.1)'
    }
  },
  dayCurrent: {
    color: colors.PRIMARY
  },
  daySelected: {
    color: colors.WHITE,
    backgroundColor: colors.PRIMARY,
    ':hover': {
      color: colors.WHITE,
      backgroundColor: colors.PRIMARY
    }
  },
  hasAppointment: {
    position: 'absolute',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    bottom: '25%',
    backgroundColor: '#3fd83f'
  }
});

export default DayView;
