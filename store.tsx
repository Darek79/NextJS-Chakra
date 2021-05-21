import {useState, createContext} from "react";
import IsBreakpoint from "./hooks/helperFN";
interface CompProps {
  children: React.ReactElement;
}

interface ContextProps {
  breakpoint: number;
  innerW: number;
}

export const AppContext = createContext<ContextProps>({
  breakpoint: 880,
  innerW:0
});

export const WithContext: React.FC<CompProps> = ({
  children,
}): JSX.Element => {
  const innerW = IsBreakpoint();
  const context = {
    breakpoint: 880,
    innerW,
  };
  return (
    <AppContext.Provider value={context}>
      {children}
    </AppContext.Provider>
  );
};
