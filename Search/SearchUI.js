import React from 'react';
import {
  ReactiveBase,
  SearchBox,
  SelectedFilters,
  ResultCard,
  ReactiveList,
} from '@appbaseio/reactivesearch';

const SearchUI = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleChange = (text) => {
    setSearchTerm(text);
  };

  const handleSubmit = () => {
    handleSearch(searchTerm);
  };

  return (
    <ReactiveBase
      app="baby"
  url="http://localhost:9200"
      enableAppbase
    >
      <div className="navbar">
        <SearchBox
          componentId="mainSearch"
          dataField={['original_title', 'original_title.search']}
          queryFormat="and"
          placeholder="검색"
          iconPosition="left"
          autosuggest={true}
          filterLabel="search"
          enableRecentSuggestions={true}
          enablePopularSuggestions={true}
          enablePredictiveSuggestions={true}
          popularSuggestionsConfig={{
            size: 3,
            minHits: 2,
            minChars: 4,
          }}
          recentSuggestionsConfig={{
            size: 3,
            minChars: 4,
          }}
          index="baby"
          size={10}
          className="searchbar"
          innerClass={{
            input: 'searchbox',
            list: 'suggestionlist',
          }}
          addonAfter={
            <span tabIndex="1" className="focus-shortcut">
              /
            </span>
          }
        />
      </div>
      <div className={'display'}>
        <div className={'mainBar'}>
          <SelectedFilters />
          <ReactiveList
            componentId="SearchResult"
            dataField="original_title"
            size={8}
            pagination
            react={{
              and: ['mainSearch'],
            }}
            render={({ data }) => (
              <ReactiveList.ResultCardsWrapper>
                {data.map((item) => (
                  <ResultCard key={item.id}>
                    <ResultCard.Image src={item.image} />
                    <ResultCard.Title>
                      <div
                        className="post-title"
                        dangerouslySetInnerHTML={{
                          __html: item.original_title,
                        }}
                      />
                    </ResultCard.Title>

                    <ResultCard.Description>
                      <div className="flex column justify-space-between">
                        <div>
                          <div>
                            by{' '}
                          </div>
                        </div>
                      </div>
                    </ResultCard.Description>
                  </ResultCard>
                ))}
              </ReactiveList.ResultCardsWrapper>
            )}
          />
        </div>
      </div>
    </ReactiveBase>
  );
};

export default SearchUI;

// CSS styles
const styles = {
  navbar: {
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#0b6aff',
    color: '#fff',
    height: 52,
    fontSize: 15,
    letterSpacing: '0.05rem',
  },
  logo: {
    marginLeft: 16,
    float: 'left',
  },
  searchbar: {
    marginLeft: 'auto',
    marginRight: 'auto',
    minWidth: 'min(60vw, 400px)',
    borderRadius: 30,
    background: 'white',
    border: '1px solid',
  },
  suggestionlist: {
    color: '#424242',
    width: '90%',
    marginLeft: '5%',
  },
  display: {
    display: 'flex',
    marginTop: 60,
  },
  leftSidebar: {
    width: 320,
    height: '100%',
    padding: '15px 20px',
    position: 'fixed',
    left: 0,
    right: 0,
    borderRight: '1px solid #f0f0f0',
    height: '100vh',
    overflow: 'auto',
  },
  mainBar: {
    width: 'calc(100% - 320px)',
    position: 'relative',
    left: 320,
    padding: '0px 30px',
    backgroundColor: '#fefefe',
  },
  resultData: {
    resultImage: {
      backgroundSize: 'cover',
      maxHeight: 200,
    },
  },
  resultAuthor: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  inputAddon: {
    borderRadius: '0 !important',
    borderLeft: 'none !important',
    padding: '6px 10px !important',
  },
  'sui-focus': {
    backgroundColor: 'rgba(255, 255, 255, 0.9) !important',
    boxShadow: 'none !important',
  },
  'focus-shortcut': {
    padding: '5px 15px',
    backgroundColor: '#f4f4f4',
    border: '1px solid #ddd',
    borderRadius: 5,
    marginLeft: 10,
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};

// Apply styles to elements
Object.keys(styles).forEach((key) => {
  const element = document.getElementsByClassName(key)[0];
  if (element) {
    Object.assign(element.style, styles[key]);
  }
});
