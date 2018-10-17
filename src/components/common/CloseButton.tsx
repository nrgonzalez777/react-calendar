import * as React from 'react';
import { css, StyleSheet, StyleDeclarationValue } from 'aphrodite';

import Close from 'resources/icons/Close';

export type CloseButtonViewInputProps = {
  classes?: StyleDeclarationValue[];
};

export type CloseButtonViewOutputProps = {
  onClick: () => void;
};

export type CloseButtonViewProps = CloseButtonViewInputProps &
  CloseButtonViewOutputProps;

const CloseButtonView = (props: CloseButtonViewProps) => (
  <div
    className={css(styles.content, ...(props.classes ? props.classes : []))}
    onClick={props.onClick}
  >
    <Close />
  </div>
);

const styles = StyleSheet.create({
  content: {
    cursor: 'pointer',
    ':hover': {
      transform: 'scale(1.1)'
    }
  }
});

export default CloseButtonView;
