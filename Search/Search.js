// import React from 'react';
// import { View, Text, TouchableOpacity, FlatList, TextInput, } from 'react-native';
// import styles from '../Function/styles';
// import { LogBox } from "react-native";
// LogBox.ignoreAllLogs()
// LogBox.ignoreLogs([
//   'Non-serializable values were found in the navigation state',
// ]);
// const TREND_DATA = [
//   {
//     id: '1',
//     name: 'React Native',
//     postCount: '10.2K',
//   },
//   {
//     id: '2',
//     name: 'JavaScript',
//     postCount: '15.6K',
//   },
//   {
//     id: '3',
//     name: 'Node.js',
//     postCount: '8.7K',
//   },
// ];

// const POST_DATA = [
//   {
//     id: '1',
//     name: 'John Doe',
//     username: '@johndoe',
//     post_content: 'Hello sunmoon!',
//   },
//   {
//     id: '2',
//     name: 'Jane Doe',
//     username: '@janedoe',
//     post_content: 'Hello React Native!',
//   },
//   {
//     id: '3',
//     name: 'Bob Smith',
//     username: '@bobsmith',
//     post_content: 'Hello World!',
//   },
// ];

// const Search = () => {
//   const [selectedTrend, setSelectedTrend] = React.useState(null);

//   const trendPress = (trend) => {
//     setSelectedTrend(trend);
//   };

//   const trendBack = () => {
//     setSelectedTrend(null);
//   };

//   const renderItem = ({ item }) => (
//     <TouchableOpacity style={styles.trend} onPress={() => trendPress(item)}>
//       <Text style={styles.trendName}>{item.name}</Text>
//       <Text style={styles.trendPostCount}>{item.postCount} 게시글 수</Text>
//     </TouchableOpacity>
//   );

//   const renderPost = ({ item }) => (
//     <View style={styles.post}>
//       <Text style={styles.postName}>{item.name}</Text>
//       <Text style={styles.postUsername}>{item.username}</Text>
//       <Text style={styles.postText}>{item.post}</Text>
//     </View>
//   );

//   if (selectedTrend) {
//     return (
//       <View style={styles.trendpage}>
//         <TouchableOpacity style={styles.backButton} onPress={trendBack}>
//           <Text style={styles.backButtonText}>{"< 뒤로가기"}</Text>
//         </TouchableOpacity>
//         <Text style={styles.trendtitle}>{selectedTrend.name}</Text>
//         <FlatList
//           data={POST_DATA}
//           renderItem={renderPost}
//           keyExtractor={(item) => item.id}
//         />
//       </View>
//     );
//   }

//   return (
//     <View style={styles.trendpage}>
//       <Text style={styles.trendtitle}>무엇이 궁금하신가요?</Text>
//       <View style={styles.searchBar}>
//         <TextInput
//           style={styles.searchinput}
//           placeholder="지금 당장 검색하기"
//           placeholderTextColor="#555"
//         />
//         <TouchableOpacity style={styles.SearchButton}>
//           <Text style={styles.buttonText}>검색</Text>
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={TREND_DATA}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//       />
//     </View>
//   );
// };

// export default Search;





// import { elasticClient, searchDocumentsByUID } from './MyComponent';
// import { getFirebaseUID } from '../../firebase';

// const handleSearchByUID = async () => {
//   try {
// const uid = await getFirebaseUID();
//     const results = await searchDocumentsByUID('indexName', uid);
//     // 검색 결과 처리 로직 추가
//     console.log('검색 결과:', results);
//   } catch (error) {
//     // 에러 처리 로직 추가
//     console.log('검색 에러:', error);
//   }
// };

// export default { handleSearchByUID };


// Search.js

// import React, { useEffect, useState } from 'react';
// import { View, Button, Text } from 'react-native';
// import { handleSearchByUID } from './Search';
// import { getFirebaseUID } from '../../firebase';
// import SearchUI from '../TabComponent/SearchUI';

// const Search = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     fetchFirebaseUID();
//   }, []);

//   const fetchFirebaseUID = async () => {
//     try {
//       const uid = await getFirebaseUID();
//       console.log('Firebase UID:', uid);
//     } catch (error) {
//       console.log('Firebase UID 가져오기 실패:', error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleSearch = (searchTerm) => {
//     // 검색어를 이용하여 검색 작업을 수행하는 로직
//     console.log('검색어:', searchTerm);
//     handleSearchByUID();
//   };

//   return (
//     <View>
//       {isLoading ? (
//         <Text>Loading...</Text>
//       ) : (
//         <SearchUI handleSearch={handleSearch} />
//       )}
//     </View>
//   );
// };

// export default Search;

// import React, { useState } from 'react';
// import { View, Text, TextInput, Button } from 'react-native';
// import { Searchbox, SearchBase, SearchContext } from '@appbaseio/react-native-searchbox';

// const Search = () => {
//   const [searchText, setSearchText] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = (value) => {
//     setSearchText(value);
//   };

//   const handleClear = () => {
//     setSearchText('');
//   };

//   return (
//     <SearchBase index="<index-name>" credentials="<base64-encoded-credentials>">
//       <SearchContext.Consumer>
//         {(searchbase) => (
//           <View>
//             <Text>검색:</Text>
//             <TextInput
//               value={searchText}
//               onChangeText={handleSearch}
//               placeholder="검색어를 입력하세요..."
//             />
//             <Button title="지우기" onPress={handleClear} />
            
//             <Text>검색 결과:</Text>
//             {searchResults.map((result) => (
//               <Text key={result._id}>{result._source.title}</Text>
//             ))}
//           </View>
//         )}
//       </SearchContext.Consumer>
//     </SearchBase>
//   );
// };

// export default Search;


// import React, { useEffect, useState } from 'react';
// import { View, Text } from 'react-native';
// import { handleSearchByUID } from './Search';
// import { getFirebaseUID } from '../../firebase';
// import SearchUI from '../TabComponent/SearchUI';

// const Search = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [firebaseUID, setFirebaseUID] = useState(null);

//   useEffect(() => {
//     fetchFirebaseUID();
//   }, []);

   

//   const handleSearch = (searchTerm) => {
//     console.log('검색어:', searchTerm);
//     handleSearchByUID();
//   };

//   return (
//     <View>
//       {isLoading ? (
//         <Text>Loading...</Text>
//       ) : (
//         <SearchUI handleSearch={handleSearch} />
//       )}
//     </View>
//   );
// };

// export default Search;

import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { handleSearchByUID } from './Search';
import { getFirebaseUID } from '../../firebase';
import SearchUI from '../TabComponent/SearchUI';

const Search = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [firebaseUID, setFirebaseUID] = useState(null);

  useEffect(() => {
    fetchFirebaseUID(); // The original code had a function call to fetchFirebaseUID, but it was not defined
  }, []);

  // Fetch Firebase UID
  const fetchFirebaseUID = async () => {
    try {
      const uid = await getFirebaseUID(); // Assuming getFirebaseUID is a function that retrieves the Firebase UID
      setFirebaseUID(uid);
      setIsLoading(false);
    } catch (error) {
      console.log('Error fetching Firebase UID:', error);
    }
  };

  const handleSearch = (searchTerm) => {
    console.log('검색어:', searchTerm);
    handleSearchByUID();
  };

  return (
    <View>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <SearchUI handleSearch={handleSearch} />
      )}
    </View>
  );
};

export default Search;
