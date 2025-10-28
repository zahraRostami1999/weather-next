import { FiSearch } from "react-icons/fi";

export function Loading({ isLoading }) {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
      <FiSearch className="text-yellow-400 text-6xl animate-bounce" />
    </div>
  );
}