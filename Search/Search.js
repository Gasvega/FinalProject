//작동하지 않아 비활성화
// import React, { useEffect, useState } from 'react';
// import { View, Text } from 'react-native';
// import { handleSearchByUID } from './Search';
// import { getFirebaseUID } from '../../firebase';
// import SearchUI from '../TabComponent/SearchUI';

// const Search = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [firebaseUID, setFirebaseUID] = useState(null);

//   useEffect(() => {
//     fetchFirebaseUID(); // Firebase UID를 가져오는 함수를 호출하여 컴포넌트가 마운트되면 실행합니다.
//   }, []);

//   // Firebase UID를 가져오는 비동기 함수
//   const fetchFirebaseUID = async () => {
//     try {
//       const uid = await getFirebaseUID(); // Firebase UID를 가져오는 함수를 호출합니다.
//       setFirebaseUID(uid); // 가져온 Firebase UID를 상태로 설정합니다.
//       setIsLoading(false); // 로딩 상태를 해제하여 UI를 렌더링합니다.
//     } catch (error) {
//       console.log('Error fetching Firebase UID:', error); // Firebase UID를 가져오는 과정에서 오류가 발생하면 오류를 콘솔에 출력합니다.
//     }
//   };

//   const handleSearch = (searchTerm) => {
//     console.log('검색어:', searchTerm); // 검색어를 콘솔에 출력합니다.
//     handleSearchByUID(); // handleSearchByUID 함수를 호출하여 UID로 검색을 수행합니다.
//   };

//   return (
//     <View>
//       {isLoading ? (
//         <Text>Loading...</Text> // 로딩 중일 때는 "Loading..." 텍스트를 표시합니다.
//       ) : (
//         <SearchUI handleSearch={handleSearch} /> // 로딩이 완료되면 SearchUI 컴포넌트를 렌더링하고 검색 핸들러를 전달합니다.
//       )}
//     </View>
//   );
// };

// export default Search;
