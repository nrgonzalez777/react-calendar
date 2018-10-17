import * as React from 'react';
import { css, StyleSheet } from 'aphrodite';

import BackgroundOverlay from './BackgroundOverlay';
import Button from 'components/common/Button';
import CloseButton from 'components/common/CloseButton';
import colors from 'constants/colors';

export type ModalViewInputProps = {
  children: {
    header: React.ReactNode | string;
    content: React.ReactNode;
    actions?: React.ReactNode;
  };
};

export type ModalViewOutputProps = {
  onClose: () => void;
  onOKClicked?: () => void;
};

export type ModalViewProps = ModalViewInputProps & ModalViewOutputProps;

const ModalView = (props: ModalViewProps) => {
  let { actions, header } = props.children;

  if (typeof props.children.header === 'string') {
    header = <div className={css(styles.defaultHeaderText)}>{header}</div>;
  }

  if (!actions) {
    actions = (
      <Button
        classes={[styles.okButton]}
        value="OK"
        onClick={props.onOKClicked}
      />
    );
  }

  return (
    <BackgroundOverlay onClick={props.onClose}>
      <div className={css(styles.modal)}>
        <div className={css(styles.header)}>
          {header}
          <CloseButton onClick={props.onClose} />
        </div>
        <div className={css(styles.content)}>{props.children.content}</div>
        <div className={css(styles.actions)}>{actions}</div>
      </div>
    </BackgroundOverlay>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: colors.WHITE,
    display: 'flex',
    flexDirection: 'column',
    minWidth: '300px'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '40px',
    backgroundColor: colors.PRIMARY,
    paddingLeft: '15px',
    paddingRight: '15px'
  },
  defaultHeaderText: {
    color: colors.WHITE
  },
  content: {
    padding: '15px',
    flex: '1'
  },
  actions: {
    padding: '15px'
  },
  okButton: {
    float: 'right'
  }
});

export default ModalView;
