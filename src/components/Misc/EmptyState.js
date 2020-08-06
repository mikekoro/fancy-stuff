import React from "react";

/**
 * Empty state UI
 * @param {boolean} is_empty Flag to enable or disable empty state
 */

const EmptyState = ({ is_empty }) => {
  if (!is_empty) return null;
  return <div className="text-center">No results were returned:(</div>;
};

export default EmptyState;
