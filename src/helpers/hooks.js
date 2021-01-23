import { useEffect, useState, useRef } from "react";
import { Dimensions } from "react-native";

export const useOnMount = func => {
  const mounted = useRef(true);
  if (mounted.current) func();
  mounted.current = false;
};

export function useDimensions() {
  const [dimensions, setDimensions] = useState(() => ({
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  })); // lazy initial state (https://reactjs.org/docs/hooks-reference.html#lazy-initial-state)
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    Dimensions.addEventListener("change", ({ window: { width, height } }) => {
      if (mounted.current) setDimensions({ width, height });
    });
    return () => {
      mounted.current = false;
      Dimensions.removeEventListener("change");
    };
  }, []);

  return dimensions;
}

export function useGridViewWidth(isGridView) {
  const DIMENSIONS = useDimensions();
  const [width, setWidth] = useState(isGridView ? DIMENSIONS.width / 2 : DIMENSIONS.width);
  useEffect(() => {
    setWidth(isGridView ? DIMENSIONS.width / 2 : DIMENSIONS.width);
  }, [DIMENSIONS, isGridView]);

  return width;
}
