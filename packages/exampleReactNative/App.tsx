// Copyright 2017-2019 @polkadot/example-react authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

import Identicon from '@polkadot/reactnative-identicon';
import settings from '@polkadot/ui-settings';
import { mnemonicGenerate, cryptoWaitReady } from '@polkadot/util-crypto';
import keyring from '@polkadot/ui-keyring';

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter
  },
  body: {
    backgroundColor: Colors.white
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: '600',
    color: Colors.black
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start'
  }
});

const globalAny: any = global;

const App = () => {
  const [ready, setReady] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [phrase, setPhrase] = useState<string | null>(null);
  const [ss58Format, setSS58Format] = useState(42);

  const _onClickNew = (): void => {
    const phrase = mnemonicGenerate(12);
    const { address } = keyring.createFromUri(phrase);

    setAddress(keyring.encodeAddress(address, ss58Format));
    setPhrase(phrase);
  };

  const _onChangeSS58Format = (value: string): void => {
    setSS58Format(parseInt(value, 10));
  };

  useEffect((): void => {
    ready && _onClickNew();
  }, []);

  useEffect((): void => {
    ready && address && setAddress(keyring.encodeAddress(address, ss58Format));
  }, [address, ss58Format]);

  const initialize = async (): Promise<void> => {
    try {
      keyring.loadAll({ ss58Format: 42, type: 'sr25519' });
    } catch (e) {
      console.log('Error loading keyring ', e);
    }
    await globalAny.localStorage.init();
    await cryptoWaitReady();
    setReady(true);
    _onClickNew();
  };

  if (!ready) {
    initialize();
  }

  if (!ready || !address || !phrase) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior='automatic'
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.mainTitle}>React-Native Example</Text>
            </View>
            <View style={styles.sectionContainer}>
              <Button title='Generate Address' onPress={_onClickNew}></Button>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Phrase</Text>
              <Text selectable={true} style={styles.sectionDescription}>
                {phrase}
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Icons</Text>
              <Identicon value={address} />
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Address</Text>
              <Text style={styles.sectionDescription}>{address}</Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>SS58 Format</Text>
              <View style={styles.buttonContainer}>
                {settings.availablePrefixes
                  .filter((_, index): boolean => index !== 0)
                  .map(({ text, value }): React.ReactNode => (
                    <Button key={value} title={text} onPress={(): void => _onChangeSS58Format(value.toString())} />
                  ))
                }
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
