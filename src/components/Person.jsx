import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  TouchableHighlight,
  Image,
} from 'react-native';
import {useEffect, useState} from 'react';

const Person = ({route, navigation}) => {
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState();
  let [response, setResponse] = useState({});

  const {user} = route.params;

  useEffect(() => {
    fetch('https://api.github.com/users/' + user)
      .then(res => res.json())
      .then(
        result => {
          setIsLoading(false);
          setResponse(result);
        },
        error => {
          setIsLoading(false);
          setError(error);
        },
      );
  }, []);

  const getContent = () => {
    if (isLoading) {
      return <ActivityIndicator size="large" />;
    }

    if (error) {
      return <Text>{error}</Text>;
    }

    return (
      <View style={{alignItems: 'center'}}>
        <View style={[styles.profileImgContainer, {borderWidth: 1}]}>
          <Image
            source={{uri: response['avatar_url']}}
            style={styles.profileImg}
          />
        </View>
        <Text style={styles.textStyle}>Name: {response['name']}</Text>
        <Text style={styles.textStyle}>Blog: {response['blog']}</Text>
        <Text style={styles.textStyle}>Company: {response['company']}</Text>
      </View>
    );
  };

  return <View style={styles.container}>{getContent()}</View>;
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  profileImgContainer: {
    overflow: 'hidden',
    height: 120,
    width: 120,
    borderRadius: 60,
  },
  profileImg: {
    height: 120,
    width: 120,
    borderRadius: 60,
  },
  textStyle: {
    marginTop: 20,
    textAlign: 'center',
  },
});

export default Person;
