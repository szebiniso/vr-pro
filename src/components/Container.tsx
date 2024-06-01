import React, { FC, PropsWithChildren } from 'react';

const Container: FC<PropsWithChildren> = ({ children }) => {
  return <div className="w-screen px-24">{children}</div>;
};

export default Container;
