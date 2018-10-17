import * as React from 'react';
import { css, StyleSheet } from 'aphrodite';

export type DatetimePickerViewInputProps = {
  id: string;
  label: string;
  value: string;
};

export type DatetimePickerViewOutputProps = {
  onChange: (newValue: string) => void;
};

export type DatetimePickerViewProps = DatetimePickerViewInputProps &
  DatetimePickerViewOutputProps;

const DatetimePickerView = (props: DatetimePickerViewProps) => (
  <div className={css(styles.content)}>
    <label className={css(styles.label)} htmlFor="end">
      {props.label}
    </label>
    <input
      className={css(styles.datetime)}
      type="datetime-local"
      id={props.id}
      value={props.value}
      onChange={evt => props.onChange(evt.target.value)}
    />
  </div>
);

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flexDirection: 'column'
  },
  label: {
    fontSize: '14px'
  },
  datetime: {
    fontSize: '14px'
  }
});

export default DatetimePickerView;
