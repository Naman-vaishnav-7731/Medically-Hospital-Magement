import { FC, ChangeEvent } from "react";

interface SearchBarProps {
  placeholder: string;
  name: string;
  handleSearch: (searchText: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ placeholder, name, handleSearch }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    handleSearch(value);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder={placeholder}
        className="w-[675px] h-[46px] rounded-[28px] p-5"
        onChange={handleChange}
        name={name}
      />
    </div>
  );
};

export default SearchBar;
