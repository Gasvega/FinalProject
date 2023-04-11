import React from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput, } from 'react-native';
import styles from '../Function/styles';
const TREND_DATA = [
  {
    id: '1',
    name: 'React Native',
    postCount: '10.2K',
  },
  {
    id: '2',
    name: 'JavaScript',
    postCount: '15.6K',
  },
  {
    id: '3',
    name: 'Node.js',
    postCount: '8.7K',
  },
];

const POST_DATA = [
  {
    id: '1',
    name: 'John Doe',
    username: '@johndoe',
    post_content: 'Hello sunmoon!',
  },
  {
    id: '2',
    name: 'Jane Doe',
    username: '@janedoe',
    post_content: 'Hello React Native!',
  },
  {
    id: '3',
    name: 'Bob Smith',
    username: '@bobsmith',
    post_content: 'Hello World!',
  },
];

const Search = () => {
  const [selectedTrend, setSelectedTrend] = React.useState(null);

  const trendPress = (trend) => {
    setSelectedTrend(trend);
  };

  const trendBack = () => {
    setSelectedTrend(null);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.trend} onPress={() => trendPress(item)}>
      <Text style={styles.trendName}>{item.name}</Text>
      <Text style={styles.trendPostCount}>{item.postCount} 게시글 수</Text>
    </TouchableOpacity>
  );

  const renderPost = ({ item }) => (
    <View style={styles.post}>
      <Text style={styles.postName}>{item.name}</Text>
      <Text style={styles.postUsername}>{item.username}</Text>
      <Text style={styles.postText}>{item.post}</Text>
    </View>
  );

  if (selectedTrend) {
    return (
      <View style={styles.trendpage}>
        <TouchableOpacity style={styles.backButton} onPress={trendBack}>
          <Text style={styles.backButtonText}>{"< 뒤로가기"}</Text>
        </TouchableOpacity>
        <Text style={styles.trendtitle}>{selectedTrend.name}</Text>
        <FlatList
          data={POST_DATA}
          renderItem={renderPost}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }

  return (
    <View style={styles.trendpage}>
      <Text style={styles.trendtitle}>무엇이 궁금하신가요?</Text>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchinput}
          placeholder="지금 당장 검색하기"
          placeholderTextColor="#555"
        />
        <TouchableOpacity style={styles.SearchButton}>
          <Text style={styles.buttonText}>검색</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={TREND_DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Search;

