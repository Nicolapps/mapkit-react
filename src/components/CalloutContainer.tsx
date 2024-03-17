import React, { ReactNode } from 'react';

const CalloutContainer = React.forwardRef((
  { children, type = 'container' }: { children: ReactNode, type?: string },
  ref,
) => (
  <div className={`mk-callout-${type}`} ref={ref}>
    {children}
  </div>
));

export default CalloutContainer;
