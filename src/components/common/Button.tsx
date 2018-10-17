import * as React from 'react';
import { css, StyleSheet, StyleDeclarationValue } from 'aphrodite';

export type ButtonViewInputProps = {
  classes?: StyleDeclarationValue[];
  disabled?: boolean;
  value: string;
};

export type ButtonViewOutputProps = {
  onClick?: () => void;
};

export type ButtonViewProps = ButtonViewInputProps & ButtonViewOutputProps;

const ButtonView = (props: ButtonViewProps) => (
  <input
    type="button"
    className={css(styles.button, ...(props.classes ? props.classes : []))}
    disabled={props.disabled}
    value={props.value}
    onClick={props.onClick}
  />
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#00add7',
    color: 'white',
    padding: '5px 10px',
    cursor: 'pointer',
    ':disabled': {
      backgroundColor: 'rgba(209, 214, 221, 0.5)',
      cursor: 'default'
    },
    ':hover': {
      transform: 'scale(1.1)'
    },
    ':hover:disabled': {
      transform: 'scale(1)'
    }
  }
});

export default ButtonView;
