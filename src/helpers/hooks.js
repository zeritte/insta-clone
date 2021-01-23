import { useEffect, useState, useRef } from "react";
import { Dimensions } from "react-native";

export const useOnMount = func => {
  const mounted = useRef(true);
  if (mounted.current) func();
  mounted.current = false;
};

export function useOrientation() {
  const [dimensions, setDimensions] = useState(() => ({
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  })); // an arrow function is used in order to prevent it calculated on every render
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    Dimensions.addEventListener("change", ({ window: { width, height } }) => {
      if (mounted.current) setDimensions({ width, height });
    });
    () => {
      mounted.current = false;
      Dimensions.removeEventListener("change");
    };
  }, []);

  return dimensions;
}
