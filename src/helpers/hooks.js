import { useRef } from "react";

export const useOnMount = func => {
  const mounted = useRef(true);
  if (mounted.current) func();
  mounted.current = false;
};
