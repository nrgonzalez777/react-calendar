import * as React from 'react';
import { css, StyleSheet } from 'aphrodite';

export interface ChevronViewInputProps {
  direction: 'left' | 'right' | 'top' | 'bottom';
  color: string;
}

export interface ChevronViewOutputProps {
  onClick: () => void;
}

export interface ChevronViewProps
  extends ChevronViewInputProps,
    ChevronViewOutputProps {}

const ChevronView = (props: ChevronViewProps) => (
  <div
    className={css(
      styles.content,
      dynamicStyles(props.direction, props.color).direction
    )}
    onClick={props.onClick}
  />
);

const styles = StyleSheet.create({
  content: {
    cursor: 'pointer',
    display: 'inline-block',
    width: '15px',
    height: '15px'
  }
});

const dynamicStyles = (
  direction: 'left' | 'right' | 'top' | 'bottom',
  color: string
) => {
  const rotation = directionToRotation(direction);
  const rotateTransform = `rotate(${rotation}deg)`;

  return StyleSheet.create({
    direction: {
      borderRight: `4px solid ${color}`,
      borderBottom: `4px solid ${color}`,
      transform: rotateTransform,
      ':hover': {
        transform: `${rotateTransform} scale(1.1)`
      }
    }
  });
};

const directionToRotation = (
  direction: 'left' | 'right' | 'top' | 'bottom'
): number => {
  switch (direction) {
    case 'right':
      return -45;
    case 'top':
      return -135;
    case 'bottom':
      return 45;
    default:
      return 135;
  }
};

export default ChevronView;
