import { SelectProps } from "@chakra-ui/select";
import { useEffect, useRef } from "react";
import { SelectWrapper, StyledSelect } from "./styles";

type SelectCustomProps = SelectProps;

export default function SelectCustom(props: SelectCustomProps) {
  const selectRef = useRef<HTMLSelectElement | null>(null);

  useEffect(() => {
    const removeIconWrapper = () => {
      if (!selectRef.current) return;

      const parent = selectRef.current.closest(".chakra-select__wrapper"); // Obtém o elemento pai correto
      if (!parent) return;

      const iconWrapper = parent.querySelector(
        "[class*='chakra-select__icon-wrapper']"
      );

      if (iconWrapper) {
        iconWrapper.remove();
      }
    };

    const observer = new MutationObserver(() => {
      removeIconWrapper();
    });

    if (selectRef.current) {
      const parent = selectRef.current.closest(".chakra-select__wrapper");
      if (parent) {
        observer.observe(parent, {
          childList: true,
          subtree: true,
        });
      }
    }

    return () => observer.disconnect();
  }, []);

  return (
    <SelectWrapper>
      <StyledSelect ref={selectRef} icon={null} {...props} />
    </SelectWrapper>
  );
}
