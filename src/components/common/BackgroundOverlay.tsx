import * as React from 'react';
import { css, StyleSheet } from 'aphrodite';

export type BackgroundOverlayViewInputProps = {
  children: React.ReactNode;
};

export type BackgroundOverlayViewOutputProps = {
  onClick: () => void;
};

export type BackgroundOverlayViewProps = BackgroundOverlayViewInputProps &
  BackgroundOverlayViewOutputProps;

const BackgroundOverlayView = (props: BackgroundOverlayViewProps) => (
  <div className={css(styles.content)}>
    <div className={css(styles.background)} onClick={props.onClick} />
    <div className={css(styles.children)}>{props.children}</div>
  </div>
);

const styles = StyleSheet.create({
  content: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  background: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  children: {
    position: 'relative'
  }
});

export default BackgroundOverlayView;
