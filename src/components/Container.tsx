import React, { FC, PropsWithChildren } from 'react';

const Container: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-screen min-[320px]:px-4 md:px-10 lg:px-24">
      {children}
    </div>
  );
};

export default Container;
