import React, { useState } from "react";

export default function useToggle(defaultValue) {
  const [open, setOpen] = useState(defaultValue);

  const toggle = () => {
    setOpen((currentValue) => !currentValue);
  };

  const openMenu = () => {
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return { open, toggle, openMenu, closeMenu };
}
