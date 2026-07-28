import { useState, useEffect, useCallback } from "react";

/**
 * Minimal hash-based router.
 * Returns [currentPath, navigate] where currentPath is e.g. "/" or "/perfil".
 */
export function useHashRouter() {
  const getPath = () => {
    const hash = window.location.hash.replace(/^#/, "") || "/";
    return hash;
  };

  const [path, setPath] = useState(getPath);

  useEffect(() => {
    const onHashChange = () => setPath(getPath());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const navigate = useCallback((to) => {
    window.location.hash = to;
  }, []);

  return [path, navigate];
}
