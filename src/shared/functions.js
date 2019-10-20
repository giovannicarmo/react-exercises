import React from 'react';

export function childrensWhitProps(props) {
  return React.Children.map(props.children, child => {
    return React.cloneElement(child, { ...props });
  });
}
