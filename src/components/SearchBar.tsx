
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  className?: string;
  onSearch?: (query: string) => void;
}

const SearchBar = ({ className, onSearch }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={cn("relative", className)}>
      <Input
        type="search"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="pl-10 pr-4 rounded-full border-2 focus:border-orange-400 transition-colors"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
    </form>
  );
};

export default SearchBar;
