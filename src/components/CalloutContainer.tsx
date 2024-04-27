import React, { ReactNode } from 'react';

const CalloutContainer = React.forwardRef<
HTMLDivElement,
// https://stackoverflow.com/a/69746922
// eslint-disable-next-line react/require-default-props
React.PropsWithChildren<{ children: ReactNode, type?: string }>
>((
  { children, type = 'container' },
  ref,
) => (
  <div className={`mk-callout-${type}`} ref={ref}>
    {children}
  </div>
));

export default CalloutContainer;
