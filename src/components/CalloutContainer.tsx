import React, { ReactNode } from 'react';

const CalloutContainer = React.forwardRef<
HTMLDivElement,
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
