//작동하지 않아 비활성화
// import React, { useEffect } from 'react';
// import { getFirebaseUID } from '../../firebase'; // Firebase에서 제공하는 함수를 import
// import { firebaseFirestore } from '../../firebase'; // Firebase에서 제공하는 Firestore 객체를 import

// const searchDocumentsByUID = async (collectionName, uid) => {
//   try {
//     const collectionRef = firebaseFirestore.collection(collectionName);
//     const querySnapshot = await collectionRef.where('uid', '==', uid).get();
    
//     const documents = [];
//     querySnapshot.forEach((doc) => {
//       // 문서 데이터를 가져와 documents 배열에 추가
//       documents.push(doc.data());
//     });

//     return documents;
//   } catch (error) {
//     throw new Error('Firebase 문서 검색 실패:', error.message);
//   }
// };

// const MyComponent = () => {
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Firebase에서 UID 검색
//         const documents = await searchDocumentsByUID('mycollection', '123');
//         // 검색 결과 처리
//         console.log(documents);
//       } catch (error) {
//         // 에러 처리
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   return <div>My Component</div>;
// };

// export default MyComponent;