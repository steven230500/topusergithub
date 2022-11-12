import React from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';
import { useEffect, useState } from 'react';

const Person = ({route, navigation}) => {
    let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState();
  let [response, setResponse] = useState();

  const {user} = route.params;


  useEffect(() => {
    fetch("https://api.github.com/users/"+user)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoading(false);
          setResponse(result);
        },
        (error) => {
          setIsLoading(false);
          setError(error);
        }
      )
  }, []);

  const getContent = () => {
    if (isLoading) {
      return <ActivityIndicator size="large" />;
    }

    if (error) {
      return <Text>{error}</Text>
    }
    console.log(response["avatar_url"])
    
    return <Text>Blog {response["blog"]}</Text>;
  };

  return (
    <View style={styles.container}>
      {getContent()}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Person;
