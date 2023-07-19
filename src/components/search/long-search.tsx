import styled from 'styled-components';
// import { SearchIcon } from 'your-icon-library'; // Replace 'your-icon-library' with the actual library name
import { SearchIcon } from '@/components/icons/search-icon';

const LongSearchBox = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ff7034;
  border-radius: 5px;
  padding: 4px;
  width: 400px; /* You can adjust the width to your preference */
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  margin-left: 8px;
`;

const LongSearch = () => {
  return (
    <LongSearchBox>
      <SearchIcon className="h-5 w-5" />
      <SearchInput type="text" placeholder="Search..." />
    </LongSearchBox>
  );
};

export default LongSearch;
