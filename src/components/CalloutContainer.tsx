import React, { ReactNode } from 'react';

const CalloutContainer = React.forwardRef((
  { children }: { children: ReactNode },
  ref,
) => (
  <div className="mk-callout-container" ref={ref}>
    {children}
  </div>
));

export default CalloutContainer;
