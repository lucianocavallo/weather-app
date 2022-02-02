import React from 'react';

import {
  Container,
  Searching,
  CloseCross,
  SearchBarContainter,
  InputContainter,
  SearchIcon,
  SearchInput,
  SearchButton,
} from './styles';

const SearchBar: React.FC<SearchBarProps> = ({
  searching,
  setSearching,
  fetchCurrentWeather,
}) => {
  const [inputLocation, setInputLocation] = React.useState('');

  const toggleSearch = () => {
    setSearching((prevVal: boolean) => !prevVal);
  };

  const searchLocation = (location: string) => {
    fetchCurrentWeather(location);
  };

  const searchLocationEnter = (event: React.KeyboardEvent) => {
    if (event.code === 'Enter') {
      fetchCurrentWeather(inputLocation);
    }
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputLocation(event.target.value);
  };

  return (
    <Container>
      {!searching && (
        <Searching>
          <button onClick={toggleSearch}>Search for places</button>
        </Searching>
      )}

      {searching && (
        <div>
          <CloseCross onClick={toggleSearch}></CloseCross>
          <SearchBarContainter>
            <InputContainter>
              <SearchIcon />
              <SearchInput
                value={inputLocation}
                onChange={onInputChange}
                onKeyUp={searchLocationEnter}
                type="text"
                placeholder="search location"
              />
            </InputContainter>
            <SearchButton onClick={() => searchLocation(inputLocation)}>
              Search
            </SearchButton>
          </SearchBarContainter>
        </div>
      )}
    </Container>
  );
};

export { SearchBar };
