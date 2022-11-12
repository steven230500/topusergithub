import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const Home = ({navigation}) => {
  const accounts = [
    {name: 'GrahamCampbell', id: 1},
    {name: 'fabpot', id: 2},
    {name: 'weierophinney', id: 3},
    {name: 'rkh', id: 4},
    {name: 'josh', id: 5},
  ];

  return (
    <SafeAreaView>
      <View
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scroll}>
        <View>
          <Text style={styles.title}>Top 5 GitHub Users</Text>
          <Text style={styles.subTitle}>
            Tap the username to see more information
          </Text>
        </View>
        <FlatList
          data={accounts}
          keyExtractor={a => a.id}
          renderItem={({item, index}) => (
            <TouchableOpacity
            onPress={() => navigation.navigate('Person', {
                user: item.name
              })}
              style={{margin: 10, backgroundColor: '#c5c5c5', padding: 10}}>
              <Text>
                <Text>User#{item.id} </Text>
                <Text>{item.name}</Text>
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    paddingHorizontal: 15,
    paddingVertical: 25,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default Home;
